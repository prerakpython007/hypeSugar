'use client'

import Link from 'next/link'
import { FC } from 'react'
import { Montserrat } from 'next/font/google'
import { Button } from '../../../components/ui/button'

const montserrat = Montserrat({ subsets: ['latin'] })

const Nav: FC = () => {
  return (
    <nav className={`w-full h-16 bg-white  ${montserrat.className}`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center w-[90%] mx-auto justify-between h-full">
          {/* Logo */}
          

          {/* Navigation Links */}
          <div className="flex items-center  justify-center flex-1  text-[#9f9e9e] space-x-15">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl flex  font-bold">
              <img src="/brand-logo.png" className='size-10' alt="" /> <h1 className='text-black py-2' >HypeSugar</h1>
            </Link>
          </div>
            <Link href="/" className="">
            About
            </Link>
            <Link href="/about" className="">
            Services
            </Link>
            <Link href="/services" className="">
            Testimonials
            </Link>
            <Link href="/contact" className="">
              Contact Us
            </Link>
            
            <button className='cartoon-button font-bold text-black'>Request a demo</button>
          </div>

         
        </div>
      </div>
    </nav>
  )
}

export default Nav
