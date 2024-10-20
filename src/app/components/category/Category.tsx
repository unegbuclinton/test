'use client'

import React, { useState } from 'react'

const Category = () => {
  const [category, setCategory] = useState('Sleepstiq Product')
  const handlecategory = (value: string) => {
    setCategory(value)
  }
  return (
    <div className='max-w-[212px]'>
      <ul>
        {['Sleepstiq Product', 'Order', 'Melantonin'].map((item, index) => (
          <li
            onClick={() => handlecategory(item)}
            className={`mb-8 text-text-color ${
              item === category ? 'font-bold' : ''
            }`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
