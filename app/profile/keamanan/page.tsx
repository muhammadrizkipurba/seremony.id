import MainLayout from '@/components/layout/MainLayout'
import ProfileSidebarMenu from '../ProfileSidebarMenu'

const SecurityPage = () => {
  return (
    <MainLayout>
      <main className='custom-container relative z-30 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <div className='md:col-span-2 lg:col-span-1'>
            <ProfileSidebarMenu />
          </div>
          <div className='md:col-span-2 lg:col-span-3'>
            <h1>Pengaturan Kemanan</h1>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default SecurityPage