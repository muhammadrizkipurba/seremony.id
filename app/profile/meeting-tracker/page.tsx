import MainLayout from '@/components/layout/MainLayout'
import ProfileSidebarMenu from '../ProfileSidebarMenu'
import { cookies } from 'next/headers';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
import { TbChecklist, TbTimelineEventText } from "react-icons/tb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MeetingTracker from './MeetingTracker';
import moment from 'moment';
import "moment/locale/id";
import { isEmptyObject, rupiahFormat } from '@/lib/utils';
import { BookingDataResponse } from '@/types';
import VendorDecisionLock from './VendorDecisionLock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LuCalendarHeart } from 'react-icons/lu';
import ChangeOrderSummarySection from './ChangeOrderSummarySection';

interface PageProps {
  searchParams: Promise<{ tab?: string }>
};

const MeetingTrackerPage = async ({ searchParams }: PageProps) => {
  // Await the searchParams in Next.js
  const params = await searchParams
  const activeTab = params.tab || "event-info"

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
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
          <div className='lg:col-span-1'>
            <ProfileSidebarMenu />
          </div>
          {!isEmptyObject(bookingData) ?
            <div className='lg:col-span-3 mt-8 lg:mt-0'>
              <div className='bg-secondary-foreground p-3 rounded-xl'>
                <h1 className='text-lg font-bold uppercase text-white text-center'>MEETING TRACKER</h1>
              </div>
              <Tabs defaultValue={activeTab} className="mt-5 gap-0">
                <TabsList className='p-0 gap-2 mb-5 md:gap-0 flex-wrap md:mb-0 bg-secondary-transparent'>
                  <TabsTrigger
                    value="event-info"
                    asChild
                    className={`${activeTab === "event-info" ? "bg-secondary-foreground! font-bold text-white" : "bg-gray-200 text-black/50 hover:bg-gray-300"} transition-all ease-in-out duration-300 px-6 uppercase cursor-pointer py-2`}
                  >
                    <Link 
                      href="/profile/meeting-tracker?tab=event-info" 
                      className='flex items-center gap-2'
                      scroll={false}
                    >
                      <LuCalendarHeart />
                      Informasi Acara
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger
                    value="vendor-list"
                    className={`${activeTab === "vendor-list" ? "bg-secondary-foreground! font-bold text-white" : "bg-gray-200 text-black/50 hover:bg-gray-300"} transition-all ease-in-out duration-300 px-6 uppercase cursor-pointer py-2`}
                  >
                    <Link 
                      href="/profile/meeting-tracker?tab=vendor-list" 
                      className='flex items-center gap-2'
                      scroll={false}
                    >
                      <TbChecklist />
                      Daftar Vendor
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger
                    value="tracker"
                    className={`${activeTab === "tracker" ? "bg-secondary-foreground! font-bold text-white" : "bg-gray-200 text-black/50 hover:bg-gray-300"} transition-all ease-in-out duration-300 px-6 uppercase cursor-pointer py-2`}
                  >
                    <Link 
                      href="/profile/meeting-tracker?tab=tracker" 
                      className='flex items-center gap-2'
                      scroll={false}
                    >
                      <TbTimelineEventText />
                      Meeting Tracker
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger
                    value="change-order-summary"
                    className={`${activeTab === "change-order-summary" ? "bg-secondary-foreground! font-bold text-white" : "bg-gray-200 text-black/50 hover:bg-gray-300"} transition-all ease-in-out duration-300 px-6 uppercase cursor-pointer py-2`}
                  >
                    <Link 
                      href="/profile/meeting-tracker?tab=change-order-summary" 
                      className='flex items-center gap-2'
                      scroll={false}
                    >
                      <TbTimelineEventText />
                      Daftar Penambahan
                    </Link>
                  </TabsTrigger>
                </TabsList>

                {activeTab === "event-info" && (
                  <TabsContent value="event-info">
                    <div className='border border-t-0 rounded-b-xl lg:rounded-tr-xl overflow-hidden'>
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
                  </TabsContent>
                )}

                {activeTab === "vendor-list" && (
                  <div className='border border-t-0 rounded-b-xl lg:rounded-tr-xl overflow-hidden mt-0'>
                    {bookingData.decision_lock_vendors && (
                      <VendorDecisionLock decisionLockData={bookingData.decision_lock_vendors} />
                    )}
                  </div>
                )}

                {activeTab === "tracker" && (
                  <div className='border border-t-0 rounded-b-xl lg:rounded-tr-xl p-4 overflow-hidden mt-0'>
                    <Accordion type='multiple' defaultValue={['meeting-0']} className='flex flex-col gap-4 mt-0'>
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
                )}

                {activeTab === "change-order-summary" && (
                  <div className='border border-t-0 rounded-b-xl lg:rounded-tr-xl overflow-hidden mt-0'>
                    {bookingData.meeting_tracker_id?.change_order_summary && (
                      <ChangeOrderSummarySection data={bookingData.meeting_tracker_id.change_order_summary} />
                    )}
                  </div>
                )}
              </Tabs>
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