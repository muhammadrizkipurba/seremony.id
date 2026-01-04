'use client'
import { SinglePackageType } from '@/types'
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
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
                {item.features.map((feature, sidx) => {
                  return (
                    <li key={`feature-${idx}-${sidx}`} className='flex items-start gap-2 leading-6'>
                      <IoCheckmark className='text-primary-yellow mt-1 font-bold' />
                      {feature}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PackageInfoDetails