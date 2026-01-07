'use client'
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-1.png`,
    thumbnail: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-1.png`,
  },
  {
    original: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-2.png`,
    thumbnail: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-2.png`,
  },
  {
    original: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-3.png`,
    thumbnail: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-3.png`,
  },
  {
    original: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-4.png`,
    thumbnail: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-4.png`,
  },
  {
    original: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-5.png`,
    thumbnail: `${process.env.NEXT_PUBLIC_WEB_URL}/images/packages/banner-5.png`,
  },
];

const PackageImagesSlider = () => {
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  )
}

export default PackageImagesSlider