import MainLayout from '@/components/layout/MainLayout'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Seremony - Katalog",
  description: "Temukan paket pernikahan lengkap yang sesuai dengan kebutuhan dan budget Anda",
  openGraph: {
    type: "website",
    url: process.env.WEB_URL,
    title: "Seremony",
    description: "Temukan paket pernikahan lengkap yang sesuai dengan kebutuhan dan budget Anda",
    siteName: "Seremony",
    images: [{ url: "https://seremony.id/opengraph-image.png" }]
  }
};

const CatalogPage = () => {
  return (
    <MainLayout>
      <main>
        <div className='relative overflow-x-hidden'>
          <div className='w-[120px] h-[120px] bg-secondary-green absolute right-0 top-0 z-10' />
          <div className='w-60 h-[120px] bg-secondary-red absolute left-0 bottom-0 bg-[url("/patterns/small-pattern-horizontal.png")] z-10' />
          <div className='bg-primary-cultures py-20'>
            <div className='custom-container relative z-30 flex items-center justify-center'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Paket Pernikahan</h1>
            </div>
          </div>
        </div>

        <div className='custom-container py-16'>
          List paket
        </div>
      </main>
    </MainLayout>
  )
}

export default CatalogPage