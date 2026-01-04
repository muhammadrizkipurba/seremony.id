import MainLayout from '@/components/layout/MainLayout'
import WhatsappButton from '@/components/WhatsappButton';
import { ContactInfo } from '@/constant';
import { isEmptyObject, rupiahFormat } from '@/lib/utils';
import { SinglePackageType } from '@/types';
import { DotIcon } from 'lucide-react';
import NotFoundLottie from '@/app/404-not-found.json';
import Link from 'next/link';

import type { Metadata, ResolvingMetadata } from 'next';
import { IoLogoWhatsapp } from 'react-icons/io5';
import BookingButton from './BookingButton';
import PackageInfoDetails from './PackageInfoDetails';
import LottiePlayer from '@/components/LottiePlayer';
import { HiArrowLeft } from 'react-icons/hi2';
import PackageImagesSlider from './PackageImagesSlider';

// Define the type for the props passed to generateMetadata and the Page component
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Export the asynchronous generateMetadata function
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata // Optional: access and extend parent metadata
): Promise<Metadata> {
  // Access the dynamic parameters using 'await'
  const slug = (await params).slug;

  // Fetch package data based on the dynamic ID
  let packageMetadata: SinglePackageType | Record<string, never> = {};
  const responseData = await fetch(`${process.env.API_URL}/event-packages/details/${slug}`).then((res) => res.json());

  if (responseData.status === 200) packageMetadata = responseData.data;

  // Optionally, access parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if(isEmptyObject(packageMetadata)) return {
    title: "Seremony",
    description: ""
  };
  
  // Return the dynamic metadata
  return {
    title: "Seremony | " + packageMetadata.metadata.title,
    description: packageMetadata.metadata.description,
    openGraph: {
      type: 'website',
      url: `${process.env.WEB_URL}/katalog/${packageMetadata.metadata.slug}`,
      title: "Seremony | " + packageMetadata.metadata.openGraph.title,
      description: packageMetadata.metadata.openGraph.description,
      siteName: "Seremony",
      images: [{ url: "https://seremony.id/opengraph-image.png" }]
    }
  };
}


const SinglePackagePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  let packageData: SinglePackageType | Record<string, never> = {};
  const res = await fetch(`${process.env.API_URL}/event-packages/details/${slug}`);
  const data = await res.json();
  if (data.status === 200) {
    packageData = data.data;
  };

  return (
    <MainLayout>
      {!isEmptyObject(packageData) ?
        <main className='custom-container my-12'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
            <div className='lg:col-span-3 min-h-[80vh]'>
              <PackageImagesSlider />
              <div className='my-12'>
                <h1 className='text-[40px] font-bold capitalize tracking-tight leading-12'>{packageData.package_name}</h1>
                <div className="flex items-center my-2 gap-2">
                  <div className="">
                    <small className="lg:text-lg">{packageData.quantity_pax} pax</small>
                  </div>
                  {packageData.include_venue &&
                    <div className="flex items-center gap-2">
                      <DotIcon />
                      <small className="lg:text-lg">Venue</small>
                    </div>
                  }
                  {packageData.include_catering &&
                    <div className="flex items-center gap-2">
                      <DotIcon />
                      <small className="lg:text-lg">Termasuk Catering</small>
                    </div>
                  }
                  <div className="flex items-center gap-2">
                    <DotIcon />
                    <small className="lg:text-lg">Dekorasi</small>
                  </div>
                  {packageData.seremony_moments.length > 0 &&
                    <div className="flex items-center gap-2">
                      <DotIcon />
                      <small className="lg:text-lg">Seremony Moment</small>
                    </div>
                  }
                  {packageData.special_experience.length > 0 &&
                    <div className="flex items-center gap-2">
                      <DotIcon />
                      <small className="lg:text-lg">Special Experience</small>
                    </div>
                  }
                </div>
              </div>
              <hr className='my-5' />
              <PackageInfoDetails packageData={packageData} />
            </div>
            <div className='h-full'>
              <div className='sticky top-10'>
                <div className='bg-primary-cultures p-4 rounded-xl'>
                  <h4 className='font-semibold'>Tertarik dengan penawaran ini ?</h4>
                  <small className='text-xs'>Klik tombol dibawah ini untuk informasi lebih lanjut</small>
                  <WhatsappButton
                    phoneNumber={ContactInfo.phone_number.value}
                    message={`Halo Admin Seremony, saya tertarik dengan Paket ${packageData.package_name}`}
                    className='flex items-center justify-center gap-2 rounded-lg! w-full mt-4 transition-all ease-in-out duration-300 hover:scale-[1.02]'
                  >
                    <IoLogoWhatsapp />
                    Hubungi Kami
                  </WhatsappButton>
                </div>
                <label className='font-bold text-[48px] md:text-[30px] xl:text-[48px] my-4 block'>IDR {rupiahFormat(packageData.sale_price)}</label>
                <BookingButton packageId={packageData._id} />
              </div>
            </div>
          </div>
        </main>
        : <main className="min-h-[50vh] custom-container pb-32 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center lg:items-start justify-center h-full order-1 lg:order-2">
              <h2 className="text-6xl lg:text-8xl font-bold">Ooppss...</h2>
              <p className="max-w-2xl mt-4 leading-5 lg:text-left text-center">
                Mohon maaf, paket yang anda cari tidak ditemukan atau mungkin sudah berganti. Silahkan kembali ke halaman sebelumnya.
              </p>
              <div>
                <Link href={"/katalog"} className="inline-flex items-center gap-2 button-primary-orange ps-4 pe-5 py-2 mt-3 hover:font-bold">
                  <HiArrowLeft />
                  Lihat paket yang tersedia
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
      }
    </MainLayout>
  )
}

export default SinglePackagePage