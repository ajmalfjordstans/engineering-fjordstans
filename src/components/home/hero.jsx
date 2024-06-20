'use client'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className='h-[100vh] w-full bg-hero bg-no-repeat bg-cover bg-center'>
      <div className='container mx-auto px-[5%] h-full flex justify-center items-center'>
        <div className='flex flex-col items-center gap-6 text-white'>
          <p className='font-[600] text-[60px] leading-[110px] capitalize'>Digitalize your personal life</p>
          <p>Innovative One-Stop Business Solutions</p>
          <Link href={'/contact'}>
            <Button
              className='rounded-[4px]'
              style={{
                background: 'linear-gradient(97.32deg, #FC575E 25.55%, rgba(247, 180, 44, 0) 116.73%)'
              }}
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
