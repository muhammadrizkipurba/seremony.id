'use client'
import { SinglePackageType } from '@/types'
import { BiSolidMapPin } from 'react-icons/bi'
import { IoCheckmark } from 'react-icons/io5'

const PackageInfoDetails = ({
  packageData
}: {
  packageData: SinglePackageType | Record<string, never>
}) => {
  return (
    <div className='mt-12'>
      <h2 className='text-xl font-semibold'>Informasi Detail Paket :</h2>
      <div className='flex flex-col gap-4 mt-5'>
        {packageData.facilities.map((item, idx) => {
          return (
            <div key={`facility-${idx}`} className='mt-4'>
              <h3 className='text-lg font-semibold'>{item.vendor_category} :</h3>
              {item.vendor_category.toLowerCase() === "venue" ? 
                <ul>
                  <li key={`vendor-venue-${idx}`} className=''>
                    <div className='flex gap-2 leading-6 items-center'>
                      <BiSolidMapPin className='text-primary-orange mt-1 font-bold text-lg' />
                      <span className='mt-1'>{item.vendor_options[0]}</span>
                    </div>
                    <p className='mt-1'>{item.vendor_info.address}</p>
                    {item.vendor_info.google_map_location && 
                      <iframe src={item.vendor_info.google_map_location} width="600" height="350" style={{border: 0}} className='w-full rounded-xl mt-4' allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    }
                  </li>
                </ul>
                : <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
                  {item.features.map((feature, sidx) => {
                    return (
                      <li key={`feature-${idx}-${sidx}`} className='flex items-start gap-2 leading-6'>
                        <IoCheckmark className='text-primary-yellow mt-1 font-bold' />
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PackageInfoDetails