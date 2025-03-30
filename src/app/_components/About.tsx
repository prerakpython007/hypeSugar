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
    <div className={`w-full py-20 flex  justify-center ${sora.className}`}>
      <div className="w-[70%] space-y-28">
        {/* About HypeSugar Section */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl text-black font-bold">About HypeSugar</h2>
          <p className="text-[#00000066]">
            Manage, allocate & reduce cloud spend across all cloud providers and services by using Zaspert's enterprise-grade FinOps solution
          </p>
        </div>

        {/* Our Services Section */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl  text-black font-bold">Our Services</h2>
          <p className="text-[#00000066]">
            Manage, allocate & reduce cloud spend across all cloud providers and services by using Zaspert's enterprise-grade FinOps solution
          </p>
        </div>

        {/* Boost Your Presence Section - Horizontal Layout */}
        <div className="flex items-center justify-center gap-8">
          <h2 className="text-3xl font-bold  text-black whitespace-nowrap">Boost Your <br /> Presence</h2> <Image height={10} width={10} src="/line.png" alt="" />
          <p className="text-[#00000066]">
            Increase your influence with enhanced engagement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About