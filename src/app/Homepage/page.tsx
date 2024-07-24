'use client'

import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Links from '../Components/Links';
import Image from 'next/image';

export default function Homepage() {
  const [links, setLinks] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [linkURLs, setLinkURLs] = useState<string[]>([]);

  const handleAddLinkClick = () => {
    setLinks([...links, '']);
    setPlatforms([...platforms, 'option1']); // Default to 'option1'
    setLinkURLs([...linkURLs, '']); // Default empty link
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
    setPlatforms(platforms.filter((_, i) => i !== index));
    setLinkURLs(linkURLs.filter((_, i) => i !== index));
  };

  const handlePlatformChange = (index: number, platform: string) => {
    const newPlatforms = [...platforms];
    newPlatforms[index] = platform;
    setPlatforms(newPlatforms);
  };

  const handleLinkChange = (index: number, link: string) => {
    const newLinkURLs = [...linkURLs];
    newLinkURLs[index] = link;
    setLinkURLs(newLinkURLs);
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Links:", linkURLs);
    console.log("Platforms:", platforms);
  };

  return (
    <main className='bg-[#FAFAFA] mt-[24px] flex-col'>
      <Navbar/>
      <div className='bg-[#FAFAFA] mt-[24px] flex gap-x-[24px]'>
        <div className='flex bg-[white] justify-center items-center w-[560px]'>
          <div className="relative mx-auto bg-transparent border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-transparent border-b border-gray-300 dark:border-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-transparent border-l border-gray-300 dark:border-gray-800 absolute -left-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-transparent border-l border-gray-300 dark:border-gray-800 absolute -left-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-transparent border-r border-gray-300 dark:border-gray-800 absolute -right-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-transparent border border-gray-300 dark:border-gray-800 flex flex-col gap-2 py-20 px-2">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={linkURLs[index] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-12 border border-gray-300 dark:border-gray-800 rounded-[1rem] flex items-center justify-center ${
                    platform === 'option1' ? 'bg-black text-white' :
                    platform === 'option2' ? 'bg-blue-500 text-white' :
                    platform === 'option3' ? 'bg-black text-white' :
                    platform === 'option4' ? 'bg-red-500 text-white' : 'bg-transparent'
                  }`}
                >
                  {platform === 'option1' && 'Github'}
                  {platform === 'option2' && 'LinkedIn'}
                  {platform === 'option3' && 'Twitter'}
                  {platform === 'option4' && 'Youtube'}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='bg-[white] pt-[40px] pl-[40px] pr-[40px]'>
          <p className="font-[700] text-[32px] text-[#333333] leading-[48px] items-center">
            Customize your links
          </p>
          <p className="font-[400] text-[16px] text-[#737373] leading-[24px] items-center mb-[40px]">
            Add/edit/remove links below and then share all your profiles with the world!
          </p>
          <button 
            className='border-[1px] rounded-[8px] w-[100%] pt-[11px] pb-[11px] pr-[27px] pl-[27px]'
            onClick={handleAddLinkClick}
          >
            <p className="font-[600] text-[16px] text-[#633CFF] leading-[24px] items-center">+ Add new link</p>
          </button>
          {links.length === 0 && (
            <div className='mt-[24px] flex flex-col items-center justify-center bg-[#FAFAFA] rounded-[12px] p-[20px]'>
              <Image src="/started.svg" alt="started" width={249.53} height={160}/>
              <p className='mt-[40px] mb-[24px] font-[700] text-[32px] text-[#333333] leading-[48px]'>Lets get you started</p>
              <p className='font-[400] text-[16px] text-[#737373] leading-[24px] text-center'>
                Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
              </p>
            </div>
          )}
          {links.map((link, index) => (
            <Links 
              key={index} 
              index={index} 
              onRemove={handleRemoveLink} 
              onPlatformChange={(platform) => handlePlatformChange(index, platform)} 
              onLinkChange={(link) => handleLinkChange(index, link)}
            />
          ))}
          <div className='border-t-[1px] mt-[40px] mb-[40px] flex justify-end'>
            <button 
              className='opacity-25 bg-[#633CFF] pt-[11px] pb-[11px] pr-[27px] pl-[27px] rounded-[8px] mt-[24px]'
              onClick={handleSave}
            >
              <p className='text-[white] text-center font-[600] text-[16px] leading-[24px]'>Save</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

Homepage.requireAuth = true;

