'use client'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useState } from 'react'
import ContactForm from '../form/contact-form'

export default function Contact() {
  const [mail, setMail] = useState('')
  return (
    <section id='contact' className='bg-[#EAEAF2] py-[40px]'>
      <div className='container mx-auto px-[5%] flex flex-col items-center'>
        <p className='font-[600] text-[36px] leading-[49px]'>Subscribe to Us</p>
        <div className='w-full max-w-[693px] h-[61px] rounded-[4px] overflow-hidden bg-white flex justify-between mt-[50px]'>
          <input type="text" className='outline-none bg-white p-[15px] w-full' onChange={(e) => setMail(e.target.value)} />
          <Button
            className='rounded-[4px] h-full w-[182px]'
            style={{
              background: 'linear-gradient(97.32deg, #FC575E 25.55%, rgba(247, 180, 44, 0) 116.73%)'
            }}
            onClick={() => { alert(mail) }}
          >
            Subscribe
          </Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-[70px] gap-10'>
          <div>
            <p className='font-[800] text-[20px] leading-[30px] mt-[50px]'>ADDRESS</p>
            <p className='text-[16px] leading-[26px] font-[300] mt-[20px]'>UNIT 4
              Business Development Centre
              Main Avenue
              Treforest Industrial Estate
              Pontypridd, Wales
              CF37 5UR</p>
            <p className='font-[800] text-[20px] leading-[30px] mt-[50px]'>PHONE</p>
            <div className='mt-[20px]'>
              <Link href={'tel:+6281273134321'}>
                <div className='flex gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#1F3F68" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className='text-[16px] leading-[26px] font-[300]'>+62-812-7313-4321</p>
                </div>
              </Link>
              <Link href={'tel:+6281273134321'}>
                <div className='flex gap-2 items-center mt-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#1F3F68" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className='text-[16px] leading-[26px] font-[300]'>+62-817-000-1234</p>
                </div>
              </Link>
            </div>
            <p className='font-[800] text-[20px] leading-[30px] mt-[50px]'>ONLINE SERVICE</p>
            <div className='mt-[20px]'>
              <Link href={'tel:+6281273134321'}>
                <div className='flex gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <p className='text-[16px] leading-[26px] font-[300]'>Fjordstans Studio</p>
                </div>
              </Link>
              <Link href={'mailto:hello@fjordstans.co.uk'}>
                <div className='flex gap-2 items-center mt-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <p className='text-[16px] leading-[26px] font-[300]'>hello@fjordstans.co.uk</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-[800] text-[20px] leading-[30px] mb-[40px]'>SEND US MESSAGE</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
