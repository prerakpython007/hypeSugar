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
    <div className={`w-full py-20 ${sora.className}`}>
      <div className="w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-12">What Others Said About Us</h2>
        <div className="grid grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-white p-8 relative left-10  border-2 border-black rounded-[50px] hover:translate-y-[-8px] transition-all">
            
            <p className="text-black leading-relaxed">
            "The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how 
            </p>
            <div className="ml-4 border-2 flex border-black mt-16 rounded-full">
                <div className='p-2'>
              <img src="/avatar.avif" alt="Client" className="w-12 h-12  rounded-full" />
              </div>
              <div className='py-4'>
                <h3 className="font-bold text-sm text-black">Mike Thompson</h3>
                <p className="text-xs text-black">DevOps Manager, ScaleUp</p>
                </div>
              </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white relativ p-8  border-2 card-2 border-black  hover:translate-y-[-8px] transition-all">
            
            <p className="text-black pt-5 leading-relaxed">
            "The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how 
            </p>
            <div className="ml-4 border-2 flex border-black mt-16 rounded-full">
                <div className='p-2'>
              <img src="/avatar.avif" alt="Client" className="w-12 h-12  rounded-full" />
              </div>
              <div className='py-4'>
                <h3 className="font-bold text-sm text-black">Mike Thompson</h3>
                <p className="text-xs text-black">DevOps Manager, ScaleUp</p>
                </div>
              </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 border-2 border-black rounded-[50px] hover:translate-y-[-8px] transition-all">
            
            <p className="text-black leading-relaxed">
            "The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how we manage our cloud infrastructure. Highly recommended!""The platform has completely transformed how 
            </p>
            
              <div className="ml-4 border-2 flex border-black mt-16 rounded-full">
                <div className='p-2'>
              <img src="/avatar.avif" alt="Client" className="w-12 h-12  rounded-full" />
              </div>
              <div className='py-4'>
                <h3 className="font-bold text-sm text-black">Mike Thompson</h3>
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
