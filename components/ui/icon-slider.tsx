"use client"
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider'

type Props = {
  icons: {
    _id: string;
    name: string;
    logo: string;
  }[];
  interval?: number;
}

const IconSlider = ({
  icons,
}: Props) => {
  return (
    <div><Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={'#fff'}
    >
      {icons.map((item, idx) => {
        return (
          <Slider.Slide key={`icon-slide-${idx}`}>
            <Image src={`/vendors-logo/${item.logo}`} alt="" className='w-auto h-20 mx-auto' width={120} height={100} />
          </Slider.Slide>
        )
      })}
    </Slider></div>
  )
}

export default IconSlider