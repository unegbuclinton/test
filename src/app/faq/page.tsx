import React from 'react'
import HeroSection from '../components/hero-section/HeroSection'
import Search from '../components/search/Search'
import AccordionItem from '../components/accordion/Accordion'
import { accordionData } from '../lib/json-datas'
import Category from '../components/category/Category'
import Footer from '../components/footer/Footer'

const FAQ = () => {
  return (
    <div>
      <HeroSection className='!min-h-[400px] lg:!min-h-[596px] bg-[#FBF9F2]'>
        <p className='text-base md:text-lg'>We&apos;re here to help you</p>
        <h2 className='py-4 text-[36px] md:text-[50px] lg:text-[60px] font-bold'>
          How can we assist?
        </h2>
        <Search />
      </HeroSection>

      <div className='flex flex-wrap gap-16 px-4 lg:px-16 py-20'>
        <Category />
        <div>
          {accordionData.map(({ answer, question }, index) => (
            <AccordionItem key={index} content={answer} title={question} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQ
