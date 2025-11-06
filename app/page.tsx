import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import HomeHero from "./beranda/HomeHero";
import PromoSlider from "./beranda/PromoSlider";

export const metadata: Metadata = {
  title: "Seremony",
  description: "Seremony make it happen",
};

export default function Home() {
  return (
    <MainLayout>
      <div className="">
        <HomeHero />
      </div>

      <div className="bg-white pb-24 pt-64 custom-container relative">
          <div className="w-[90%] absolute translate-x-[5.5%] left-0 -top-3/5 translate-y-2.5">
            <PromoSlider />
          </div>

        <div>
          <h2 className="text-4xl font-semibold text-center text-black">Ragam Kategori Event</h2>
        </div>
      </div>
    </MainLayout>
  );
}
