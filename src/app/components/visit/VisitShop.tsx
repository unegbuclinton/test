import React from 'react'
import Button from '../button/Button'

const VisitShop = () => {
  return (
    <div className='px-4 lg:px-0'>
      <div className='max-w-[915px] mx-auto text-center mb-20 lg:mb-40'>
        <h3 className='text-[28px] lg:text-[36px] text-text-color font-bold leading-[1.3]'>
          Visit Our Shop
        </h3>
        <p className='py-6 lg:py-8 text-border-color/60 text-sm lg:text-base'>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button>Visit Shop</Button>
      </div>
      <div className='max-w-[1109px] mx-auto border border-border-color/10 mb-12 lg:mb-24'></div>
    </div>
  )
}

export default VisitShop
