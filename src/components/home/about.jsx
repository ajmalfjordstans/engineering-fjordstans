'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section id='about' className='bg-[#2E2E38] py-[30px] text-white border-b-[#B8B8B8] border-b-[1px]'>
      <div className='grid grid-cols-2 container mx-auto px-[5%] gap-10'>
        <div>
          <p className='font-[600] text-[36px] leading-[50px]'>About Us</p>
          <p className='text-[20px] mt-[40px] leading-[43px]'>Lorem ipsum dolor sit amet consectetur. Habitant mi urna sollicitudin pharetra. Velit dui montes gravida cursus cras facilisi mauris fusce nisl. Imperdiet lacus aliquam viverra dictum purus est. Egestas sed eu dignissim in. Lobortis vitae pulvinar semper aliquet porttitor a nisl. Faucibus mi sit tincidunt id duis diam sit. Lorem in vulputate egestas magnis dictum neque integer venenatis. Bibendum natoque imperdiet volutpat scelerisque. Fermentum nibh. </p>
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
        <Image src={'/images/about.png'} height={900} width={900} alt='about' className='h-[544px] w-[562px]'/>
      </div>

    </section>
  )
}
