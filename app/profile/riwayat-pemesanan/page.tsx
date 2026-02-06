
import ProfileSidebarMenu from '../ProfileSidebarMenu'
import MainLayout from '@/components/layout/MainLayout'

const BookingHistoryPage = () => {
  return (
    <MainLayout>
      <main className='custom-container relative z-30 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <div className='md:col-span-2 lg:col-span-1'>
            <ProfileSidebarMenu />
          </div>
          <div className='md:col-span-2 lg:col-span-3'>
            <div className='bg-soft-gray p-4'>
              <h1 className='text-xl font-bold'>Riwayat Pemesanan</h1>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default BookingHistoryPage