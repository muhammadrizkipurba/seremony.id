import MainLayout from '@/components/layout/MainLayout'
import { ContactInfo } from '@/constant'
import React from 'react'
import ContactForm from './ContactForm'
import Faq from './Faq'

const ContactUsPage = () => {
  return (
    <MainLayout>
      <main>
        <div className='relative overflow-x-hidden'>
          <div className='w-[120px] h-[120px] bg-secondary-green absolute -left-8 lg:left-0 -bottom-8 lg:bottom-0 scale-50 lg:scale-100 z-10' />
          <div className='w-[220px] h-[440px] bg-secondary-red absolute -right-50 md:-right-32 lg:right-0 top-0 bg-[url("/patterns/small-pattern-vertical.png")] z-10' />
          <div className='bg-primary-cultures h-full min-h-[80vh] pt-12 pb-20'>
            <div className='custom-container relative z-30'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='lg:col-span-1'>
                  <div className='lg:max-w-[500px]'>
                    <h1 className='text-[30px] lg:text-5xl font-semibold tracking-tight'>Hubungi Seremony</h1>
                    <p className='mt-5'>Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang layanan kami, silakan hubungi kami.</p>
                    <ul className='flex flex-col gap-6 mt-5'>
                      <li className='flex flex-col gap-0'>
                        <label className='uppercase text-primary-orange font-sm font-semibold tracking-widest'>{ContactInfo.email.label}</label>
                        <a target='__blank' rel="noopener noreferrer" className='decoration-0' href={`mailto:${ContactInfo.email.value}`}>{ContactInfo.email.value}</a>
                      </li>
                      <li className='flex flex-col gap-0'>
                        <label className='uppercase text-primary-orange font-sm font-semibold tracking-widest'>{ContactInfo.whatsapp.label}</label>
                        <a target='__blank' rel="noopener noreferrer" className='decoration-0' href={`https://wa.me/${ContactInfo.whatsapp.value}`}>{ContactInfo.whatsapp.value}</a>
                      </li>
                      <li className='flex flex-col gap-0'>
                        <label className='uppercase text-primary-orange font-sm font-semibold tracking-widest'>{ContactInfo.address.label}</label>
                        <p className='decoration-0 lg:pe-16'>{ContactInfo.address.value}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white py-20'>
          <div className='max-w-[800px] mx-auto px-5'>
            <Faq />
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default ContactUsPage