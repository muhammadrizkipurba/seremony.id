import MainLayout from '@/components/layout/MainLayout'
import { EventPackagesGroupByThemeTypeResponse, SinglePackageType } from '@/types';
import { Metadata } from 'next';
import PackageCard from './PackageCard';

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

        <div className='custom-container pb-16 pt-8'>
          <div className='flex flex-col gap-y-4'>
            {packagesData.length > 0 ?
              packagesData.map((resData: EventPackagesGroupByThemeTypeResponse, idx: number) => {
                const { NEXT_PUBLIC_API_URL } = process.env;
                return (
                  <div key={idx}>
                    <h2 className='text-xl md:text-2xl font-semibold my-4 uppercase'>Paket {resData.package_theme}</h2>
                    {/* Render Packages Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                      {resData.packages.map((packageData: SinglePackageType) => {
                        return (
                          <PackageCard
                            key={`package-${idx}-${packageData._id}`}
                            packageData={packageData}
                            bannerImage={packageData.banner_image ? `${NEXT_PUBLIC_API_URL}/images/banners/${packageData.banner_image}` : "/images/package_banner.png"}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })
              : null}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default CatalogPage