"use client";
import ReactDOM from 'react-dom';
import * as React from "react";
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Search, X } from "lucide-react";
import dynamic from "next/dynamic";
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./booking-style.css";

const Select = dynamic(() => import('react-select'), { ssr: false });

import useBook from "./useBook";
import { useForm } from './FormContext';

export default function BookNowForm() {
  const [isRoomMenuOpen, setIsRoomMenuOpen] = useState(false);
  const { isFormOpen, toggleForm } = useForm();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const pathname = usePathname();
  const [showPopupForm, setShowPopupForm] = useState(false);
const [guestInfo, setGuestInfo] = useState({ name: '', email: '', mobile: '' });

  const {
    rangeStart, setRangeStart, selectEndDate, rangeEnd, setRangeEnd, today1,
    formRows, children, adult, countroom,
    handleIncrement, handleDecrement, addNewRow, handleRemove
  } = useBook();

// ... rest of your code remains the same until the toggleBookingForm function

const handleEnquirySubmit = async () => {
  const { name, email, mobile } = guestInfo;

  if (!name || !mobile) {
    toast.error("Name and Mobile are required");
    return;
  }
 
  const payload = {
    source_enquiry: selectedHotel.value === "jawai" ? "alivaa-jawai" : selectedHotel.value === "dalhousie" ? "alivaa-dalhousie" : "alivaa-lansdowne",    name: name,
    phone: mobile,
    message: ``,
    checkin_date: formatDate(rangeStart),
    checkout_date: formatDate(rangeEnd),
    rooms: countroom.toString(),
    adults: adult().toString(),
    children: children().toString(),
    web_source: "alivaahotels.com"
  };

  try {
    const response = await fetch("https://demo.cinuniverse.com/alivaa/be-enquiry.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Submitted enquiry data:", payload);
    console.log("Server response:", data);

    if (data.status === "success") {
      toast.success(data.message || "Enquiry submitted successfully");
      setShowPopupForm(false);
      setGuestInfo({ name: '', email: '', mobile: '' }); // clear form
    } else {
      toast.error(data.message || "Failed to submit enquiry");
    }
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    toast.error("Something went wrong. Please try again later.");
  }
};

  const hotelOptions = [
    {
      value: '',
      label: 'Select Hotel',
      isDisabled: true
    },
    {
      value: 'gurugram1',
      label: 'Alivaa Hotel, Gurugram',
      slug: 'gurgaon-hotels',
      url: 'https://bookings.alivaahotels.com/inst/#/home?propertyId=981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc=&JDRN=Y&RoomID=184902,184903,185018,185019,184904,185017,185949'
    },
    {
  value: 'gurugram2',
  label: 'Hoften Hotel, Gurugram',
  slug: 'gurugram-hotel',
  url: 'https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385'

},
    {
      value: 'mcleodganj',
      label: 'Alivaa Hotel, Mcleodganj',
      slug: 'mcleodganj',
      url: 'https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2'
    },
    {
      value: 'lansdowne',
      label: 'Alivaa Hotel, Lansdowne',
      slug: 'lansdowne',
      url: ''
    },
    {
      value: 'jawai',
      label: 'Alivaa Hotel, Jawai',
      slug: 'jawai',
      url: ''
    },
    {
  value: 'dalhousie',
  label: 'The Hoften Blue Magnets, Dalhousie',
  slug: 'dalhousie',
  url: 'https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=cee239fd-433d-4700-bd55-67795c3eca05&type=2'
},
  ];

  const checkInDatePickerRef = useRef(null);
  const checkOutDatePickerRef = useRef(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const isHomePage = pathname === '/';
  const [monthsToShow, setMonthsToShow] = useState(2);

  useEffect(() => {
    const updateMonthsToShow = () => {
      setMonthsToShow(window.innerWidth < 768 ? 1 : 2);
    };
    updateMonthsToShow();
    window.addEventListener('resize', updateMonthsToShow);
    return () => window.removeEventListener('resize', updateMonthsToShow);
  }, []);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isRoomMenuOpen && !event.target.closest('.rooms-child-outer-block')) {
        setIsRoomMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isRoomMenuOpen]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

 const handleCheckAvailability = () => {
  if (!selectedHotel) {
    toast.error("Please select a hotel");
    return;
  }
  if (!rangeStart || !rangeEnd) {
    toast.error("Please select both check-in and check-out dates");
    return;
  }

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  let bookingUrl = selectedHotel.url;
  const checkIn = formatDate(rangeStart);
  const checkOut = formatDate(rangeEnd);
  if (selectedHotel.value === 'jawai' || selectedHotel.value === 'lansdowne' ) {
  setShowPopupForm(true); // show popup instead of opening URL
  return;
}

 else if (selectedHotel.value === 'gurugram2') {
  bookingUrl += `&checkIn=${checkIn}&checkOut=${checkOut}&noofrooms=${countroom}`;
  formRows.forEach((row, index) => {
    bookingUrl += `&adult${index}=${row.count1}&child${index}=${row.count2}`;
  });
  bookingUrl += `&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&RoomID=210380,210381,210383,210384,210385&ap=1`;
} else if (selectedHotel.value === 'gurugram1') {
  bookingUrl += `&checkIn=${checkIn}&checkOut=${checkOut}&clientWidth=1280&noofrooms=${countroom}`;
  formRows.forEach((row, index) => {
    bookingUrl += `&adult${index}=${row.count1}&child${index}=${row.count2}`;
  });
  bookingUrl += `&gsId=981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc=&RoomID=184902,184903,185018,185019,184904,185017,185949`;
}
else if (selectedHotel.value === 'dalhousie') {
  const roomPropertyId = 'cee239fd-433d-4700-bd55-67795c3eca05';

  let guestParams = [];

  formRows.forEach((row, index) => {
    const roomIndex = index + 1;
    if (row.count1 > 0) guestParams.push(`ac${roomIndex}=${row.count1}`);
    if (row.count2 > 0) guestParams.push(`cc${roomIndex}=${row.count2}`);
  });

  const guestString = `[${guestParams.join(',')}]`;

  bookingUrl = `https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=${roomPropertyId}&type=2&checkInDate=${checkIn}&checkOutDate=${checkOut}&guest=${encodeURIComponent(guestString)}&roomPropertyID=${roomPropertyId}`;

  window.open(bookingUrl, "_blank");
  return;
}

  window.open(bookingUrl, "_blank");
};

  const handleHotelSelect = (option) => setSelectedHotel(option);
  const openCheckInCalendar = (e) => { e.stopPropagation(); checkInDatePickerRef.current.setOpen(true); };
  const openCheckOutCalendar = (e) => { e.stopPropagation(); checkOutDatePickerRef.current.setOpen(true); };
  const toggleBookingForm = (e) => { e.preventDefault(); e.stopPropagation(); setIsFormOpen(!isFormOpen); if (isRoomMenuOpen) setIsRoomMenuOpen(false); };
  const handleRoomMenuToggle = (e) => { e.stopPropagation(); setIsRoomMenuOpen(!isRoomMenuOpen); };

  return (
    <>
      <Toaster position="bottom-right" />
      <div className={`header_booking_engine_container ${isFormOpen ? "show" : ""} ${isHomePage ? 'home-page-class' : ''}`}>
        <div className="header_booking_engine">
          <div className="row justify-content-center">

            {/* Hotel Select */}
            <div className="header-search-select-option col-12 col-md-3">
              <label htmlFor="hotel-select">Hotel/City</label>
              <Select
                className="form-control p-0 border-0"
                id="hotel-select"
                
                options={hotelOptions}
                onChange={handleHotelSelect}
                value={selectedHotel}
              />
            </div>

            {/* Check-in */}
            <div className="datepicker-outer col-12 col-md-2">
              <label htmlFor="check-in">Check-in</label>
              <div className="datepicker-container">
                <DatePicker
                  selectsStart
                  selected={rangeStart}
                  dateFormat="dd/MM/yyyy"
                  onCalendarOpen={() => setIsCalendarOpen(true)}
                  onCalendarClose={() => setIsCalendarOpen(false)}
                  minDate={today1}
                  startDate={rangeStart}
                  // endDate={rangeEnd}
                  className="form-control pl-2"
                  id="check-in"
                  onChange={(date) => {
                    setRangeStart(date);
                    const nextDay = new Date(date);
                    nextDay.setDate(date.getDate() + 1);
                    setRangeEnd(nextDay);
                  }}
                  monthsShown={monthsToShow}
                  shouldCloseOnSelect={true}
                  ref={checkInDatePickerRef}
                />
                <span className="calendar-icon" onClick={openCheckInCalendar}><Calendar size={20} /></span>
              </div>
            </div>

            {/* Check-out */}
            <div className="datepicker-outer col-12 col-md-2">
              <label htmlFor="check-out">Check-out</label>
              <div className="datepicker-container">
                <DatePicker
                  selectsEnd
                  selected={rangeEnd}
                  dateFormat="dd/MM/yyyy"
                  onCalendarOpen={() => setIsCalendarOpen(true)}
                  onCalendarClose={() => setIsCalendarOpen(false)}
                  id="check-out"
                  endDate={rangeEnd}
                  className="form-control pl-2"
                  onChange={selectEndDate}
                  minDate={new Date(rangeStart.getTime() + 24 * 60 * 60 * 1000)} 
                  monthsShown={monthsToShow}
                  shouldCloseOnSelect={true}
                  // minDate={rangeStart}
                  ref={checkOutDatePickerRef}
                />
                <span className="calendar-icon" onClick={openCheckOutCalendar}><Calendar size={20} /></span>
              </div>
            </div>

            {/* Rooms & Guests */}
            <div className="rooms-child-outer-block col-12 col-md-3 position-relative">
              <label htmlFor="rooms-childs-input">Please Select</label>
              <input
                type="text"
                id="rooms-childs-input"
                className="rooms-childs-input form-control"
                value={`Rooms: ${countroom} - Adults: ${adult()} - Children: ${children()}`}
                readOnly
                onClick={handleRoomMenuToggle}
              />
              {isRoomMenuOpen && (
                <div className="showmoreT add-rooms-block" onClick={(e) => e.stopPropagation()}>
                  <div>
                    {formRows.map((row, index) => (
                      <div key={row.id} className="add-rooms-div">
                        <div className="room-name-or-remove">
                          <span>Room {index + 1}</span>
                          <button className="yellow-btn rmv" onClick={() => handleRemove(row.id)}>
                            Remove
                          </button>
                        </div>
                        <div className="row justify-content-center ms-0">
                          <div className="col-6">
                            <div className="form-group plus-min-style">
                              <p>Adult(s):</p>
                              <button onClick={() => handleDecrement(row.id, "count1")} disabled={row.count1 <= 1}>-</button>
                              <span>{row.count1}</span>
                              <button onClick={() => handleIncrement(row.id, "count1")} disabled={row.count1 >= 2}>+</button>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group plus-min-style">
                              <p>Child(ren):</p>
                              <button onClick={() => handleDecrement(row.id, "count2")} disabled={row.count2 <= 0}>-</button>
                              <span>{row.count2}</span>
                              <button onClick={() => handleIncrement(row.id, "count2")} disabled={row.count2 >= 2}>+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button onClick={addNewRow} className="yellow-btn btn">Add Room</button>
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="col-12 col-md-2">
              <button className="yellow-btn btn" onClick={handleCheckAvailability}>Check Availability</button>
            </div>
          </div>
        </div>
      </div>

      <div className={`booking-search-bar-btn-div ${isHomePage ? 'home-page-class' : ''}`} style={{ zIndex: isCalendarOpen ? 0 : 10 }}>
        <button onClick={toggleBookingForm} className="booking-toggle-btn" aria-label={isFormOpen ? "Close booking form" : "Open booking form"}>
          {isFormOpen ? <X size={20} color="black" /> : <Search size={20} color="black" />}
        </button>
      </div>



    </>
  );
}
