"use client"
import { rupiahFormat } from '@/lib/utils'
import { ChangeOrderSummary } from '@/types'
import moment from 'moment'
import { IoCheckmarkCircle, IoReload } from 'react-icons/io5'

const ChangeOrderSummarySection = ({
  data
}: {
  data?: ChangeOrderSummary[];
}) => {
  if (!data || data.length === 0) {
    return (
      <div className='bg-soft-gray p-4 rounded-xl'>
        <hr className="my-4" />
        <div className='min-h-40 flex flex-col items-center justify-center'>
          <p className='text-center'>Tidak ada penambahan</p>
        </div>
      </div>
    )
  };

  const getTotalPriceImpact = (changeOrderSummary: ChangeOrderSummary[]) => {
    return changeOrderSummary.reduce((total, item) => {
      return total + (item.price_impact || 0);
    }, 0);
  };

  return (
    <div>
      {/* DESKTOP PC SCREEN */}
      <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-base hidden lg:block border-t">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary-foreground border-b border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white w-[200px]">
                Nama Vendor
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white text-center w-[300px]">
                Penambahan
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white text-center">
                Tanggal Penawaran
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white text-center">
                Tanggal Approve
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white text-center">
                Biaya
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, idx) => {
              return (
                <tr key={`dlv-${idx}`} className="odd:bg-neutral-primary even:bg-gray-50 border-b border-default last:border-b-0">
                  <th scope="row" className="px-6 py-4 font-semibold text-heading whitespace-nowrap">
                    {item.vendor_name}
                  </th>
                  <td className="px-6 py-4">
                    <ul>
                      {item.item_name.split(", ").map(item => {
                        return (
                          <li>{item}</li>
                        )
                      })}
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {moment(item.inquiry_date, "DD/MM/YYYY").format("DD MMM YYYY")}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className={`${item.status === "locked" ? "bg-green-500 text-white" : "bg-amber-400/80 text-black"} rounded-xl px-4 py-1.5 flex items-center gap-1 justify-center`}>
                      {item.status === "locked" ?
                        <IoCheckmarkCircle size={14} />
                        : <IoReload size={12} />}
                      <small className='font-bold capitalize'>{item.status === "locked" ? "locked" : "pending"}</small>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.approval_date ? moment(item.approval_date, "DD/MM/YYYY").format("DD MMM YYYY") : "-"}
                  </td>
                  <td className="px-6 py-4 text-end">
                    Rp{(rupiahFormat(item.price_impact))}
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
                </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
                </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
                </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
                </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white">
                Total Biaya  
              </th>
              <th scope="col" className="px-6 py-3 font-semibold bg-secondary-foreground text-white text-end">
                Rp{rupiahFormat(getTotalPriceImpact(data))}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* MOBILE TABLET SCREEN */}
      <div className='block lg:hidden'>
        <div className='bg-secondary-foreground rounded-t-lg p-4 flex items-center justify-between text-white font-bold'>
          <p>TOTAL BIAYA</p>
          <p>Rp{rupiahFormat(getTotalPriceImpact(data))}</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
          {data.map((item, idx) => {
            return (
              <div key={`dlv-${idx}`} className='odd:bg-gray-200/70 lg:odd:bg-white even:bg-white rounded-xs p-3'>
                <ul className='flex flex-col gap-4'>
                  <li>
                    <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                      Nama vendor:
                    </p>
                    <p><strong>{item.vendor_name}</strong></p>
                  </li>
                  <li>
                    <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                      Penambahan:
                    </p>
                    <ul>
                      {item.item_name.split(", ").map(item => {
                        return (
                          <li key={item.trim()}><strong>{item}</strong></li>
                        )
                      })}
                    </ul>
                  </li>
                  <li className='grid grid-cols-2 gap-10'>
                    <div>
                      <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                        Tanggal Penawaran
                      </p>
                      <p className=''><strong>{moment(item.inquiry_date, "DD/MM/YYYY").format("DD MMM YYYY")}</strong></p>
                    </div>
                    <div>
                      <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                        Tanggal Approve
                      </p>
                      <p className=''><strong>{moment(item.inquiry_date, "DD/MM/YYYY").format("DD MMM YYYY")}</strong></p>
                    </div>
                  </li>
                  <li className='grid grid-cols-2 gap-10'>
                    <div>
                      <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                        Biaya:
                      </p>
                      <p className=''><strong>Rp{rupiahFormat(item.price_impact)}</strong></p>
                    </div>
                    <div>
                      <p className='text-neutral-600 lg:text-black text-sm lg:text-[16px]'>
                        Status:
                      </p>
                      <div className={`${item.status === "locked" ? "bg-green-500 text-white" : "bg-amber-400/80 text-black"} rounded-lg md:rounded-sm px-4 py-1.5 inline-flex items-center gap-1 justify-center mt-1`}>
                        {item.status === "locked" ?
                          <IoCheckmarkCircle size={14} />
                          : <IoReload size={12} />}
                        <small className='font-bold capitalize'>{item.status === "locked" ? "locked" : "pending"}</small>
                      </div>
                    </div>
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

export default ChangeOrderSummarySection