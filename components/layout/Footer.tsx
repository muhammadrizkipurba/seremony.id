import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { ContactInfo, NavigationMenus, SocialMediaAccounts } from '@/constant';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='custom-container'>
        <div className='py-6 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <Image
            src="/logo/logo-text-white-color.svg"
            alt="seremony"
            height={40}
            width={220}
          />
          <ul className='flex items-center lg:gap-10 justify-between lg:justify-end'>
            {NavigationMenus.map((item, idx) => {
              if(idx===0) return null;
              return (
                <li key={`nav-menu-${idx}`}>
                  <Link href={item.href} className="nav-link text-white">
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <hr className='border-gray-50/25' />
        <div className='py-6 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5'>
          <div className='col-span-2 h-full order-2 lg:order-1'>
            <div className='flex items-end justify-start h-full'>
              <div className='flex h-full items-end gap-0'>
                {SocialMediaAccounts.map((item) => {
                  return (
                    <a 
                      key={item.name}
                      href={item.link}
                      className='text-white'
                    >
                      {item.name.toLowerCase() === 'instagram' ? 
                        <BiLogoInstagramAlt className="h-7 w-auto text-center hover:text-primary-orange transition-all ease-in-out duration-300" />
                      : item.name.toLowerCase() === 'tiktok' ? 
                        <IoLogoTiktok className="h-6 w-auto text-center hover:text-primary-orange transition-all ease-in-out duration-300 mb-0.5 ms-5 me-6" />
                      : item.name.toLowerCase() === 'youtube' ? 
                        <IoLogoYoutube className="h-7 w-auto text-center hover:text-primary-orange transition-all ease-in-out duration-300" />
                      : null}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='lg:-ml-12 order-1'>
            <ul className='flex flex-col gap-6'>
              <li className='flex flex-col gap-0'>
                <label className='uppercase text-primary-orange font-sm font-semibold tracking-widest'>{ContactInfo.email.label}</label>
                <a target='__blank' rel="noopener noreferrer" className='text-white decoration-0' href={`mailto:${ContactInfo.email.value}`}>{ContactInfo.email.value}</a>
              </li>
              <li className='flex flex-col gap-0'>
                <label className='uppercase text-primary-orange font-sm font-semibold tracking-widest'>{ContactInfo.whatsapp.label}</label>
                <a target='__blank' rel="noopener noreferrer" className='text-white decoration-0' href={`https://wa.me/${ContactInfo.whatsapp.value}`}>{ContactInfo.whatsapp.value}</a>
              </li>
              <li className='flex flex-col gap-0'>
                <label className='uppercase text-primary-orange font-sm font-semibold tracking-widest'>{ContactInfo.address.label}</label>
                <p className='text-white decoration-0 lg:pe-16'>{ContactInfo.address.value}</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className='border-gray-50/25' />
        <div className='py-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <small className='text-white text-sm'>Hak Cipta &copy; {new Date().getFullYear()} Seremony. Hak cipta dilindungi undang-undang.</small>
          <div className='flex items-center justify-start lg:justify-end text-white gap-6 lg:gap-10'>
            <Link href="/kebijakan-privasi" className='text-sm'>
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-dan-ketentuan" className='text-sm'>
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer