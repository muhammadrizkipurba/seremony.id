"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaListCheck, FaUserGear } from "react-icons/fa6";
import { PiBookOpenText } from "react-icons/pi";
import { LuCircleUser } from "react-icons/lu";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { deleteCookie, getCookie } from "cookies-next/client";

export const ProfileSidebarMenus = [
  {
    slug: "",
    label: "Profile",
  },
  {
    slug: "meeting-tracker",
    label: "Meeting Tracker",
  },
  {
    slug: "production-tracker",
    label: "Production Tracker",
  },
]

const ProfileSidebarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const authCookie = getCookie("auth");
  let userData = null;

  if(authCookie) {
    const { user } = JSON.parse(authCookie);
    userData = user;
  };

  const onLogout = () => {
    deleteCookie("auth");
    router.push("/login");
  };

  return (
    <div className="border rounded-xl overflow-hidden lg:sticky lg:top-5">
      <div className="flex items-center gap-4 bg-soft-gray p-4">
        <LuCircleUser className="text-4xl"/>
        <div className="flex flex-col gap-0">
          <span className="leading-5 text-sm">Welcome back</span>
          <span className="leading-5 font-bold uppercase">{userData?.name}</span>
        </div>
      </div>
      
      <div className="">
        <ul className="flex flex-col">
          {ProfileSidebarMenus.map((item, idx) => {
            let isActive = false;
            
            if(item.slug === "" && pathname.split("/")[pathname.split("/").length-1] === "profile") {
              isActive = true;
            } else {
              isActive = pathname.split("/")[pathname.split("/").length-1] === item.slug;
            };

            return (
              <li key={`profile-sidebar-menu-${idx}`} className={`cursor-pointer p-4 border-t ${isActive ? "bg-primary-orange text-white font-bold": "hover:bg-primary-orange/10"} transition-all ease-in-out duration-300`}>
                <Link href={`/profile/${item.slug}`} className="cursor-pointer flex items-center gap-4">
                  { item.slug === "" ? 
                    <FaUserGear className="h-5 w-6"/>
                  : item.slug === "riwayat-pemesanan" ? 
                    <PiBookOpenText className="h-5 w-5" />
                  : item.slug === "meeting-tracker" ? 
                    <BsCalendar2WeekFill className="h-5 w-5" />
                  : item.slug === "production-tracker" ? 
                    <FaListCheck className="h-5 w-5" />
                  : null}
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li className="cursor-pointer border-t">
            <button 
              onClick={onLogout}
              className="bg-transparent text-red-600 flex items-center gap-4 w-full p-4 font-semibold hover:text-white hover:bg-red-600 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <RiLogoutBoxLine className="h-5 w-5" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileSidebarMenu