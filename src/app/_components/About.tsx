'use client'

import { FC } from 'react'
import { Sora } from 'next/font/google'
import Image from 'next/image';


const sora = Sora({ 
  subsets: ["latin"],
  weight: ['400', '700']
});

const About: FC = () => {
  return (
    <div className={`w-full py-20 bg-white flex  justify-center ${sora.className}`} id='about'>
      <div className="w-[70%] space-y-28">
        {/* About HypeSugar Section */}
        <div className="mb-44 space-y-3 text-center">
          <h2 className="text-3xl text-black font-bold">About HypeSugar</h2>
          <p className="text-[#00000066]">
            Manage, allocate & reduce cloud spend across all cloud providers and services <br /> by using Zaspert's enterprise-grade FinOps solution
          </p>
        </div>

        {/* Our Services Section */}
        <div className="mb-44 space-y-3 text-center" id='services'>
          <h2 className="text-3xl  text-black font-bold">Our Services</h2>
          <p className="text-[#00000066]">
            Manage, allocate & reduce cloud spend across all cloud providers and services by <br /> using Zaspert's enterprise-grade FinOps solution
          </p>
        </div>

        {/* Boost Your Presence Section - Vertical on mobile, Horizontal on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <h2 className="text-3xl font-bold text-black text-center md:text-left">Boost Your <br /> Presence</h2>
          <Image 
            height={10} 
            width={300} 
            src="/line.png" 
            alt=".." 
            className="rotate-90 md:rotate-0 h-32 md:h-auto w-[2px] md:w-auto my-4 md:my-0"
          />
          <p className="text-[#00000066] text-center md:text-left">
            Increase your influence with enhanced engagement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About