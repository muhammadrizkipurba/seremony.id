import Link from "next/link";
import { Metadata } from "next";
import { HiArrowRight } from "react-icons/hi2";

import HomeHero from "./beranda/HomeHero";
import PromoSlider from "./beranda/PromoSlider";
import CategoryList from "./beranda/CategoryList";
import { EventCategoryType } from "./beranda/homePageServices";

import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import IconSlider from "@/components/ui/icon-slider";
import SeremonyAssistCard from "@/components/SeremonyAssistCard";

export const metadata: Metadata = {
  title: "Seremony",
  description: "Seremony make it happen",
  openGraph: {
    type: "website",
    url: process.env.WEB_URL,
    title: "Seremony",
    description: "Seremony make it happen",
    siteName: "Seremony",
    images: [{ url: "https://seremony.id/opengraph-image.png" }]
  }
};

const EventCategories: EventCategoryType[] = [
  {
    _id: "1",
    name: "Wedding",
    slug: "wedding",
    icon: "wedding.svg"
  },
  {
    _id: "2",
    name: "Sport",
    slug: "sport",
    icon: "sport.svg"
  },
  {
    _id: "3",
    name: "Birthday",
    slug: "birthday",
    icon: "birthday.svg"
  },
  {
    _id: "4",
    name: "Gathering",
    slug: "gathering",
    icon: "gathering.svg"
  },
  {
    _id: "5",
    name: "Music",
    slug: "music",
    icon: "music.svg"
  },
  {
    _id: "6",
    name: "Grand Opening",
    slug: "grand-opening",
    icon: "grand-opening.svg"
  },
];

const vendorListIconData = [
  { 
    _id: "1",
    name: "Vendor 1",
    logo: "vendor-1.png"
  },
  { 
    _id: "2",
    name: "Vendor 2",
    logo: "vendor-2.png"
  },
  { 
    _id: "3",
    name: "Vendor 3",
    logo: "vendor-3.png"
  },
  { 
    _id: "4",
    name: "Vendor 4",
    logo: "vendor-4.png"
  },
  { 
    _id: "5",
    name: "Vendor 5",
    logo: "vendor-5.png"
  },
  { 
    _id: "6",
    name: "Vendor 6",
    logo: "vendor-6.png"
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="relative">
        <HomeHero />
        <div className="w-[90%] absolute translate-x-[5.5%] left-0 -bottom-1/2 -translate-y-10 lg:-translate-y-1/3 mb-4 z-10">
          <PromoSlider />
        </div>
      </div>

      <div className="bg-white pb-24 pt-44 lg:pt-64 custom-container relative">
        <div className="">
          <CategoryList categories={EventCategories} />
        </div>

        <div className="flex items-center justify-center mt-16">
          <Link href="/katalog" className="button-primary-orange px-4 py-2 inline-flex gap-2 items-center text-sm font-semibold">
            Lihat Semua Kategori
            <HiArrowRight />
          </Link>
        </div>
      </div>

      <div className="max-w-[1550px] mx-auto">
        <Image
          src="/images/banner.png"
          alt="seremony"
          height={540}
          width={1440}
          className="h-auto w-full"
        />
      </div>

      <div className="bg-primary-orange pt-56">
        <div className="custom-container relative">
          <div className="py-10 lg:py-18 relative">
            <h2 className="text-[70px] lg:text-[150px] absolute -top-40 z-10 text-white tracking-tight leading-18 lg:leading-36 font-medium">Tentang <br />Seremony</h2>
            <Image
              src="/images/banner-1.png"
              alt=""
              height={480}
              width={792}
              className="h-auto w-auto lg:w-[592px] mx-auto lg:-translate-x-9 mb-12"
            />
          </div>
          <Image
            src="/images/about-overview-pattern.png"
            alt=""
            height={120}
            width={424}
            className="h-[88px] lg:h-[120px] w-auto absolute -left-[61%] lg:left-0 bottom-0"
          />
          <div className="hidden xl:block absolute right-0 bottom-0 lg:max-w-[232px] xl:-translate-x-[70%] lg:-translate-y-2/3">
            <p className="text-white mb-10">
              Lorem ipsum dolor sit amet consectetur. Tristique eu aliquam
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur. Tristique eu aliquam sem non sit. Nulla blandit proin sed posuere interdum sem in
            </p>
            <Link href="/tentang-kami" className="border border-white rounded-full text-white px-4 py-2 inline-flex items-center justify-center gap-2 transition-all ease-in-out duration-300 hover:font-bold hover:scale-105">
              Lihat selengkapnya
              <HiArrowRight />
            </Link>
          </div>
        </div>
        <div className="custom-container block xl:hidden mt-12 pb-20">
          <p className="text-white mb-10">
            Lorem ipsum dolor sit amet consectetur. Tristique eu aliquam
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Tristique eu aliquam sem non sit. Nulla blandit proin sed posuere interdum sem in
          </p>
          <Link href="/tentang-kami" className="border border-white rounded-full text-white px-4 py-2 inline-flex items-center justify-center gap-2 transition-all ease-in-out duration-300 hover:font-bold hover:scale-105">
            Lihat selengkapnya
            <HiArrowRight />
          </Link>
        </div>
      </div>

      <div className="bg-soft-gray">
        <div className="py-20 custom-container overflow-x-hidden">
          <h2 className="text-[40px] tracking-tight text-center font-semibold">Partner vendor terbaik kami</h2>
          <div className="flex items-center justify-around mt-14 mb-12">
            <IconSlider 
              icons={vendorListIconData}
              interval={3000}
            />
          </div>
        </div>
      </div>

      <SeremonyAssistCard />
    </MainLayout>
  );
}
