import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/app/lib/json-datas'

const ProductReview = () => {
  return (
    <div className='max-w-[1268px] ml-auto pl-4 lg:px-0 mb-56'>
      <h3 className='text-highlighter font-bold mb-8 text-[28px] lg:text-[36px]'>
        Product Reviews
      </h3>
      <div className='flex flex-wrap justify-center gap-14 lg:flex-nowrap'>
        {products.map(({ img, text, name }, index) => (
          <ProductCard details={text} productImg={img} name={name} />
        ))}
      </div>
    </div>
  )
}

export default ProductReview
