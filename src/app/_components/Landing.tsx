'use client'

import { FC } from 'react'
import { Montserrat, Sora } from 'next/font/google'

const sora = Sora({ 
  subsets: ["latin"],
  weight: ['400', '700']
});

const montserrat = Montserrat({ subsets: ['latin'] })

const Landing: FC = () => {
  return (
    <div className={` flex  flex-col items-center bg-white justify-center ${sora.className}`}>
        <img src="/cloud.png" className='absolute left-[614px] top-[50px] w-[11%]' alt="" />
      <h1 className="text-6xl font-bold text-center text-black tracking-tight">
      Unlock Your Potential with <br /> Our Expertise
      </h1>
      <p className="mt-4 text-center text-[#00000066] mb-5 text-lg">
        Optimize, manage, and cut costs across all cloud platforms and services <br />  with our enterprise-level Tech solution.
      </p>
      <div className='mb-6'>
        <button className='cartoon-button font-bold text-black'>Get Started</button>
      </div>
      <div className='flex items-center justify-center w-full'>
        <img src="/landing-image.png" className='w-[50%]' alt="" />
      </div>
    </div>
  )
}

export default Landing
