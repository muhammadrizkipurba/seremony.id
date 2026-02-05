'use client';
import moment from "moment";
import { SingleSeremonyEvent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiArrowRight } from 'react-icons/hi2';
import { IoCalendarOutline } from "react-icons/io5";
import { LuMapPinned } from "react-icons/lu";

const EventCard = ({
  eventData
}: {
  eventData: SingleSeremonyEvent
}) => {
  const { NEXT_PUBLIC_API_URL } = process.env;
  const pathname = usePathname();

  const eventDateSameMonth = moment(eventData.event_start.date, "DD-MM-YYYY").format("MM YYYY") === moment(eventData.event_end.date, "DD-MM-YYYY").format("MM YYYY");
  const eventDateRange = eventDateSameMonth ? `${moment(eventData.event_start.date, "DD-MM-YYYY").format("DD")} - ${moment(eventData.event_end.date, "DD-MM-YYYY").format("DD MMM YYYY")}` : `${moment(eventData.event_start.date, "DD-MM-YYYY").format("DD MMM")} - ${moment(eventData.event_end.date, "DD-MM-YYYY").format("DD MMM YYYY")}`;

  return (
    <div>
      <div className='transition-all ease-in-out duration-300 rounded-lg border-2 overflow-hidden p-3 hover:bg-primary-yellow/10 cursor-pointer hover:border-primary-orange'>
        <Image
          unoptimized={process.env.NODE_ENV === 'development'}
          src={`${NEXT_PUBLIC_API_URL}/images/events/${eventData.banner_image}`}
          alt={eventData.name}
          height={150}
          width={450}
          className='h-auto w-full object-cover object-center'
        />
        <div className='mt-4'>
          <h2 className="text-[16px] font-semibold capitalize tracking-tight cursor-default">
            {eventData.name}
          </h2>
        </div>
        <div className='mt-3'>
          <div className='flex items-center gap-3'>
            <IoCalendarOutline size={18} />
            <p className="font-normal tracking-tight">{eventDateRange}</p>
          </div>
          <div className='flex items-center gap-3 mt-1'>
            <LuMapPinned size={18} />
            <p className="font-normal tracking-tight">{eventData.event_location.location_name}</p>
          </div>
        </div>
        <div className="mt-4">
          <Link href={`${pathname}/${eventData.slug}`} className="inline-flex gap-2 items-center justify-center rounded-md text-white text-[14px] hover:font-semibold hover:bg-primary-orange bg-primary-orange/90 w-full p-2 transition-all ease-in-out duration-300 cursor-pointer">
            Lihat selengkapnya
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
};

export default EventCard