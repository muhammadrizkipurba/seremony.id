"use client"

import Image from "next/image"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"

const SeremonyAssistCard = () => {
  return (
    <div className="bg-white custom-container relative py-[120px] mt-20 overflow-x-hidden">
      <div className="bg-secondary-green h-14 w-5 top-16 right-0  xl:h-[120px] xl:w-[120px] absolute xl:-right-24 xl:top-0"/>
      <div className="bg-primary-cultures">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-10 lg:p-16 pe-0!">
            <h2 className="uppercase text-primary-orange tracking-widest">Seremony Assist</h2>
            <h3 className="text-[48px] leading-11 font-semibold mt-3">Fitur cerdas untuk pilihan event yang tepat</h3>
            <p className="lg:max-w-[65%] my-9">
              Dengan fitur ini, Anda dapat dengan mudah menemukan event dan paket yang paling sesuai dengan kebutuhan, preferensi, dan anggaran Anda, sehingga setiap momen terasa lebih istimewa.
            </p>
            <Link href="/explore" className="button-primary-orange px-4 py-2 inline-flex gap-2 items-center text-sm font-semibold">
              Lihat Selengkapnya
              <HiArrowRight />
            </Link>
          </div>
          <div className="min-h-[450px] md:min-h-[650px] lg:min-h-[400px] w-full relative">
            <div className="h-full w-full overflow-hidden relative">
              <Image
                src="/images/vector.png"
                alt=""
                height={643}
                width={643}
                className="absolute -bottom-1/2 right-10 lg:-right-10 lg:-bottom-30 xl:-bottom-1/2 scale-[2.1] md:scale-150 lg:scale-[1.2] xl:scale-100"
              />
            </div>
            <Image
              src="/images/seremony-assistant.png"
              alt=""
              height={580}
              width={413}
              className="absolute lg:right-10 xl:right-20 lg:scale-100 lg:bottom-0 md:bottom-7 md:right-40 md:scale-[1.1] scale-90 -bottom-6"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SeremonyAssistCard