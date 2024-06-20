'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WorkCard({ data }) {
  return (
    <div className='w-full h-[460px] group relative'>
      <Image src={data.image} height={800} width={400} className='h-[460px] object-cover' alt='work' />
      <div className='absolute top-0 left-0 inset-0 bg-[#2E2E38] bg-opacity-80 hidden group-hover:block h-[460px] text-white px-[20px] py-[50px]'>
        <div className='flex flex-col items-center'>
          <p className='font-[700] text-[36px] leading-[50px] '>{data.title}</p>
          <p className='text-[18px] mt-[18px] leading-[34px] text-left'>{data.description}</p>
          <Link href={'/'}>
            <Button
              className='rounded-[4px] mt-[34px]'
              style={{
                background: 'linear-gradient(97.32deg, #FC575E 25.55%, rgba(247, 180, 44, 0) 116.73%)'
              }}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
