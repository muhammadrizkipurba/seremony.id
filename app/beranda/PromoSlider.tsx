"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const bannerImages = [
  "banner-promo-1.jpg",
  "banner-promo-2.jpg",
  "banner-promo-3.jpg",
];

function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDone, setSlideDone] = useState<boolean>(true);
  const [timeID, setTimeID] = useState<number | null>(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      // const id = setTimeout(() => {
      //   slideNext();
      //   setSlideDone(true);
      // }, 5000);
      setTimeID(1);
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= bannerImages.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return bannerImages.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID && timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div className="relative">
      <div
        className="container__slider"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
      >
        {bannerImages.map((item, index) => {
          return (
            <div
              className={"slider__item slider__item-active-" + (activeIndex + 1)}
              key={index}
            >
              <Image
                src={`/images/${item}`}
                alt="promo banner"
                width={1200}
                height={400}
                className="w-full h-[400px] object-contain md:object-cover md:object-top object-center mt-3"
              />
            </div>
          );
        })}
      </div>
      <div className="container__slider__links">
        {bannerImages.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
      <button
        className="slider__btn-next bg-white"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <HiArrowRight />
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <HiArrowLeft />
      </button>
    </div>
  );
}

export default CustomCarousel;
