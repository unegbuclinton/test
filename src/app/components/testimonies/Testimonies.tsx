import Image from 'next/image'
import React from 'react'
import testimonies from '@/app/assets/img/ceo.png'
import TestimonialCard from './TestimonialCard'
import { testimoniesData } from '@/app/lib/json-datas'

const Testimonies = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-between items-center text-text-color mt-16 lg:mt-24 max-w-[1109px] mx-auto mb-16 lg:mb-36 px-4'>
        <div className='max-w-full lg:max-w-[475px] mt-10'>
          <p className='text-sm mb-7'>Our Amazing Story</p>
          <h3 className='font-bold text-2xl lg:text-[36px] mb-8 lg:mb-14'>
            10k+ Happy Customers
          </h3>
          <p className='text-text-color/60 mb-7'>
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>

          <p className='font-bold underline'> More know About us</p>
        </div>
        <div className='bg-card-bg shadow-cardShadow w-full lg:max-w-[474px] pt-10 lg:pt-14 pb-6 lg:pb-8 px-6 lg:px-10 mt-8 lg:mt-0'>
          <p className='mb-10 lg:mb-14 text-xl lg:text-2xl text-highlighter'>
            I’m a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq.{' '}
          </p>

          <div className='flex items-center gap-4 lg:gap-9'>
            <Image
              className='rounded-full'
              alt='headshot'
              src={testimonies.src}
              height={testimonies.height}
              width={testimonies.width}
            />
            <div>
              <p className='mb-1 lg:mb-2 font-bold text-lg lg:text-xl text-highlighter'>
                James Miller
              </p>
              <p className='text-sm lg:text-base text-[#152934]'>
                CEO, Techbias
              </p>
            </div>
          </div>
          <div className='flex justify-center gap-3 lg:gap-5 mt-4'>
            {['1', '2'].map((_, index) => (
              <span
                key={index}
                className='block w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#C4C4C4]'
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-7 justify-end px-4 overflow-auto'>
        {testimoniesData.map(({ name, testimony }, index) => (
          <TestimonialCard key={index} name={name} testimony={testimony} />
        ))}
      </div>

      <div className='max-w-[1109px] mx-auto border border-border-color/10 my-8 lg:my-16'></div>
    </div>
  )
}

export default Testimonies
