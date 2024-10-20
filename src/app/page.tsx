import Link from 'next/link'
import Brand from './components/brands/Brand'
import Button from './components/button/Button'
import Footer from './components/footer/Footer'
import HeroSection from './components/hero-section/HeroSection'
import Mission from './components/mission/Mission'
import ProductReview from './components/product-review/ProductReview'
import Shop from './components/shop/Shop'
import Testimonies from './components/testimonies/Testimonies'
import VisitShop from './components/visit/VisitShop'
import heroImg from '@/app/assets/img/hero-img.png'

export default function Home() {
  return (
    <div>
      <HeroSection heroImg={heroImg}>
        <p className='text-base md:text-lg'>We&apos;re here to help you</p>
        <h2 className='py-2 md:py-4 text-[36px] md:text-[50px] lg:text-[60px] font-bold'>
          Relax & Rest
        </h2>
        <p className='text-base md:text-lg mb-4 md:mb-6 max-w-[95%] md:max-w-[580px]'>
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>

        <Link href={'/shop'}>
          <Button>Visit shop</Button>
        </Link>
      </HeroSection>
      <Brand />
      <Testimonies />
      <Shop />
      <Mission />
      <VisitShop />
      <ProductReview />
      <Footer />
    </div>
  )
}
