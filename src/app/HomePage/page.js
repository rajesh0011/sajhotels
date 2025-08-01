"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TestimonialSection from "@/sliders/TestimonialSection";
import { useState } from "react";
import ExploreSaj from "@/sliders/ExploreSaj";
import ExperiencesLove from "@/sliders/ExperiencesLove";
import PackagesOffers from "@/components/PackagesOffers";
import StorySlider from "@/sliders/StorySlider";
import HomeGallerySlider from "@/sliders/HomeGallerySlider";
import NewsletterForm from "@/components/NewsletterForm";
import SajBrandSlider from "@/sliders/SajBrandSlider";
// import BookNowForm from "../booking-engine-widget/BookNowForm";

export default function Page() {
  return (
    <>
      <section className="hero-banner position-relative">
        <Image
          src="/img/banner-image.jpg"
          alt="Hero Banner"
          height={1000} width={2000}
          className="hero-banner-image w-100"
        />

        {/* <div className="banner-overlay position-absolute bg-white bottom-10 start-50 translate-middle text-center text-white p-3 bg-dark bg-opacity-80 rounded-5">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
           
            </div>
        </div> */}
      </section>


      <section className="hotels-brand-sect">
        <Image
          src="/img/Birds.png" alt="birds image"
          width={300}
          height={100}
          className="birds-left-image"
        />
        <Image
          src="/img/Birds.png" alt="birds image"
          width={300}
          height={100}
          className="birds-right-image"
        />
        <div className="container">
          <div className="global-heading-sec text-center">
            <div className="row justify-content-center mb-4">
              <div className="col-md-9 md-offset-1">
                <SajBrandSlider></SajBrandSlider>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/img/mountain.png"
          alt="Golf Trip Banner"
          width={1920}
          height={200}
          className="w-100"
        />
      </section>


      <section className="your-break sec-padding" id="golf-holiday">
        <div className="container">
          <div className="global-heading-sec text-center">
            <div className="row justify-content-center mb-4">
              <div className="col-md-9 md-offset-1">
                <h2 className="global-heading text-uppercase">Explore Saj Destinations by Nature</h2>
                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="know-more-btn-center mt-4">
                  <Link href="#" className="box-btn know-more p-2  mt-2 color-white text-uppercase">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="winter-sec">
            <div className="row">
              <ExploreSaj></ExploreSaj>

            </div>
          </div>
        </div>
      </section>

      <section className="your-break sec-padding" data-aos="fade-up" id="golf-info">
        <div className="container-fluid">
          <div className="global-heading-sec text-center">
            <div className="row justify-content-center mb-4">
              <div className="col-md-9 md-offset-1">
                <h2 className="global-heading text-uppercase">Experiences you&rsquo;ll love</h2>

                <p className="mb-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <div className="know-more-btn-center mt-4">
                  <Link href="#" className="box-btn know-more p-2 mt-2 color-white text-uppercase">
                    Know More
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="winter-sec experience-love-sec">
          <div className="container">
            <div className="experience-slider">
              <ExperiencesLove></ExperiencesLove>
            </div>
          </div>
        </div>
      </section>


      <section className="your-break sec-padding" data-aos="fade-up" id="golf-info">
        <div className="container-fluid">
          <div className="global-heading-sec text-center">
            <div className="row justify-content-center mb-4">
              <div className="col-md-9 md-offset-1">
                <h2 className="global-heading text-uppercase">Offers & Packages</h2>

                <p className="mb-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <div className="know-more-btn-center mt-4">
                  <Link href="#" className="box-btn know-more p-2 mt-2 color-white text-uppercase">
                    Know More
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <div className="package-offer-timeline">
            <PackagesOffers></PackagesOffers>
          </div>

        </div>

      </section>

      <section className="your-break sec-padding" data-aos="fade-up" id="golf-info">
        <div className="container-fluid">
          <div className="global-heading-sec text-center">
            <div className="row justify-content-center mb-4">
              <div className="col-md-9 md-offset-1">
                <h2 className="global-heading text-uppercase">Saj Story</h2>
                <p className="mb-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="know-more-btn-center mt-4">
                  <Link href="#" className="box-btn know-more p-2  mt-2 color-white text-uppercase">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="story-main-slider">
            <StorySlider></StorySlider>
          </div>
        </div>
      </section>


      <TestimonialSection />

      <section className="galelry-sectionn your-break sec-padding">
        <div className="container-fluid">
          <div className="global-heading-sec text-center">
            <div className="row justify-content-center mb-4">
              <div className="col-md-9 md-offset-1">
                <h2 className="global-heading text-uppercase">Gallery</h2>
              </div>
            </div>
          </div>
          <HomeGallerySlider></HomeGallerySlider>
        </div>
      </section>

      <section className="your-break sec-padding newsletter-community">
        <div className="container-fluid">
          <div className="global-heading-sec text-center">
            <div className="row justify-content-center mb-4">
              <div className="col-md-9 md-offset-1">
                <h2 className="global-heading text-uppercase">Newsletter & Community</h2>
                <p className="mb-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <NewsletterForm></NewsletterForm>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
