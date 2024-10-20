import React from 'react'
import Navbar from '../navbar/Navbar'
import { StaticImageData } from 'next/image'

const HeroSection = ({
  heroImg,
  children,
  className,
}: {
  heroImg?: StaticImageData
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`bg-no-repeat bg-cover bg-center min-h-[400px] md:min-h-[600px] lg:min-h-[811px] text-text-color ${className}`}
      style={{
        backgroundImage: `url(${heroImg && heroImg.src})`,
      }}
    >
      <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[1109px] mx-auto px-4 md:px-6 lg:px-0'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default HeroSection
