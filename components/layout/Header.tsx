"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { HiArrowLongRight } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { NavigationMenus } from '@/constant';
import SidebarMenu from './SidebarMenu';
import { getCookie } from 'cookies-next/client';

const Header = () => {
  const pathname = usePathname();
  const authCookie = getCookie("auth");

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (authCookie) {
      const { isAuthenticated } = JSON.parse(authCookie);
      setIsLoggedIn(isAuthenticated);
    };
  }, [authCookie]);

  useEffect(() => {
    document.body.style.overflowY = isOpenSidebar ? 'hidden' : 'visible';
  }, [isOpenSidebar]);

  useEffect(() => {
    setIsOpenSidebar(false);
  }, [pathname]);

  return (
    <header className='shadow-xs shadow-neutral-300 xl:shadow-neutral-300 bg-primary-cultures sticky top-0 z-50 lg:static'>
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
            {isLoggedIn ?
              <li className='space-x-3 flex items-center'>
                <Link href="/profile" className='button-primary-orange ps-3 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold'>
                  <div className="flex items-center justify-center gap-2">
                    <FaUserCircle />
                    Profil Saya
                  </div>
                </Link>
              </li>
              : <li className='space-x-3 flex items-center'>
                <Link href="/login" className='button-outline-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
                  Login
                  <HiArrowLongRight />
                </Link>
                <Link href="/daftar-akun" className='button-primary-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold' >
                  Daftar
                  <HiArrowLongRight />
                </Link>
              </li>
            }
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