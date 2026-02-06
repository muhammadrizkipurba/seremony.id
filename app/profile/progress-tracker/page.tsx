import MainLayout from '@/components/layout/MainLayout'
import ProfileSidebarMenu from '../ProfileSidebarMenu'
import ProgressTracker from './ProgressTracker'
import ProgressBarOverview from './ProgressBarOverview'
import { IoReloadOutline } from 'react-icons/io5'
import { cookies } from 'next/headers';
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

const ProgressTrackerPage = async () => {

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
          {user && user.email === "rizki.seremony@gmail.com" ?
            <div className='md:col-span-2 lg:col-span-3'>
              <div className='bg-soft-gray p-4 rounded-xl'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl font-bold'>Progress Tracker</h1>
                  <button className='flex items-center gap-1 bg-primary-orange/90 hover:bg-primary-orange text-gray-50 hover:text-white px-3 py-1.5 rounded-full transition-all ease-in-out duration-300 cursor-pointer'>
                    <IoReloadOutline size={14} />
                    <small className='hidden lg:block cursor-pointer!'>Refresh</small>
                  </button>
                </div>
                <hr className="my-4" />
                <ProgressBarOverview />
              </div>
              <div className='bg-soft-gray p-4 rounded-xl mt-5'>
                <h1 className='text-xl font-bold mb-4'>Progress Details</h1>
                <ProgressTracker />
              </div>
            </div>
            : <div className='md:col-span-2 lg:col-span-3'>
              <div className='bg-soft-gray p-4 rounded-xl'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl font-bold'>Progress Tracker</h1>
                </div>
                <hr className="my-4" />
                <div className='min-h-40 flex flex-col items-center justify-center'>
                  <p className='text-center'>Progress Tracker akan tampil otomatis setelah melakukan pemesanan dan pembayaran DP</p>

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

export default ProgressTrackerPage