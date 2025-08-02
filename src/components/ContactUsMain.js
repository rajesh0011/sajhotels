"use client";
import { LocateIcon, Mail, MapPinned, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from 'react-hot-toast';
import "../styles/innerstyle.css"
const ContactUsMain = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        source_enquiry: '',
        web_source: '',
    });
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        // Email validation (simple regex)
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        // Phone validation (digits only, length check)
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Phone must be at least 10 digits and contain digits only';
        }
        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
        }
        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 5) {
            newErrors.message = 'Message must be at least 5 characters';
        }
        setErrors(newErrors);
        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error message on input change
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            toast.error('Please fix the errors in the form.');
            return;
        }
        setLoading(true);
        setResponseMsg('');
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.status === 'success') {
                toast.success(result.message || 'Form submitted successfully!');
                setResponseMsg(result.message || 'Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    source_enquiry: '',
                    web_source: '',
                });
                setErrors({});
            } else {
                toast.error(result.message || 'Submission failed!');
                setResponseMsg(result.message || 'Submission failed!');
            }
        } catch (err) {
            toast.error('Something went wrong. Please try again.');
            setResponseMsg('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
            setTimeout(() => setResponseMsg(''), 8000); // Clear message after 5 seconds
        }
    };
    return (
        <section className="contact-us-2  contact-us-main">
            <div className="container contact-us-main-form">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit} className="Query-form-fields" noValidate>
                            <div className="col-xs-12 no-pad">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="name"
                                                maxLength={30}
                                                placeholder="Name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full p-2 border form-control ${errors.name ? 'is-invalid' : ''}`}
                                            />
                                            {errors.name && <small className="text-danger">{errors.name}</small>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group mb-3">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                maxLength={100}
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full p-2 border form-control ${errors.email ? 'is-invalid' : ''}`}
                                            />
                                            {errors.email && <small className="text-danger">{errors.email}</small>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 no-pad ">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group mb-3">
                                            <input
                                                type="tel"
                                                maxLength={10}
                                                name="phone"
                                                placeholder="Phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full p-2 border form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            />
                                            {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="subject"
                                                max={50}
                                                placeholder="Subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className={`w-full p-2 border form-control ${errors.subject ? 'is-invalid' : ''}`}
                                            />
                                            {errors.subject && <small className="text-danger">{errors.subject}</small>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 no-pad ">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-xs-12">
                                        <div className="form-group mb-3">
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                                maxLength={500}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full p-2 border form-control ${errors.message ? 'is-invalid' : ''}`}
                                            />
                                            {errors.message && <small className="text-danger">{errors.message}</small>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 no-pad">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-xs-12 voffset-bottom2">
                                        <div className="form-group mb-3 text-center">
                                            <button type="submit" disabled={loading} className="btn btn-primary contact-submit mt-3">
                                                {loading ? 'Processing...' : 'Submit'}
                                            </button>
                                        </div>
                                        <div>
                                            {/* ✅ Response Message */}
                                            {responseMsg && (
                                                <p className="btn" style={{ color: responseMsg.toLowerCase().includes('success') ? 'green' : 'green', fontWeight: 'bold' }}>
                                                    {responseMsg}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <style jsx>{`
                    input,textarea{
                    border: 1px solid #ddd;
                    border-radius: 0px;
                    }
                    input:focus,textarea:focus{
                    box-shadow: none;
                    }
                    .contact-submit{
                    letter-spacing: 2px;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 7px 20px;
                    text-transform: uppercase;
                    border-radius: 0px;
                    }
                    .box-d-flex {
                    display: flex;
                    gap: 10px;
                }
                    .address-contact {
                        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                        padding: 1.5rem 1rem;
                        margin-bottom: .5rem;
                    }
                       .address-contact .box-d-flex p{
                       margin-bottom: 0;
                       }
                       .map-iframe{
                       filter:grayscale(1) opacity(0.9);
                       }
                       .inner-head-title{
                       font-size: 20px;
                       margin-bottom:.5rem;
                       }
                       .address-contact p a{
                       color:#000;
                       }
                `}</style>
                <div className="row mb-4">
                    <div className="col-12">
                        <ul className="nav nav-tabs" id="contactTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#mumbai" type="button" role="tab" aria-controls="general" aria-selected="true">
                                    Mumbai
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="booking-tab" data-bs-toggle="tab" data-bs-target="#mahabaleshwar" type="button" role="tab" aria-controls="booking" aria-selected="false">
                                    Mahabaleshwar
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="feedback-tab" data-bs-toggle="tab" data-bs-target="#feedback" type="button" role="tab" aria-controls="feedback" aria-selected="false">
                                    Feedback
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content pt-3" id="contactTabsContent">
                            <div className="tab-pane fade show active" id="mumbai" role="tabpanel" aria-labelledby="general-tab">
                                <div className="row mb-3 mt-4">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="location-address-contact">
                                            <div className="address-contact">
                                                <h3 className="inner-head-title">Mumbai Office</h3>
                                                <div className="box-d-flex">
                                                    <MapPinned />
                                                    <p className="contact_Address"><Link href="https://maps.app.goo.gl/QYMGciZn42oUbg5AA" target="_blank" className="color-black"> Saj Hotels Pvt. Ltd.
                                                        102, Navkar Plaza, 1st floor, Bajaj Road,
                                                        Vile Parle (W), Mumbai 400 056.</Link></p>
                                                </div>
                                            </div>
                                            <div className="address-contact">
                                                <h3 className="inner-head-title">Phone</h3>
                                                <div className="box-d-flex">
                                                    <PhoneCall />
                                                    <p className="contact_Address"><Link href="tel:02226202299">022 – 2620 2299 / 2620 3399.</Link></p>
                                                </div>
                                            </div>
                                            <div className="address-contact">
                                                <h3 className="inner-head-title">Email</h3>
                                                <div className="box-d-flex">
                                                    <Mail />
                                                    <p className="contact_Address"><Link href="maito:enquiry@sajresort.in">enquiry@sajresort.in</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="row" >
                                            <iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30160.80282139554!2d72.842417!3d19.103253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x115aedfabe5a2f31%3A0x3d597a311189eb06!2sSaj%20Hotels%20Ltd!5e0!3m2!1sen!2sus!4v1754044662502!5m2!1sen!2sus" width="100%" height="350"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="mahabaleshwar" role="tabpanel" aria-labelledby="booking-tab">
                                <div className="row mb-3 mt-4">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="location-address-contact">
                                            <div className="address-contact">
                                                <h3 className="inner-head-title">Saj On The Mountain, Mahabaleshwar</h3>
                                                <div className="box-d-flex">
                                                    <MapPinned />
                                                    <p className="contact_Address">
                                                        <Link href="https://maps.app.goo.gl/R8YrJP4JZ9LHXyPt9" target="_blank" className="color-black">
                                                            Metgutad Village,
                                                            Panchgani Mahabaleshwar Road,
                                                            District – Satara
                                                            Mahabaleshwar 412 806</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="address-contact">
                                                <h3 className="inner-head-title">Phone</h3>
                                                <div className="box-d-flex">
                                                    <PhoneCall />
                                                    <p className="contact_Address">
                                                        <Link href="tel:02168272001">021 – 6827 2001 / 005</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="address-contact">
                                                <h3 className="inner-head-title">Email</h3>
                                                <div className="box-d-flex">
                                                    <Mail />
                                                    <p className="contact_Address">
                                                        <Link href="maito:sales@sajresort.in">sales@sajresort.in</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="row" >
                                            <iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30368.58482249555!2d73.692626!3d17.928744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26880b312677d%3A0x54539b34aea6c11!2sSaj%20On%20The%20Mountain%20by%20Club%20Mahindra!5e0!3m2!1sen!2sus!4v1754047901767!5m2!1sen!2sus" width="100%" height="350"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="feedback" role="tabpanel" aria-labelledby="feedback-tab">
                                <p>We value your feedback! Please share your experience or suggestions using the contact form.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default ContactUsMain  