import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='bg-secondary-color text-sm text-white font-semibold py-4 max-w-[225px] w-full rounded-md'>
      {children}
    </button>
  )
}

export default Button
