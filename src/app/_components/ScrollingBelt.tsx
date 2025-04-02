'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google';

const sora = Sora({ 
  subsets: ["latin"],
  weight: ['400', '700']
});

const ScrollContent = () => (
  <div className="flex items-center space-x-4 mx-4">
    <span className={`text-2xl text-white font-bold ${sora.className} `}>Let&apos;s Talk</span>
    <Image src="/star-white.png" alt="star" width={40} height={40} />
    
  </div>
);

const ScrollingBelt: FC = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-4 border-y-2 border-black">
      <div className="relative flex">
        <div className="animate-scroll flex items-center whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ScrollContent key={i} />
          ))}
        </div>
        <div className="animate-scroll-2 absolute top-0 flex items-center whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ScrollContent key={i} />
          ))}
        </div>
      </div>
      
      {/* Big animated text */}
      <div className="py-2 text-center overflow-hidden">
        <h1 className="animate-slide-left text-[120px] md:text-[220px] lg:text-[420px] text-white font-bold whitespace-nowrap">
          HypeSugar
        </h1>
      </div>
    </div>
  )
}

export default ScrollingBelt
