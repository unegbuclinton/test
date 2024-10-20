import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Star } from '@/app/assets/icon/Star'

const ProductCard = ({
  productImg,
  details,
  name,
}: {
  productImg: StaticImageData
  details: string
  name: string
}) => {
  return (
    <div className='max-w-[306px] w-full rounded-lg shadow-shadowLight bg-white '>
      <Image
        alt='product'
        className='w-full'
        src={productImg.src}
        width={productImg.width}
        height={210}
      />
      <div className='flex flex-col h-[55%] justify-between px-6 pt-4 pb-8 '>
        <p className='mb-9'>{details}</p>
        <div>
          <p className='text-base font-bold mb-2.5'>{name}</p>
          <div className='flex gap-2.5'>
            {['1', '2', '3', '4', '5'].map((_, index) => (
              <Star key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
