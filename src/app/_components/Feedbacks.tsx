'use client'

import { FC } from 'react'
import { Sora } from 'next/font/google'
import Image from 'next/image'

const sora = Sora({ 
  subsets: ["latin"],
  weight: ['400', '700']
});

const Feedbacks: FC = () => {
  return (
    <div className={`w-full py-10 md:py-20 ${sora.className}`}>
      <div className="w-[95%] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6 md:mb-12">What Others Said About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white p-6 md:p-8 md:relative md:left-10 border-2 border-black rounded-[50px] hover:translate-y-[-8px] transition-all">
            
            <p className="text-black leading-relaxed">
            "The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how 
            </p>
            <div className="ml-2 md:ml-4 border-2 flex border-black mt-8 md:mt-16 rounded-full">
                <div className='p-2'>
              <img src="/avatar.avif" alt="Client" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
              </div>
              <div className='py-2 md:py-4'>
                <h3 className="font-bold text-xs md:text-sm text-black">Mike Thompson</h3>
                <p className="text-xs text-black">DevOps Manager, ScaleUp</p>
                </div>
              </div>
          </div>

          {/* Card 2 - centered in mobile */}
          <div className="bg-white p-6  md:p-8 lg:relative lg:left-4
           mx-auto md:mx-0 border-2 card-2  border-black hover:translate-y-[-8px] transition-all">
            
            <p className="text-black p-4  leading-relaxed">
            "The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how 
            </p>
            <div className="ml-2 md:ml-4 border-2 m-2 flex bg-white border-black mt-8 md:mt-16 rounded-full">
                <div className='p-2 '>
              <img src="/avatar.avif" alt="Client" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
              </div>
              <div className='py-2 md:py-6'>
                <h3 className="font-bold text-xs md:text-sm text-black">Mike Thompson</h3>
                <p className="text-xs text-black">DevOps Manager, ScaleUp</p>
                </div>
              </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 md:p-8 border-2 border-black rounded-[50px] hover:translate-y-[-8px] transition-all">
            
            <p className="text-black leading-relaxed">
            "The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how 
            </p>
            
              <div className="ml-2 md:ml-4 border-2 flex border-black mt-8 md:mt-16 rounded-full">
                <div className='p-2'>
              <img src="/avatar.avif" alt="Client" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
              </div>
              <div className='py-2 md:py-4'>
                <h3 className="font-bold text-xs md:text-sm text-black">Mike Thompson</h3>
                <p className="text-xs text-black">DevOps Manager, ScaleUp</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedbacks