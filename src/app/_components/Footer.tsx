'use client'

import { FC } from 'react'
import { Sora } from 'next/font/google'
import Image from 'next/image'

const sora = Sora({ 
  subsets: ["latin"],
  weight: ['400', '700']
});

const Footer: FC = () => {
  return (
    <footer className={`w-full py-20 ${sora.className}`}>
        <Image src='/people.png' alt='2' className='relative left-[940px] ' height={578} width={578}/>

      <div className="w-[95%] mx-auto bg-[#feeb34] border-2 border-black rounded-[50px] p-12">
        <Image src='/star-black.png' className='relative left-[1232px] top-[14px] ' height={50} width={50} alt='star black' />
        <Image src='/star-white.png' className='absolute left-[250px] mt-[-50px]' width={100} height={100} alt='star white' />
        <Image src='/cloud.png' width={200} height={200} className='relative top-[-60px] left-[1232px] ' alt='cloud'/>
        <Image src='/footer-cloud-2.png' alt='logo' className=' relative left-10 top-[137px]' height={200} width={200}/>
        
        <div className="  text-center w-[80%] m-auto mt-[-160px]  mb-2 ">
          <h2 className="text-5xl font-bold   text-black">
            Start Your Cost Reduction Trial Now!
          </h2>
          <p className="text-black">
            Pick a time with our FinOps specialist to start reducing spend
          </p>

        </div>
        <div className='flex items-center justify-center mb-2'>
            <Image src='/star-black.png' className='absolute right-[1000px]' height={50} width={50} alt='starblack'/>
        <Image src='/here-arrow.png' height={20} width={20} alt='arrow'/>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-20 max-w-2xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6  py-3 rounded-full  bg-white text-black focus:outline-none"
          />
          <button className="card-2 font-bold  text-black">
            Request a Demo
          </button>
          
        </div>
        <Image src='/star-white.png' className='absolute right-[200px] mt-[-70px]' width={100} height={100} alt='starwhite'/>
      </div>
     </footer>
  )
}

export default Footer
