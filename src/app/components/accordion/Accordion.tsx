'use client'
import { useState } from 'react'

interface AccordionItemProps {
  title: string
  content: string
}

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='max-w-[913px] border-y border-[#414245] py-5'>
      <div>
        <p
          onClick={() => setOpen((prev) => !prev)}
          className={`cursor-pointer text-text-color text-lg ${
            open ? 'font-bold' : 'font-normal'
          }`}
        >
          {title}
        </p>

        <div
          className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
            open ? 'max-h-[400px]' : 'max-h-0'
          }`}
        >
          <p className='pt-4 pb-2 text-base text-black'>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
