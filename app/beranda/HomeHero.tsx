import React from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from "react-icons/hi2";

const HomeHero = () => {
  return (
    <div className='h-[460px] md:h-[560px] lg:h-[650px] custom-container py-18 relative overflow-hidden bg-primary-cultures'>
      <div className='w-[120px] h-[310px] bg-secondary-green absolute -left-24 md:-left-8 lg:left-0 top-0 z-10' />
      <div className='w-[220px] h-[310px] bg-secondary-red absolute -right-50 md:-right-32 lg:right-0 bottom-0 bg-[url("/patterns/small-pattern-vertical.png")] z-10' />
      <h1 className='text-4xl lg:text-6xl font-semibold tracking-tight text-center md:max-w-xl lg:max-w-[700px] mx-auto'>
        Konsep, solusi event dan vendor dalam satu platform
      </h1>
      <div className='flex items-center justify-center gap-5 mt-10 relative z-30'>
        <Link href="/katalog" className='button-outline-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
          Lihat Katalog
          <HiArrowLongRight />
        </Link>
        <Link href="/kontak" className='button-primary-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
          Hubungi kami
          <HiArrowLongRight />
        </Link>
      </div>
    </div>
  )
}

export default HomeHero