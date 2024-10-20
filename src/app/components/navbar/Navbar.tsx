'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/app/assets/img/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // State to toggle mobile menu
  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Shop', url: '/shop' },
    { title: 'FAQs', url: '/faq' },
  ]

  const currentPath = usePathname()

  return (
    <nav className='flex items-center justify-between px-4 md:px-8 lg:px-0 mb-10 pt-6 relative'>
      {/* Logo */}
      <Image
        alt='logo-img'
        className='mr-0 md:mr-[170px]'
        src={logo.src}
        width={92}
        height={62}
      />

      {/* Hamburger Menu for small screens */}
      <button
        className='md:hidden text-text-color focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {navLinks.map(({ title, url }, index) => (
          <Link href={url} key={index}>
            <li
              className={`text-lg text-text-color mr-8 lg:mr-16 cursor-pointer ${
                currentPath === url ? 'font-bold' : ''
              }`}
            >
              {title}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='absolute top-16 left-0 w-full bg-white md:hidden shadow-lg p-6 z-50'>
          {navLinks.map(({ title, url }, index) => (
            <Link href={url} key={index}>
              <li
                className={`text-lg text-text-color mb-4 cursor-pointer ${
                  currentPath === url ? 'font-bold' : ''
                }`}
              >
                {title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
