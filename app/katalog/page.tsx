import MainLayout from '@/components/layout/MainLayout'
import { EventPackagesGroupByThemeTypeResponse, SinglePackageType } from '@/types';
import { Metadata } from 'next';
import PackageCard from './PackageCard';
import PackageCardList from './PackageCardList';

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

const CatalogPage = async () => {

  let packagesData = [];
  const res = await fetch(`${process.env.API_URL}/event-packages/group-by-theme/694d8b29b16cada45921e2f2`);
  const data = await res.json();
  if (data.status === 200) {
    packagesData = data.data;
  };
  
  let venueTypeOptions = [];
  const fetchVenueTypesRes = await fetch(`${process.env.API_URL}/events/venue-type-options`);
  const resData = await fetchVenueTypesRes.json();
  if (resData.status === 200) {
    venueTypeOptions = resData.data;
  };

  return (
    <MainLayout>
      <main>
        <div className='relative overflow-x-hidden'>
          <div className='w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] bg-secondary-green absolute right-0 top-0 z-10' />
          <div className='w-30 h-[60px] lg:w-60 lg:h-[120px] bg-secondary-red absolute left-0 bottom-0 bg-[url("/patterns/small-pattern-horizontal.png")] z-10' />
          <div className='bg-primary-cultures py-20'>
            <div className='custom-container relative z-30 flex items-center justify-center'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Paket Pernikahan</h1>
            </div>
          </div>
        </div>

        <div className='custom-container pb-16 pt-8'>
          <div className='flex flex-col gap-y-4'>
            <PackageCardList packagesData={packagesData} venueTypeOptions={venueTypeOptions} />
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default CatalogPage