'use client'

import Link from 'next/link'
import { FC, useState, useEffect } from 'react'
import { Montserrat } from 'next/font/google'
import { Button } from '../../../components/ui/button'

const montserrat = Montserrat({ subsets: ['latin'] })

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`w-full h-16 bg-white relative ${montserrat.className}`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl flex font-bold">
              <img src="/brand-logo.png" className='size-10' alt="" /> 
              <h1 className='text-black py-2'>HypeSugar</h1>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden z-50 p-2 flex flex-col justify-center items-center w-12 h-12 relative"
          >
            <div className={`absolute w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${
              isOpen ? 'transform rotate-45 translate-y-0' : 'translate-y-[-6px]'
            }`}/>
            <div className={`absolute w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}/>
            <div className={`absolute w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${
              isOpen ? 'transform -rotate-45 translate-y-0' : 'translate-y-[6px]'
            }`}/>
          </button>

          {/* Mobile Menu */}
          <div className={`
            lg:hidden fixed inset-0 bg-white z-40 overflow-hidden px-6
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="space-y-10 text-center">
                <Link href="/" className="block text-xl font-medium text-black hover:text-gray-600">
                  About
                </Link>
                <Link href="/about" className="block text-xl font-medium text-black hover:text-gray-600">
                  Services
                </Link>
                <Link href="/services" className="block text-xl font-medium text-black hover:text-gray-600">
                  Testimonials
                </Link>
                <Link href="/contact" className="block text-xl font-medium text-black hover:text-gray-600">
                  Contact Us
                </Link>
                <button className='cartoon-button relative right-7 font-bold text-black px-8 py-3 mt-1'>
                  Request a demo
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 text-[#9f9e9e] space-x-15">
            <Link href="#about" className="">About</Link>
            <Link href="#services" className="">Services</Link>
            <Link href="#feedbacks" className="">Testimonials</Link>
            <Link href="#footer" className="">Contact Us</Link>
            <button className='cartoon-button  font-bold text-black'>
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
