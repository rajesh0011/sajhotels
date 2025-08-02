import Image from 'next/image';
import Link from 'next/link';
import "../../styles/inner-hero.css"
import { ChevronRight } from 'lucide-react';
import ContactUsMain from '../../components/ContactUsMain';
import Header from '@/components/Header';


export const metadata = {
  title: 'Contact Us',
  description: ' contact us',
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactPage() {
  return (
    <>
    <Header></Header>
    <section className="hero-section-inner">
       <Image src="/img/banner-image.jpg" alt="About Us Hero Image" height={500} width={2000} className="w-100 inner-hero-image" />
        <div className="inner-hero-content">
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link><ChevronRight />
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
            </div>
    </section>
    <section className="about-us-page section-padding">
        <div className="container">
            <div className='heading-style-1'>
                <h1 className="mb-4 text-center global-heading">Saj Hotel Ltd Contact Us</h1>
            </div>
        </div>
        <ContactUsMain></ContactUsMain>
    </section>

    </>
  );
}