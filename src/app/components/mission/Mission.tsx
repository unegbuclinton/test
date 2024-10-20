import Image from 'next/image'
import React from 'react'
import missionImg from '@/app/assets/img/mission.png'
import { missionData } from '@/app/lib/json-datas'

const Mission = () => {
  return (
    <div className='flex flex-wrap items-center justify-between max-w-[1268px] mb-40 mx-auto lg:mx-0 lg:ml-auto px-4 lg:px-0'>
      <div className='w-full lg:w-1/2'>
        <h3 className='font-extrabold text-[28px] lg:text-[36px] mb-5 lg:mb-7 text-text-color'>
          Our Mission
        </h3>
        <p className='text-border-color/60 max-w-[430px] text-sm lg:text-base'>
          We started Sleepstiq with 1 simple goal: to be your best friend at
          bedtime. We, just like you, deal with stress, unease, and trouble
          sleeping from a number of silly things like school, work, screens,
          numbers, and people. That's why we created products that aim to -
        </p>

        <ul className='mt-6 lg:mt-10 font-medium'>
          {missionData.map((text, index) => (
            <li
              className='text-border-color/60 text-sm lg:text-base'
              key={index}
            >
              ✓ {text}
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center'>
        <Image
          alt='mission-img'
          src={missionImg.src}
          width={missionImg.width}
          height={missionImg.height}
          className='w-full max-w-[400px] lg:max-w-none'
        />
      </div>
    </div>
  )
}

export default Mission
