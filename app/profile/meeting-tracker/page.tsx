import MainLayout from '@/components/layout/MainLayout'
import ProfileSidebarMenu from '../ProfileSidebarMenu'
import { cookies } from 'next/headers';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MeetingsData } from './MeetingTrackerData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MeetingTracker from './MeetingTracker';
import moment from 'moment';
import "moment/locale/id";
import { isEmptyObject, rupiahFormat } from '@/lib/utils';
import { BookingDataResponse } from '@/types';
import { IoCheckmarkCircle, IoReload } from 'react-icons/io5';

const MeetingTrackerPage = async () => {

  const authCookie = (await cookies()).get("auth")?.value;

  let user = null;
  if (authCookie) user = JSON.parse(authCookie).user;

  let bookingData: Partial<BookingDataResponse> = {};

  if (user) {
    const apiURL = process.env.API_URL + `/booking/user/${user.email}`;
    const response = await fetch(apiURL);
    const bookingResponseJSON = await response.json();
    bookingData = bookingResponseJSON.data;
  };

  return (
    <MainLayout>
      <main className='custom-container relative z-30 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <div className='md:col-span-2 lg:col-span-1'>
            <ProfileSidebarMenu />
          </div>
          {!isEmptyObject(bookingData) ?
            <div className='md:col-span-2 lg:col-span-3'>
              <div className='border rounded-xl overflow-hidden'>
                <div className='bg-secondary-foreground p-3'>
                  <h1 className='text-lg font-bold uppercase text-white'>Informasi Acara</h1>
                </div>
                <div className='p-3 flex flex-col gap-y-1'>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
                    <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm md:text-[16px]'>Booking ID </p>
                    <div className='col-span-3 md:col-span-4'>
                      <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{bookingData.booking_code}</strong></p>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
                    <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm md:text-[16px]'>Tanggal Acara </p>
                    <div className='col-span-3 md:col-span-4'>
                      <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{moment(bookingData.event_data?.event_date, "DD-MM-YYYY").format("DD MMMM YYYY")}</strong></p>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
                    <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm md:text-[16px]'>Lokasi Acara </p>
                    <div className='col-span-3 md:col-span-4'>
                      <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{bookingData.event_data?.event_location}</strong></p>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
                    <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm md:text-[16px]'>Total Pax </p>
                    <div className='col-span-3 md:col-span-4'>
                      <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{bookingData.event_data?.total_pax} pax</strong></p>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
                    <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm md:text-[16px]'>Konsep Acara </p>
                    <div className='col-span-3 md:col-span-4'>
                      <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{bookingData.event_data?.event_concept}</strong></p>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
                    <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm md:text-[16px]'>Warna Dekorasi Dominan </p>
                    <div className='col-span-3 md:col-span-4'>
                      <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{bookingData.event_data?.decoration_dominant_color || "-"}</strong></p>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
                    <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm md:text-[16px]'>Nilai Kontrak </p>
                    <div className='col-span-3 md:col-span-4'>
                      <p><span className='px-1 hidden md:inline-block'>:</span> <strong>Rp {bookingData.event_data ? rupiahFormat(bookingData.event_data.contract_value) : 0}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border rounded-xl overflow-hidden mt-5'>
                <div className='bg-secondary-foreground p-3'>
                  <h1 className='text-lg font-bold uppercase text-white'>Daftar Vendor</h1>
                </div>
                <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-base">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-200 border-b border-default">
                      <tr>
                        <th scope="col" className="px-6 py-3 font-semibold bg-gray-200">
                        </th>
                        <th scope="col" className="px-6 py-3 font-semibold bg-gray-200">
                          Nama Vendor
                        </th>
                        <th scope="col" className="px-6 py-3 font-semibold bg-gray-200 text-center">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 font-semibold bg-gray-200">
                          Catatan
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookingData.decision_lock_vendors?.map((item, idx) => {
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
                              {item.notes || "-"}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <Accordion type='multiple' defaultValue={['meeting-0']} className='flex flex-col gap-4 mt-5'>
                {bookingData.meeting_tracker_id?.meeting_data.map((item, idx) => {
                  return (
                    <AccordionItem key={`${item.code}-${idx}`} value={item.code} className='rounded-xl overflow-hidden border'>
                      <AccordionTrigger className='data-[state=open]:text-white data-[state=open]:bg-secondary-foreground hover:bg-accent-foreground/10 px-3 [&[data-state=open]>svg]:text-white cursor-pointer'>
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className=''>
                          <MeetingTracker data={item} />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
            : <div className='md:col-span-2 lg:col-span-3'>
              <div className='bg-soft-gray p-4 rounded-xl'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl font-bold'>Meeting Tracker</h1>
                </div>
                <hr className="my-4" />
                <div className='min-h-40 flex flex-col items-center justify-center'>
                  <p className='text-center'>Meeting Tracker akan tampil otomatis setelah melakukan pemesanan dan pembayaran DP</p>

                  <Link href="/daftar-akun" className='button-primary-orange ps-5 pe-3 py-2 text-sm flex items-center gap-2 hover:font-bold mt-5' >
                    Lihat Katalog
                    <HiArrowLongRight />
                  </Link>
                </div>
              </div>
            </div>}
        </div>
      </main>
    </MainLayout>
  )
}

export default MeetingTrackerPage;