import MainLayout from '@/components/layout/MainLayout'
import { Metadata } from 'next';
import React from 'react'
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: "Seremony - Login",
  description: "Login ke portal customer untuk melihat data pemesanan",
};

const LoginPage = () => {

  return (
    <MainLayout>
      <main className='h-[85vh] relative custom-container'>
        <div className='bg-secondary-green w-[120px] h-60 absolute left-0 top-0 -z-10' />
        <div className='bg-secondary-red bg w-60 h-[120px] absolute right-0 bottom-0 bg-[url("/patterns/small-pattern-vertical.png")] bg-cover bg-center -z-10'/>
        <div className='flex items-center justify-center h-full'>
          <div className=''>
            <h1 className='text-5xl lg:text-6xl tracking-tight font-semibold'>Selamat datang</h1>
            <p className='text-center leading-5 mt-4'>
              Mulai persiapan pernikahan Anda dengan
              <br />
              penawaran terbaik & fitur eksklusif di Seremony
            </p>
            <div className='mt-8'>
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default LoginPage