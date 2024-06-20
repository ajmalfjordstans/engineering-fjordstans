import React from 'react'
import ServiceCard from './card/service-card'

export default function Services() {
  return (
    <section id='services' className='bg-[#2E2E38] py-[50px] text-white'>
      <div className='container mx-auto px-[5%] flex flex-col items-center'>
        <p className='font-[600] text-[36px] leading-[49px]'>Services</p>
        <p className='text-[20px] leading-[40px] text-center max-w-[890px] mt-[20px]'>Lorem ipsum dolor sit amet consectetur. Turpis interdum tellus scelerisque tristique scelerisque. Faucibus tincidunt aliquam dis vitae dolor</p>
        <div className='grid grid-cols-3 w-full gap-[60px] mt-[70px]'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  )
}
