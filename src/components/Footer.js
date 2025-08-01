"use client";
import Link from 'next/link';
import Image from 'next/image';
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faWhatsapp, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer py-3 wow fadeIn" data-wow-delay="0.2s">
        <div className="site-footer-shape-1"></div>
        <div className="container py-5">
         
          <div className="row bottom-row">
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item footer-logo">
                  <Image src="/img/logo-white.png" alt="logo image" width={60} height={60} />
                  <p className="mb-3">
                    At Saj, we let the natural surroundings set the mood for your holiday. With scenic settings as the stage, the resorts pamper you in the midst of mountain highs, still waters, green retreats and sprawling landscapes.
                  </p>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4 footer-title">Quick Links</h4>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Home
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Careers
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Contact Us
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Blogs
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Investor Relation
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Spa & Wellness
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Restaurant
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className='me-2' /> Virtual Tour
                </Link>



              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="footer-item d-flex flex-column contact-footer">
                <h4 className="text-white mb-4 footer-title">Contact Us</h4>

                <Link href="#">Saj Malshej</Link>
                <Link href="tel:9664151190"> +91 96641 51190</Link>
                <Link href="mailto:sajmalshej@zuper.in">sajmalshej@zuper.in</Link>

                <br></br>

                <Link href="#">Saj Pench</Link>
                <Link href="tel:9664151190"> +91 96641 51190</Link>
                <Link href="mailto:sajpench@zuper.in">sajpench@zuper.in</Link>
                
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-xl-3 text-end end-footer-column">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4 footer-title">Contact Social</h4>
                <a href="#">
                  Saj by the Lake - Malshej
                </a>
                <a href="#">
                  Saj in the Forest - Pench
                </a>
                <a href="#">
                  Saj Resort Mahabaleshwar 
                </a>
                
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-md-12 text-center">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <p className="Copyright"> Copyright © 2025, Powered by Foxoso Hospitality Pvt. Ltd., All Rights Reserved.</p>
                </a>
              </span>
            </div>
            {/* <div className="col-md-6 text-center text-md-end text-body">
              <p className="text-white">Powered by <a href="https://cinuniverse.com/">
                CIN Universe</a>.</p>
            </div> */}
          </div>
        </div>
      </div>


    </>
  )
}
export default Footer;