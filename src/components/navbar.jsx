import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <section className='h-[100px] w-full bg-[#1F1F25]'>
      <div className='container mx-auto px-[5%] flex justify-between items-center h-full'>
        <Image src={'/logo/engineering-logo.png'} height={700} width={1024} className='h-[59px] w-[233px]' alt='fjordstans engineering' />
        <div className='text-white flex gap-[40px] font-[500] text-[16px] leading-[21px]'>
          <Link href={'/'}>
            <p>Home</p>
          </Link>
          <Link href={'/about'}>
            <p>About Us</p>
          </Link>
          <Link href={'/services'}>
            <p>Services</p>
          </Link>
          <Link href={'/resources'}>
            <p>Resources</p>
          </Link>
          <Link href={'/contact'}>
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
