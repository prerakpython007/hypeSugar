"use client";

import { FC } from "react";
import { Sora } from "next/font/google";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer: FC = () => {
  return (
    <footer className={`w-full py-8 bg-white mb-6 lg:rounded-b-[100px] rounded-b-4xl lg:py-20 ${sora.className}`} >
      <div className="rounded-b-4xl">
        <Image
          src="/people.png"
          alt="2"
          className="relative left-[940px] hidden lg:block"
          height={578}
          width={578}
        />

        <div className="w-[95%] mx-auto bg-[#feeb34] border-2 border-black rounded-[30px] lg:rounded-[50px] p-4 lg:p-12">
          <Image
            src="/star-black.png"
            className="relative left-[1232px] top-[14px] hidden md:block"
            height={50}
            width={50}
            alt="star black"
          />
          <Image
            src="/star-white.png"
            className="absolute left-[250px] mt-[-50px] hidden md:block"
            width={100}
            height={100}
            alt="star white"
          />
          <Image
            src="/cloud.png"
            width={200}
            height={200}
            className="relative top-[-60px] left-[1232px] hidden lg:block"
            alt="cloud"
          />
          <Image
            src="/footer-cloud-2.png"
            alt="logo"
            className="relative left-10 top-[144px] hidden lg:block"
            height={200}
            width={200}
          />

          <div className="text-center w-full lg:w-[80%] m-auto mt-0 lg:mt-[-160px] mb-2" id="footer">
            <h2 className="text-3xl lg:text-5xl font-bold text-black">
              Start Your Cost Reduction Trial Now!
            </h2>
            <p className="text-black text-sm lg:text-base mt-2">
              Pick a time with our FinOps specialist to start reducing spend
            </p>
          </div>
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/star-black.png"
              className="hidden lg:block absolute right-[1000px]"
              height={50}
              width={50}
              alt="starblack"
            />
            <Image src="/here-arrow.png" height={20} width={20} alt="arrow" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-10 lg:mb-20 max-w-2xl mx-auto px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:flex-1 px-6 py-3 rounded-full bg-white text-black focus:outline-none"
            />
            <button className="w-full lg:w-auto card-2 font-bold text-black">
              Request a Demo
            </button>
          </div>
          <Image
            src="/star-white.png"
            className="absolute right-[200px] mt-[-70px] hidden lg:block"
            width={100}
            height={100}
            alt="starwhite"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-[95%] m-auto p-4">
          <div className="w-full lg:w-[30%] mt-7">
            <div className="w-full lg:w-[70%] my-3">
              <img src="/full-logo.png" alt="" className="w-full max-w-[200px]" />
            </div>
            <div className="text-[#000000] text-sm mb-6">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ut <br className="hidden lg:block" /> fames nunc
                adipiscing et risus elit.
              </p>
            </div>
            <div className="flex space-x-3 mt-5">
              <button className="border-2 border-black p-4 rounded-full">
                <img src="/linkedin.png" alt="" className="w-5 h-5" />
              </button>
              <button className="border-2 border-black p-4 rounded-full">
                <img src="/facebook.png" alt="" className="w-5 h-5" />
              </button>
              <button className="border-2 border-black p-4 rounded-full">
                <img src="/twitter.png" alt="" className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:space-x-9 lg:justify-end lg:mt-14 gap-y-6  w-full lg:w-[70%] py-8 mt-7">
            <div>
              <Link href="/terms" className="text-[#00000099] text-sm">Solution</Link>
            </div>
            <div>
              <Link href="/terms" className="text-[#00000099] text-sm">Integrations</Link>
            </div>
            <div>
              <Link href="/terms" className="text-[#00000099] text-sm">Pricing</Link>
            </div>
            <div>
              <Link href="/terms" className="text-[#00000099] text-sm">Customer Services</Link>
            </div>
            <div>
              <Link href="/terms" className="text-[#00000099] text-sm">Resources</Link>
            </div>
            <div>
              <Link href="/terms" className="text-[#00000099] text-sm">Company</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
