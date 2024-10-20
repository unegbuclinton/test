'use client'
import React from 'react'
import google from '@/app/assets/img/google.png'
import forbe from '@/app/assets/img/forbe.png'
import bloomberg from '@/app/assets/img/bloomberg.png'
import sleep from '@/app/assets/img/sleep.png'
import influence from '@/app/assets/img/Black_Large.png'
import Image from 'next/image'

const Brand = () => {
  const imgs = [google, forbe, bloomberg, sleep, influence]
  return (
    <div className='flex flex-wrap justify-center md:justify-between lg:flex-nowrap items-center bg-white rounded-sm shadow-shadowLight -mt-8 max-w-[95%] md:max-w-[1276px] py-6 md:py-8 px-4 md:px-16 mx-auto'>
      {imgs.map((img, index) => (
        <Image
          className='mr-6 md:mr-12 mb-4 md:mb-0'
          key={index}
          alt='brand-logos'
          src={img.src}
          width={img.width}
          height={img.height}
        />
      ))}
    </div>
  )
}

export default Brand
