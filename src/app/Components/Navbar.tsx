"use client";

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const [isClick, setIsclick] = useState(false)

    const togglenavbar =():void=>{
        setIsclick(true)


    }
  return (
    <div className="navbar bg-[white] p-[16px] m-[24px]  flex  justify-between rounded-[12px]">
        <div className=" flex gap-x-[4.17px] ">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <Image src="/devlinks.svg" alt="devlinks" width={108} height={21} />
   
        </div>
        <div className="flex gap-x-[16px]">
            <Link href='/Homepage'
            className="flex pt-[11px] pb-[11px] pr-[27px] pl-[27px] gap-x-[8px]  text-[#737373]"
            onClick={togglenavbar} 
          >
              
              
                <Image src="/links.svg" alt="logo" width={20} height={20} />
                <p className="font-[600] text-[16px] text-[#737373] leading-[24px] items-center">Links</p>
            </Link>
            <Link href='./Homepage/Profile'
            className="flex pt-[11px] pb-[11px] pr-[27px] pl-[27px] gap-x-[8px]">
                <Image src="/profile-details.svg" alt="logo" width={20} height={20}/>
                <p
                className="font-[600] text-[16px] text-[#737373] leading-[24px] items-center" 
                >Profile details</p>
            </Link>
        </div>
        <div className="flex gap-[30px]">
            <Link className= "border-style border-[1px] rounded-[8px] pl-[27px] pr-[27px] pt-[11px] pb-[11px]"
            href="./Homepage/Preview">
                <p className="font-[600] text-[16px] text-[#633CFF] leading-[24px]">Preview</p>
            </Link>
        </div>
      
    </div>
  )
}