import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <section id='footer' className='py-[50px] text-white'
      style={{
        background: 'linear-gradient(179.29deg, #1F1F25 35.39%, rgba(2, 4, 8, 0.948754) 99.39%)'
      }}
    >
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className='md:col-span-2'>
            <Image src={'/logo/logo-footer.png'} height={600} width={1200} alt='logo' className='w-[250px]' />
            <p className='mt-[18px]'>Fjordstans is a website template for startups and small teams. It helps to build a website in no time.</p>
          </div>
          <div>
            <p className='font-[500] text-[22px] leading-[28px]'>Quick Link</p>
            <div className='mt-[18px] font-[400] text-[14px] flex flex-col gap-2'>
              <p className=''>Home</p>
              <p className=''>About Us</p>
              <p className=''>Services</p>
              <p className=''>Contact</p>
            </div>
          </div>
          <div>
            <p className='font-[500] text-[22px] leading-[28px]'>Company</p>
            <div className='mt-[18px] font-[400] text-[14px] flex flex-col gap-2'>
              <p className=''>About</p>
              <p className=''>Foundation</p>
              <p className=''>Brand</p>
              <p className=''>Guidelines</p>
              <p>Press Kit</p>
              <p>Support</p>
            </div>
          </div>
          <div>
            <p className='font-[500] text-[22px] leading-[28px]'>Company</p>
            <div className='mt-[18px] font-[400] text-[14px] flex flex-col gap-2'>
              <p className=''>About</p>
              <p className=''>Foundation</p>
              <p className=''>Brand</p>
              <p className=''>Guidelines</p>
              <p>Press Kit</p>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-3'>
            <p>Terms</p>
            <p>Privacy</p>
            <p>License</p>
          </div>
          <div>

          </div>
        </div>
      </div>

    </section>
  )
}
