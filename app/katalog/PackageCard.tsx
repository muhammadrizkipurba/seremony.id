'use client'

import { rupiahFormat } from "@/lib/utils";
import { SinglePackageType } from "@/types"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";

type Props = {
  packageData: SinglePackageType;
  bannerImage: string;
};

const PackageCard = ({
  packageData,
  bannerImage
}: Props) => {
  const pathname = usePathname();

  return (
    <div className="transition-all ease-in-out duration-300 rounded-lg border-2 overflow-hidden p-3 hover:bg-primary-yellow/10 cursor-pointer hover:border-primary-orange">
      <div className="relative">
        <Image
          alt={packageData.package_name}
          src={bannerImage}
          height={180}
          width={256}
          className="w-full h-[180px] rounded-md object-cover"
          // objectFit="cover"
          unoptimized={process.env.NODE_ENV === 'development'}
        />
        <div className="bg-primary-yellow px-2 rounded-lg mb-1 absolute top-2 right-2">
          <small className="text-sm font-bold block py-1">{packageData.package_theme.name}</small>
        </div>
        {packageData.recommended > 0 && 
          <div className="bg-primary-yellow px-2 rounded-lg mb-1 absolute bottom-2 left-2 flex items-center gap-2">
            <IoStar className="text-sm" />
            <small className="text-sm block py-1 mt-0.5">Penawaran terbaik</small>
          </div>
        }
      </div>
      <div className="mt-3">
        <h3 className="text-[16px] font-semibold capitalize tracking-tight cursor-default min-h-13">
          {packageData.package_name}
        </h3>
        <div className="flex items-center my-2 gap-2">
          <div className="border border-primary-yellow px-2 rounded-full mb-1">
            <small className="text-xs block py-1">{packageData.quantity_pax} pax</small>
          </div>
          { packageData.include_catering && packageData.include_venue && 
            <div className="border border-primary-yellow px-2 rounded-full mb-1">
              <small className="text-xs block py-1">All in</small>
            </div>
          }
          { !packageData.include_catering && packageData.include_venue && 
            <div className="border border-primary-yellow px-2 rounded-full mb-1">
              <small className="text-xs block py-1">Venue</small>
            </div>
          }
          { !packageData.include_catering && packageData.include_venue && 
            <div className="border border-primary-yellow px-2 rounded-full mb-1">
              <small className="text-xs block py-1">Tanpa Catering</small>
            </div>
          }
          { !packageData.include_catering && !packageData.include_venue && null }
        </div>
        <p className="cursor-default text-[20px] font-bold">IDR {rupiahFormat(packageData.sale_price)}</p>
      </div>
      <div className="mt-3">
        <Link href={`${pathname}/${packageData?.metadata?.slug}`} className="inline-flex gap-2 items-center justify-center rounded-md text-white text-[14px] hover:font-semibold hover:bg-primary-orange bg-primary-orange/90 w-full p-2 transition-all ease-in-out duration-300 cursor-pointer">
          Lihat Detail 
          <HiArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default PackageCard