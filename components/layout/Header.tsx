"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { HiArrowLongRight } from "react-icons/hi2";
import { NavigationMenus } from '@/constant';
import SidebarMenu from './SidebarMenu';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='shadow-sm shadow-neutral-500 xl:shadow-neutral-300 bg-primary-cultures'>
      <div className='custom-container py-6 flex items-center justify-between'>
        <Link href="/">
          <Image 
            src="/logo/logo-text-black-color.svg"
            alt="seremony"
            height={40}
            width={220}
            className='h-8 md:h-10 w-auto'
          />
        </Link>

        <nav className='hidden lg:block'>
          <ul className='flex items-center gap-10'>
            {NavigationMenus.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <li key={`nav-menu-${idx}`}>
                  <Link href={item.href} className={`nav-link ${isActive ? "text-primary-orange underline underline-offset-5 font-semibold flex items-center gap-2" : ""}`}>
                    {isActive && 
                      <Image 
                        src={"/logo/logo-color.svg"}
                        alt=""
                        height={14}
                        width={14}
                      />
                    }
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className='space-x-3 flex items-center'>
              <Link href="/login" className='button-outline-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
                Login
                <HiArrowLongRight />
              </Link>
              <Link href="/daftar-akun" className='button-primary-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
                Daftar
                <HiArrowLongRight />
              </Link>
            </li>
          </ul>
        </nav>

        <div className='block lg:hidden'>
          <SidebarMenu />
        </div>
      </div>
    </header>
  )
}

export default Header