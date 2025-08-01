'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import "@/styles/header.css";
import "@/styles/globals.css";
import "@/styles/style.css";

export default function Header() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 150);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleEnquireClick1 = () => {
    setShowPopup(true);
  };
  
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 40;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  if (!hasMounted) return null;

  return (
    <>
      <header>
        <nav className={`navbar navbar-expand-md navbar-light fixed-top ${isScrolled ? 'navbar-scroll bg-white shadow-sm' : ''}`}>
          <div className="container">
            
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item"><Link className="nav-link" href="#">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">Our Resorts</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">Restaurant</Link></li>
                </ul>
              <Link className="navbar-brand" href="/">
                <Image
                  src="/img/logo-white.png"
                  alt="Logo"
                  width={200}
                  height={150}
                  className='before-fixed-logo'
                  priority
                />
                <Image
                  src="/img/logo-white.png"
                  alt="Logo"
                  width={250}
                  height={150}
                  className='after-fixed-logo'
                  priority
                />
              </Link>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" href="#">Gallery</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">Virtual Tour</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">Contact Us</Link></li>
              </ul>
            </div>
            <button className="btn btn-primary header-fixed-book-now">
              Book Now
            </button>
          </div>
        </nav>
      </header>
      {/* {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />} */}
    </>
  );
}