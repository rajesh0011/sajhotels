import Image from 'next/image';
import Link from 'next/link';
import "../../styles/inner-hero.css";
import "../../styles/innerstyle.css";

import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';


export const metadata = {
  title: 'About Us',
  description: 'About Us',
  alternates: {
    canonical: '/about-us',
  },
};

export default function AboutPage() {
  return (
    <>
    <Header></Header>
    <section className="hero-section-inner">

        <Image src="/img/banner-image.jpg" alt="About Us Hero Image" height={500} width={1500} className="w-100 inner-hero-image" />
        <div className="inner-hero-content">
            <div className="text-center">
                <h2 className="inner-banner-heading">About Us</h2>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link><ChevronRight />
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
    <section className="about-us-page section-padding">
        <div className="container">
            <div className='heading-style-1'>
                <h1 className="mb-4 text-center global-heading">About Saj Hotels Ltd.</h1>
            </div>
            

        <div className="row align-items-center mb-5">
            
            <div className="col-md-6 order-lg-2">
                <h4 className="h5 mb-3">Luxurious Resort in Malshej Ghat Await Your Arrival</h4>
                <p className='text-justify'>
                  Experience tranquility and pure bliss at our resort, where you can immerse yourself in the beauty of the lakeside. The place is a haven for bonding with friends and family in the embrace of nature. Malshej Ghat lets you discover a diverse range of stunning birds, hills with calming waterfalls, and lush oases, all waiting to be explored by you.
Savor the delicious traditional tastes, embark on a historic expedition to the Shivneri Fort or Ajoba Fort, and stay in our elegantly styled and cozy rooms. They are designed to cater to every mood, ensuring a peaceful and rejuvenating stay.
                </p>
               
            </div>
            <div className="col-md-6 ">
            <Image height={500} width={800}
                src="/img/about-img.jpg"
                alt="Luxury Stay"
                className="img-fluid rounded shadow-sm"
            />
            </div>
        </div>

        <div className="row align-items-center">
            
            <div className="col-md-6">
                <div className='heading-style-2'>
                    <h2 className="global-heading">Our Story</h2>
                </div>
                
                <p className='text-justify mt-2'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
            </div>
            <div className="col-md-6">
            <Image height={500} width={800}
                src="/img/Saj-by-the-lake-Photos-111136-scaled-1.jpg"
                alt="Luxury Stay"
                className="img-fluid rounded shadow-sm"
            />
            </div>
        </div>
        </div>
    </section>

    </>
  );
}