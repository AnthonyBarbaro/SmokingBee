// src/components/AboutSlideshow.tsx
"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AboutSlideshow.module.css";
/**
 * A simple slideshow (carousel) for images in `public/images/about/`.
 * Adjust the `images` array to match your actual file names.
 */

export default function AboutSlideshow() {
  const images = [
    "/images/about/1.JPG",
    "/images/about/2.JPG",
    "/images/about/3.JPG",
    "/images/about/4.JPG",
    "/images/about/5.JPG",
    "/images/about/6.JPG",
    "/images/about/7.JPG",
    "/images/about/8.JPG",
    "/images/about/9.JPG",
    "/images/about/10.JPG",
    "/images/about/11.JPG",
    "/images/about/14.JPG",
    "/images/about/15.JPG",
    "/images/about/16.JPG",
    "/images/about/18.JPG",
    "/images/about/19.JPG",
    "/images/about/20.JPG",
    "/images/about/21.JPG",
    "/images/about/22.JPG",
    "/images/about/23.JPG",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: true, // Default enabled for desktop
    swipe: true,  // Enable swipe gestures
    touchMove: true, // Allow touch movement
    responsive: [
      {
        breakpoint: 768, // When screen width is <= 768px (tablets & mobile)
        settings: {
          arrows: false, // Disable arrows on mobile
          swipe: true, // Allow swiping
          touchMove: true, // Ensure touch gestures work
        },
      },
    ],
  };

  return (
    <div className={`${styles.slickOverride} w-full max-w-5xl mx-auto my-8`}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative h-[500px] md:h-[600px]">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
