import MainLayout from '@/components/layout/MainLayout'
import ProfileSidebarMenu from '../ProfileSidebarMenu'
import { cookies } from 'next/headers';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
import { EventData, MeetingsData } from './MeetingTrackerData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MeetingTracker from './MeetingTracker';
import moment from 'moment';
import "moment/locale/id";
import { rupiahFormat } from '@/lib/utils';

const MeetingTrackerPage = async () => {

  const authCookie = (await cookies()).get("auth")?.value;

  let user = null;
  if (authCookie) user = JSON.parse(authCookie).user;

  return (
    <MainLayout>
      <main className='custom-container relative z-30 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <div className='md:col-span-2 lg:col-span-1'>
            <ProfileSidebarMenu />
          </div>
          {user && user.email === "zainalnst1995@gmail.com" ?
            <div className='md:col-span-2 lg:col-span-3'>
              <div className='border rounded-xl overflow-hidden'>
                <div className='bg-secondary-foreground p-3'>
                  <h1 className='text-lg font-bold uppercase text-white'>Informasi Acara</h1>
                </div>
                <ol className='list-decimal pl-8 flex flex-col gap-1 p-3'>
                  <li>
                    Booking ID : <strong>{EventData.booking_id}</strong>
                  </li>
                  <li>
                    Tanggal Acara : <strong>{moment(EventData.event_date, "DD-MM-YYYY").format("DD MMMM YYYY")}</strong>
                  </li>
                  <li>
                    Lokasi Acara : <strong>{EventData.event_location}</strong>
                  </li>
                  <li>
                    Total Pax : <strong>{EventData.estimate_total_pax} pax</strong>
                  </li>
                  <li>
                    Konsep Acara : <strong>{EventData.event_concept}</strong>
                  </li>
                  <li>
                    Warna Dekorasi Dominan : <strong>{EventData.decoration_dominant_color || "-"}</strong>
                  </li>
                  <li>
                    Nilai Kontrak : <strong>Rp {rupiahFormat(EventData.contract_value)}</strong>
                  </li>
                </ol>
              </div>
              <Accordion type='multiple' defaultValue={['meeting-0']} className='flex flex-col gap-4 mt-5'>
                {MeetingsData.map((item, idx) => {
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