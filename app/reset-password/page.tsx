import MainLayout from '@/components/layout/MainLayout'
import ResetPasswordForm from './ResetPasswordForm'
import { Suspense } from 'react'

const page = () => {
  return (
    <MainLayout>
      <main className="min-h-[50vh] custom-container py-10 lg:py-20">
        <div className='grid grid-cols-2 md:rounded-xl overflow-hidden h-full shadow-sm shadow-soft-gray'>
          <div className='text-center p-5 col-span-2 md:col-span-1 relative'>
            <div className='bg-secondary-green w-3 h-30 md:w-[60px] md:h-60 absolute left-0 top-0 rounded-br-xl' />
            <div className='bg-secondary-red w-3 h-30 md:w-10 md:h-60 absolute right-0 bottom-0 rounded-tl-md bg-[url("/patterns/small-pattern-vertical.png")] bg-cover bg-center'/>
            <div className='z-50'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Reset Password</h1>
              <div className='lg:max-w-[500px] mx-auto mt-8'>
                <Suspense>
                  <ResetPasswordForm />
                </Suspense>
              </div>
            </div>
          </div>

          <div className='min-h-[50vh] w-full relative hidden md:block'>
            <div className='h-full w-full absolute right-0 bottom-0 bg-[url("/images/login.png")] bg-cover bg-left -z-10'/> 
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default page