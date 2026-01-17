"use client"
import Link from "next/link";
import dynamic from 'next/dynamic';
import { HiArrowLeft } from "react-icons/hi2";
import NotFoundLottie from '@/app/404-not-found.json';

import MainLayout from "@/components/layout/MainLayout";

const LottiePlayer = dynamic(() => import('../components/LottiePlayer'), {
  ssr: false,
});

export default function NotFound() {
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
  );
}