import MainLayout from '@/components/layout/MainLayout'
import { CoreValues, OurMissions, WhyUsContents } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

const AboutUsPage = () => {
  return (
    <MainLayout>
      <main>
        <div className='bg-primary-cultures'>
          <div className='min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 custom-container'>
            <div className='lg:max-w-[70%] flex items-start flex-col justify-center gap-5'>
              <h1 className='page-title lg:text-5xl! text-left! ml-0! pl-0!'>Merancang Momen, Mewujudkan Impian</h1>
              <p>
                Kami adalah perusahaan event planner yang berkomitmen menghadirkan acara terbaik untuk setiap momen penting Anda.
              </p>
              <Link href="/kontak" className='button-primary-orange px-4 py-2 inline-flex gap-2 items-center text-sm font-semibold'>
                Hubungi Kami
                <HiArrowRight />
              </Link>
            </div>
            <div className='bg-[url("/images/about-banner.png")] bg-cover h-full w-full' />
          </div>
          <div className='bg-primary-cultures hidden lg:block'>
            <div className='h-[120px] grid grid-cols-1 lg:grid-cols-2 relative'>
              <div className='bg-secondary-red h-full w-full before:absolute before:inset-0 before:bg-[url("/patterns/small-pattern-horizontal.png")] before:h-full before:w-full before:left-0' />
            </div>
          </div>
        </div>

        <div className='bg-white py-20 relative custom-container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 bg-soft-gray p-5 md:p-8 lg:p-20'>
            <div className='lg:max-w-[400px]'>
              <h2 className='mb-3 text-3xl font-bold'>Visi</h2>
              <p>Menjadi event planner terpercaya yang menghadirkan pengalaman tak terlupakan dengan sentuhan profesional dan kreatif.</p>
            </div>
            <div>
              <h2 className='mb-3 text-3xl font-bold'>Misi</h2>
              <ul className='lg:max-w-[500px]'>
                {OurMissions.map((text, idx) => {
                  return (
                    <li key={`mission-${idx}`} className='flex items-start gap-3'>
                      <Image
                        src={"/logo/logo-color.svg"}
                        alt=""
                        height={14}
                        width={14}
                        className='mt-1'
                      />
                      {text}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='bg-secondary-green h-16 w-5 absolute left-0' />
        </div>

        <div className='pb-20 custom-container'>
          <h2 className='text-3xl font-bold text-center'>Our core values</h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {CoreValues.map((item, idx) => {
              return (
                <div key={`core-value-${idx}`} className='border border-gray-200 rounded-2xl p-4'>
                  <Image
                    alt=""
                    src={`/icons/${item.icon_name}`}
                    height={56}
                    width={56}
                  />
                  <h3 className='font-semibold my-3'>{item.title}</h3>
                  <p className='text-sm'>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className='custom-container'>
          <Image
            alt=""
            src="/images/about-banner-1.png"
            height={540}
            width={1440}
            className='w-full h-[540px] object-cover'
          />
        </div>

        <div className='py-20 custom-container'>
          <h2 className='text-3xl font-bold text-center'>Mengapa Seremony adalah pilihan yang tepat</h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {WhyUsContents.map((item, idx) => {
              return (
                <div key={`core-value-${idx}`} className='border border-gray-200 rounded-2xl p-4'>
                  <Image
                    alt=""
                    src={`/icons/${item.icon_name}`}
                    height={56}
                    width={56}
                    className='h-14 w-auto'
                  />
                  <h3 className='font-semibold my-3'>{item.title}</h3>
                  <p className='text-sm'>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default AboutUsPage