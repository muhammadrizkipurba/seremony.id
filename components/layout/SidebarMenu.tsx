"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { Drawer } from '../ui/drawer';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
import { NavigationMenus } from '@/constant';
import { usePathname } from 'next/navigation';

const HamburgerButton = ({
  isOpen,
  handleClick
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  console.log(isOpen)
  return (
    <button className="relative group" onClick={handleClick}>
      <div className="relative flex overflow-hidden items-center justify-center rounded-xl w-[42px] h-[42px] transform transition-all ring-0 duration-200 bg-primary-orange">
        <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
          <div className={`bg-white h-[3px] w-7 transform transition-all duration-300 origin-left ${isOpen && "translate-x-10"}`}></div>
          <div className={`bg-white h-[3px] w-7 transform transition-all duration-300 ${isOpen && "translate-x-10"} delay-75`}></div>
          <div className={`bg-white h-[3px] w-7 transform transition-all duration-300 origin-left ${isOpen && "translate-x-10"} delay-150`}></div>

          <div className={`absolute items-center justify-between transform transition-all duration-500 top-1/2 -translate-x-10 ${isOpen && "translate-x-0 w-12"} flex w-0`}>
            <div className={`absolute bg-white h-[2.5px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isOpen && "rotate-45 rounded"}`}></div>
            <div className={`absolute bg-white h-[2.5px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isOpen && "rotate-135 rounded"}`}></div>
          </div>
        </div>
      </div>
    </button>
  )
}

const SidebarMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to ensure the class is removed when the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleDismiss = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <HamburgerButton isOpen={open} handleClick={handleClick} />
      <Drawer
        isOpen={open}
        className="w-full bg-primary-cultures z-50"
        onDismiss={handleDismiss}
      >
        <nav className='bg-primary-cultures'>
          <div className='shadow-xs px-3'>
            <div className={`flex items-center justify-between gap-8 py-5`}>
              <Image
                src="/logo.svg"
                alt='tipsy padel'
                height={80}
                width={80}
                className='h-8 w-auto'
              />
              <div className={`${open ? "block" : "hidden"} transition-all ease-in-out duration-300 delay-500`}>
                <HamburgerButton isOpen={open} handleClick={handleClick} />
              </div>
            </div>
          </div>
          <div className='flex flex-col h-[90vh] justify-between py-10'>
            <ul className='px-3'>
              {NavigationMenus.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <li key={`nav-menu-${idx}`} className='border-b border-b-black py-3'>
                    <Link href={item.href} className={`nav-link text-[32px] ${isActive && "text-primary-orange font-semibold flex items-center gap-2"}`}>
                      {isActive && 
                        <Image 
                          src={"/logo/logo-color.svg"}
                          alt=""
                          height={20}
                          width={20}
                        />
                      }
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className='space-x-3 flex items-center px-3'>
              <Link href="/login" className='flex-1 justify-center button-outline-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
                Login
                <HiArrowLongRight />
              </Link>
              <Link href="/daftar-akun" className='flex-1 justify-center button-primary-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
                Daftar
                <HiArrowLongRight />
              </Link>
            </div>
          </div>
        </nav>
      </Drawer>
    </div>
  )
}

export default SidebarMenu