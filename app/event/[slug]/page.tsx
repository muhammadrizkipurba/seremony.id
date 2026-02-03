import { BreadCrumbWrapper } from "@/components/BreadCrumb";
import MainLayout from "@/components/layout/MainLayout";
import { SeremonyEvents } from "@/constant";
import { SingleSeremonyEvent } from "@/types";
import Image from "next/image";
import RegisterEventForm from "./RegisterEventForm";

const SingleEventPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const { NEXT_PUBLIC_API_URL } = process.env;
  const eventData: SingleSeremonyEvent = SeremonyEvents.filter(event => event.slug === slug)[0];

  return (
    <MainLayout>
      <BreadCrumbWrapper
        className="hidden md:block"
        params={{
          all: [
            "event",
            eventData.name
          ]
        }}
      />
      <main className='custom-container pb-12 pt-6'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="col-span-3">
            <Image
              unoptimized
              src={`${NEXT_PUBLIC_API_URL}/images/events/${eventData.banner_image}`}
              alt=""
              height={150}
              width={450}
              className="h-auto w-full rounded-lg"
            />
            <div className="my-4">
              <h1 className='text-4xl md:text-[40px] font-bold capitalize tracking-tight my-5'>{eventData.name}</h1>
              <div className="mt-3">
                <p>
                  Exclusive Wedding Experience Session adalah acara pengalaman pernikahan yang dirancang untuk memperlihatkan dan membuktikan bagaimana Seremony bekerja sebagai wedding orchestrator—mengelola, menyusun, dan mengawal seluruh elemen pernikahan dalam satu sistem yang rapi, transparan, dan terkoordinasi.
                </p>
                <p className="font-bold mt-2">
                  Event ini bukan sekadar wedding expo.
                  Bukan pula hanya pamer konsep atau daftar vendor.
                </p>
                <p>
                  Di acara ini, calon pengantin melihat, merasakan, dan mengalami langsung bagaimana sebuah pernikahan dijalankan dengan sistem yang jelas—mulai dari persiapan, alur acara, hingga momen-momen emosional yang terjadi di hari-H.
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <p>Event ini dibuat untuk menjawab satu kebutuhan utama calon pengantin:</p>
              <div className="bg-primary-cultures w-full py-2 my-5">
                <p className="text-center font-semibold text-xl">
                  “Kami ingin yakin, pernikahan kami ditangani dengan aman, rapi, dan tanpa drama.”
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 mt-5">
                <Image
                  unoptimized
                  src={`${NEXT_PUBLIC_API_URL}/images/banners/higher-step.webp`}
                  alt=""
                  width={450}
                  height={150}
                  className="w-full h-auto lg:h-[250px] lg:w-[800px] rounded-lg object-cover"
                />
                <div>
                  <p>Melalui event ini, Seremony ingin:</p>
                  <ul>
                    <li className="flex items-start gap-2 mt-2">
                      <Image
                        src={"/logo/logo-color.svg"}
                        alt=""
                        height={14}
                        width={14}
                        className="mt-1.5"
                      />
                      Memberikan gambaran nyata bagaimana pernikahan dijalankan dengan sistem
                    </li>
                    <li className="flex items-start gap-2 mt-2">
                      <Image
                        src={"/logo/logo-color.svg"}
                        alt=""
                        height={14}
                        width={14}
                        className="mt-1.5"
                      />
                      Membangun kepercayaan lewat pengalaman, bukan sekadar janji
                    </li>
                    <li className="flex items-start gap-2 mt-2">
                      <Image
                        src={"/logo/logo-color.svg"}
                        alt=""
                        height={14}
                        width={14}
                        className="mt-1.5"
                      />
                      Membantu pasangan memahami apakah pendekatan Seremony cocok dengan kebutuhan mereka
                    </li>
                    <li className="flex items-start gap-2 mt-2">
                      <Image
                        src={"/logo/logo-color.svg"}
                        alt=""
                        height={14}
                        width={14}
                        className="mt-1.5"
                      />
                      Menjadi ruang pertemuan antara calon pengantin dan vendor terkurasi dalam satu ekosistem yang tertata
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='h-full'>
            <div className='sticky top-5'>
              <div className='bg-primary-cultures p-4 rounded-xl'>
                <h4 className='font-semibold'>Ingin hadir merasakan langsung event ini ?</h4>
                <small className='text-xs'>Silahkan isi formulir pendaftaran dibawah ini :</small>
                <RegisterEventForm eventSlug={eventData.slug} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default SingleEventPage;