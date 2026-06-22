"use client"
import { DecitionLockDataType } from '@/types'
import { IoCheckmarkCircle, IoReload } from 'react-icons/io5'

const VendorDecisionLock = ({
  decisionLockData
}: {
  decisionLockData: DecitionLockDataType[]
}) => {
  return (
    <div>
      {/* DESKTOP PC SCREEN */}
      <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-base hidden lg:block border-t">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary-foreground border-b border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
                Nama Vendor
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
                Catatan
              </th>
            </tr>
          </thead>
          <tbody>
            {decisionLockData.map((item, idx) => {
              const notesArr = item.notes.split(",").join("<br/>");
              return (
                <tr key={`dlv-${idx}`} className="odd:bg-neutral-primary even:bg-gray-50 border-b border-default last:border-b-0">
                  <th scope="row" className="px-6 py-4 font-semibold text-heading whitespace-nowrap">
                    {item.vendor_category_label}
                  </th>
                  <td className="px-6 py-4">
                    {item.vendor_name}
                  </td>
                  <td className="px-6 py-4">
                    <div className={`${item.status === "locked" ? "bg-green-500 text-white" : "bg-amber-400 text-black"} rounded-xl px-4 py-1.5 flex items-center gap-1 justify-center`}>
                      {item.status === "locked" ?
                        <IoCheckmarkCircle size={14} />
                        : <IoReload size={12} />}
                      <small className='font-bold capitalize'>{item.status === "locked" ? "locked" : "pending"}</small>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className='text-xs' dangerouslySetInnerHTML={{__html: notesArr || "-"}}></p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>


      {/* MOBILE TABLET SCREEN */}
      <div className='block lg:hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
          {decisionLockData.map((item, idx) => {
            return (
              <div key={`dlv-${idx}`} className='odd:bg-gray-200/70 lg:odd:bg-white even:bg-white rounded-xs p-3'>
                <ul className='flex flex-col gap-4'>
                  <li>
                    <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                      {item.vendor_category_label}:
                    </p>
                    <p><strong>{item.vendor_name}</strong></p>
                  </li>
                  <li>
                    <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                      Status:
                    </p>
                    <div className={`${item.status === "locked" ? "bg-green-500 text-white" : "bg-amber-400 text-black"} rounded-sm px-4 py-1.5 inline-flex items-center gap-1 justify-center mt-1`}>
                      {item.status === "locked" ?
                        <IoCheckmarkCircle size={14} />
                        : <IoReload size={12} />}
                      <small className='font-bold capitalize'>{item.status === "locked" ? "locked" : "pending"}</small>
                    </div>
                  </li>
                  <li>
                    <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                      Catatan:
                    </p>
                    {item.notes || "-"}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default VendorDecisionLock