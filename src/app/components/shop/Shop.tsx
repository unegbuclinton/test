import Image from 'next/image'
import React from 'react'
import item from '@/app/assets/img/Image.png'
import text from '@/app/assets/img/Text.png'
import Button from '../button/Button'
import Link from 'next/link'

const Shop = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-28 items-center mb-20 lg:mb-40 px-4'>
      <div className='relative w-full lg:w-fit h-fit'>
        <Image
          src={item.src}
          alt=''
          width={item.width}
          height={item.height}
          className='w-full lg:w-auto' // Makes the image responsive
        />
        <Image
          className='absolute -bottom-20 lg:-bottom-36 -right-16 lg:-right-52 w-[200px] lg:w-auto' // Responsive position and size for the text image
          src={text.src}
          alt=''
          width={text.width}
          height={text.height}
        />
      </div>
      <div className='max-w-full lg:max-w-[420px] text-center lg:text-left'>
        <h3 className='text-2xl lg:text-[36px] font-bold text-text-color'>
          Shop Now
        </h3>
        <p className='py-5 lg:py-7 text-border-color/60'>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Link href={'/shop'}>
          <Button>Visit Shop</Button>
        </Link>
      </div>
    </div>
  )
}

export default Shop
