'use client'

import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"

const BookingButton = ({
  packageId
}: {
  packageId: string;
}) => {
  const href =`${process.env.NEXT_PUBLIC_WEB_URL}/booking?package=${packageId}`
  return (
    <div className="mt-3">
      <Link href={href} className="inline-flex uppercase gap-2 items-center justify-center rounded-full text-white text-[14px] font-semibold hover:font-bold bg-primary-orange w-full py-3 transition-all ease-in-out duration-300 cursor-pointer">
        Booking Sekarang
        <HiArrowRight />
      </Link>
    </div>
  )
}

export default BookingButton