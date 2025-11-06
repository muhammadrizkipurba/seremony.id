"use client";
import { HiArrowLongRight } from "react-icons/hi2";

const NewsletterCard = () => {
  return (
    <div className='bg-primary-yellow bg-[url("/patterns/big-pattern.png")] bg-cover bg-center min-h-[418px] flex items-center'>
      <div className="custom-container">
        <div className='py-28 text-center max-w-[500px] mx-auto'>
          <h4 className='text-3xl lg:text-4xl leading-8 lg:leading-9 font-semibold'>Selalu up to date dengan tren & promo spesial kami</h4>
          <p className='mt-6 text-sm lg:px-19 px-6'>Daftar newsletter sekarang, agar tidak ketinggalan update seru dan promo spesial dari kami.</p>
          <div className="bg-white pl-5 pe-2 py-2 rounded-full flex items-center gap-4 mt-6 mx-2 lg:mx-0">
            <input 
              placeholder="Masukkan alamat email"
              className="bg-transparent outline-none focus:outline-0 flex-1 text-sm"
            />
            <button className="button-primary-orange px-4 py-2 h-full text-sm flex items-center justify-center gap-1.5">
              Subscribe
              <HiArrowLongRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterCard