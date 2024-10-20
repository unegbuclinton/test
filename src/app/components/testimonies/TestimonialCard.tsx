import { Star } from '@/app/assets/icon/Star'
import React from 'react'

const TestimonialCard = ({
  testimony,
  name,
}: {
  testimony: string
  name: string
}) => {
  return (
    <div className='flex flex-col justify-between bg-card-bg rounded-lg w-full max-w-full lg:max-w-[315px] px-5 lg:px-7 py-5 lg:py-6'>
      <p className='text-sm lg:text-base italic font-normal mb-6'>
        {testimony}
      </p>

      <div>
        <p className='font-bold text-sm lg:text-base mb-2.5'>{name}</p>
        <div className='flex gap-2'>
          {['1', '2', '3', '4', '5'].map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
