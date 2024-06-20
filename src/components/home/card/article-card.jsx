'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ArticleCard({ data }) {
  return (
    <Link href={data.link}>
      <div className='w-full'>
        <Image src={data.image} height={600} width={1200} alt='article' className='w-full h-[235px] object-cover' />
        <p className='font-[700] text-[18px] leading-[32px] underline mt-[20px]'>{data.title}</p>
        <p className='text-[18px] opacity-70'>{data.date}</p>
      </div>
    </Link>
  )
}
