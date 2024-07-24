import React from 'react'
import Image from 'next/image'

export default function links() {
  return (
    <div className='mt-[24px] bg-[#FAFAFA] rounded-[12px] p-[20px] '>
         <div className='flex justify-between'>
      <div className='flex gap-x-[8px]'>
        <Image src="Framelink.svg" alt='framelink' width={12} height={6}/>
        <p className='text-[#737373] font-[700px] text-[16px] leading-[24px]'>Link #1</p>
      </div>
      <div  className='text-[#737373] font-[400px] text-[16px] leading-[24px]'>
        <button>Remove</button>
      </div>
    </div>
    <form className='flex flex-col relative'>
        <label  className='text-[#333333] font-[400px] text-[12px] leading-[18px] mt-[12px] pb-[4px]'>Platform</label>
          <select  className='pt-[12px] pb-[12px] pl-[16px] pr-[16px] bg-[#FFFFFF] border-[1px] rounded-[8px]'>
              <option value="option1" data-icon="fas fa-car">Car Option</option>
              <option value="option2" data-icon="fas fa-bicycle">Bicycle Option</option>
              <option value="option3" data-icon="fas fa-motorcycle">Motorcycle Option</option>
        </select>
        <img/>
        
        <label className='text-[#333333] font-[400px] text-[12px] leading-[18px] mt-[12px] pb-[4px]'>Link</label>
        <input
         className='pt-[12px] pb-[12px] pl-[16px] pr-[16px] bg-[#FFFFFF] border-[1px] rounded-[8px]'
         type='text' placeholder='e.g. https://www.github.com/johnappleseed'/>
        <Image 
        className='absolute top-[130px] pl-[17.75]'
        src='ph-link.svg' alt='link' width={16} height={16}/>
        
    </form> 

    </div>
   
  )
}
