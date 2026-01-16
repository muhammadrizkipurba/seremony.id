"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const bannerImages = [
  {
    image: "ten-couples.png",
    href: '/katalog',
    alt: '10 founding couples to be among the first with seremony'
  },
  {
    image: "seremony-sweet-bar.png",
    href: '/sweet-bar',
    alt: 'Seremony sweet bar'
  },
  {
    image: "more-than-event-planner.png",
    href: '/tentang-kami',
    alt: 'Tentang Seremony'
  },
  {
    image: "more-about-us.png",
    href: '/kontak',
    alt: 'Hubungi Seremony'
  }
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
              <Link href={item.href}>
                <Image
                  src={`/promo-banners/${item.image}`}
                  alt={item.href}
                  width={1200}
                  height={400}
                  className="w-full h-[400px] object-contain md:object-top object-center mt-3"
                />
              </Link>
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
