"use client"
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer = ({
  src,
  autoplay,
  loop,
  className
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  autoplay: boolean;
  loop: boolean;
  className: string;
}) => {
  return (
    <Player
      src={src}
      autoplay={autoplay}
      loop={loop}
      className={className}
    />
  )
}

export default LottiePlayer