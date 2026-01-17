// import MainLayout from '@/components/layout/MainLayout'
// import { Metadata } from 'next';
// import React from 'react'
// import LoginForm from './LoginForm';

// export const metadata: Metadata = {
//   title: "Seremony - Login",
//   description: "Login ke portal customer untuk melihat data pemesanan",
// };

// const LoginPage = () => {

//   return (
//     <MainLayout>
//       <main className='h-[85vh] relative custom-container'>
//         <div className='bg-secondary-green w-[120px] h-60 absolute left-0 top-0 -z-10' />
//         <div className='bg-secondary-red bg w-60 h-[120px] absolute right-0 bottom-0 bg-[url("/patterns/small-pattern-vertical.png")] bg-cover bg-center -z-10'/>
//         <div className='flex items-center justify-center h-full'>
//           <div className=''>
//             <h1 className='text-5xl lg:text-6xl tracking-tight font-semibold'>Selamat datang</h1>
//             <p className='text-center leading-5 mt-4'>
//               Mulai persiapan pernikahan Anda dengan
//               <br />
//               penawaran terbaik & fitur eksklusif di Seremony
//             </p>
//             <div className='mt-8'>
//               <LoginForm />
//             </div>
//           </div>
//         </div>
//       </main>
//     </MainLayout>
//   )
// }

// export default LoginPage

'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { HiArrowLeft } from 'react-icons/hi2'
import NotFoundLottie from '@/app/404-not-found.json';
import MainLayout from '@/components/layout/MainLayout'

const LottiePlayer = dynamic(() => import('@/components/LottiePlayer'), {
  ssr: false,
});

const LoginPage = () => {
  return (
    <MainLayout>
      <main className="min-h-[50vh] custom-container pb-32 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-center lg:items-start justify-center h-full order-1 lg:order-2">
            <h2 className="text-6xl lg:text-8xl font-bold">Ooppss...</h2>
            <p className="max-w-2xl mt-4 leading-5 lg:text-left text-center">
              Mohon maaf, halaman yang anda cari tidak ditemukan atau mungkin sudah berganti. Silahkan kembali ke halaman sebelumnya.
            </p>
            <div>
              <Link href={"/"} className="inline-flex items-center gap-2 button-primary-orange ps-4 pe-5 py-2 mt-3 hover:font-bold">
                <HiArrowLeft />
                Kembali ke beranda
              </Link>
            </div>
          </div>
          <LottiePlayer
            src={NotFoundLottie}
            autoplay
            loop
            className='h-auto w-[60%] lg:w-[50%]'
          />
        </div>
      </main>
    </MainLayout>
  )
}

export default LoginPage