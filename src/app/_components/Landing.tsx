'use client'

import { FC } from 'react'
import { Montserrat, Sora } from 'next/font/google'
import Image from 'next/image';

const sora = Sora({ 
  subsets: ["latin"],
  weight: ['400', '700']
});

const montserrat = Montserrat({ subsets: ['latin'] })

const Landing: FC = () => {
  return (
    <div className={`flex flex-col items-center mb-14 bg-white justify-center px-4 ${sora.className}`}>
      <Image src="/cloud.png" className='relative md:left-[674px] top-[50px] w-[11%] hidden md:block' alt="" height={50} width={50} />
      <h1 className="text-3xl md:text-6xl font-bold mb-10 mt-7 text-center text-black tracking-tight px-4">
        Unlock Your Potential with <br className="hidden md:block" /> Our Expertise
      </h1>
      <p className="mt-4 text-center text-[#00000066] mb-10 text-base md:text-lg px-4">
        Optimize, manage, and cut costs across all cloud platforms and services <br className="hidden md:block" /> with our enterprise-level Tech solution.
      </p>
      <div className='mb-10'>
        <button className='cartoon-button relative right-4  font-bold text-black'>Get Started</button>
      </div>
      <div className='flex items-center justify-center w-full px-4'>
        <img src="/landing-image.png" className='w-full md:w-[50%]' alt="" />
      </div>
    </div>
  )
}

export default Landing
