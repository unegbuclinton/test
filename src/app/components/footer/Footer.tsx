import React from 'react'
import logo from '@/app/assets/img/logo-light.png'
import Image from 'next/image'
import { FacebookIcon } from '@/app/assets/icon/Fb'
import { TwitterIcon } from '@/app/assets/icon/Instagram'
import { GoogleIcon } from '@/app/assets/icon/Google'
import { LinkedInIcon } from '@/app/assets/icon/LinkedIn'

const Footer = () => {
  const bitmap =
    'https://s3-alpha-sig.figma.com/img/0626/0e06/72e73caab766beb173d79d928cbacc71?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nE6sFCPacboJqGXeTpz7CrOdjCdolCTMRgFKatsZh~3dAQDijofG1YJIiaM3W8Qewg882ozzvHsm0k1YFh4Gi6odED-LzFiZV3~mi9o0QJwqFZW~adyr0YoL-2fifh8cbl-wqRbrzoIW0Y7kmHLJ57gxsBQPANpukoupErs4Yfq~sRKrw2uZF7~GCwZoNZc9ESZJN8FctBY2GbpZubvuqZQfP9UhPz57joBftA2nz1I5MYEX4FE8Q-d6vvVd-JoJ1HKaUbDEexktpxUjPIfYaRm9miXsFjIM-k4n6eSPGpVFtadkmrXH-UDwCnVZg6fU6TW1Sibq58ksQoPD1YO4LQ__'

  return (
    <footer
      style={{
        backgroundImage: `url(${bitmap})`,
      }}
      className='relative px-4 lg:px-16 pb-10 text-white bg-cover bg-center bg-no-repeat isolate overlay'
    >
      <div className='flex justify-center pt-9 mb-12'>
        <Image
          alt='logo-img'
          className='mr-0 lg:mr-[170px]'
          src={logo.src}
          width={92}
          height={62}
        />
      </div>
      <div className='flex flex-col lg:flex-row'>
        <ul className='text-[#ABABAB] mr-14 mb-6 lg:mb-0'>
          <h4 className='mb-6 font-semibold text-white'>Company</h4>
          {['About', 'Blog', 'Contact', 'Jobs'].map((link, index) => (
            <li className='list-none mb-4' key={index}>
              {link}
            </li>
          ))}
        </ul>

        <ul className='text-[#ABABAB] mr-14 mb-6 lg:mb-0'>
          <h4 className='mb-6 font-semibold text-white'>Contact</h4>
          {[
            'Phone',
            '+234 708 507 3128',
            'Address',
            '16, Ogindipe Close, Upston Close',
          ].map((link, index) => (
            <li
              className='list-none mb-4 [&:nth-child(odd)]:text-white [&:nth-child(odd)]:font-semibold'
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>

        <div className='max-w-[463px] mr-8 mb-6 lg:mb-0'>
          <h4 className='mb-6 font-semibold text-white'>CONSUMER ADVISORY</h4>
          <p className='mb-5 text-sm lg:text-base'>
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. This product should be used only as
            directed on the label. All trademarks and copyrights are property of
            their respective owners and not affiliated with nor do they endorse
            this product. Results may vary.
          </p>
          <p className='text-sm lg:text-base'>
            By using our website or product, you agree to follow our{' '}
            <a className='text-text-color' href='#'>
              terms of service
            </a>
            .
          </p>
        </div>

        <div className='hidden lg:block border border-[#5D6544] min-h-[210px] mr-14 mb-6 lg:mb-0'></div>

        <div className='max-w-[265px] mr-8'>
          <h4 className='mb-6 font-semibold text-white'>Get in Touch</h4>
          <p className='mb-5 text text-[#ABABAB]'>
            Feel free to get in touch with us via email
          </p>
          <a className='text-2xl font-bold mb-6'>hello@sleepstiq.com</a>

          <div className='flex gap-3.5 mt-6 mb-14'>
            {[
              <FacebookIcon key='facebook' />,
              <TwitterIcon key='twitter' />,
              <GoogleIcon key='google' />,
              <LinkedInIcon key='linkedin' />,
            ].map((icon, index) => (
              <span className='cursor-pointer' key={index}>
                {icon}
              </span>
            ))}
          </div>
          <p className='text-xs text-[#ABABAB]'>
            © 2020@sleepstiq. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
