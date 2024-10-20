import React from 'react'
import HeroSection from '../components/hero-section/HeroSection'
import heroImg from '@/app/assets/img/shop-img.png'
import product from '@/app/assets/img/Image-2.png'
import Image from 'next/image'
import Button from '../components/button/Button'
import TestimonialCard from '../components/testimonies/TestimonialCard'
import { testimoniesData } from '../lib/json-datas'
import Footer from '../components/footer/Footer'

const Shop = () => {
  return (
    <div>
      <HeroSection
        className='!min-h-[400px] lg:!min-h-[596px]'
        heroImg={heroImg}
      >
        <p className='text-base md:text-lg'>We&apos;re here to help you</p>
        <h2 className='py-2 md:py-4 text-[36px] md:text-[50px] lg:text-[60px] font-bold'>
          Relax & Rest
        </h2>
      </HeroSection>

      <div className='flex flex-wrap justify-center px-4 lg:justify-between items-center max-w-[1101px] mx-auto mt-16 mb-32'>
        <Image
          alt='product-img'
          className='w-[70%] lg:w-full'
          src={product.src}
          width={product.width}
          height={product.height}
        />
        <div className='max-w-[421px] mt-[100px]'>
          <h3 className='text-[36px] text-text-color font-bold'>
            About Product
          </h3>
          <p className='text-border-color/60 pt-7 pb-3.5'>
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <p className='italic text-[#4D533C] mb-5'>
            😊 Promotes calm and relaxation. <br /> 💤 Inhalation allows for a
            rapid effect. <br /> ✅ 100% drug-free, plant-based ingredients.{' '}
            <br />
            ‍⚕️ 3rd-party lab tested.
          </p>

          <div className='mb-8'>
            <div className='flex gap-12 items-center text-base'>
              <p className='max-w-[63px] w-full'>Price</p>
              <p>Unit</p>
            </div>

            <div className='flex gap-12 items-center text-base mt-3'>
              <p className='font-semibold max-w-[63px]'>USD 50</p>
              <input
                type='number'
                min={0}
                value={50}
                className='outline-none border border-black rounded-md max-w-[63px] pl-4 py-1'
              />
            </div>
          </div>
          <Button>Buy</Button>
        </div>
      </div>

      <div className='max-w-[1109px] mx-auto border border-border-color/10 my-16'></div>

      <div className='flex flex-col lg:flex-row gap-7 justify-end px-4 mb-32'>
        {testimoniesData.map(({ name, testimony }, index) => (
          <TestimonialCard key={index} name={name} testimony={testimony} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Shop
