'use client'
import { Button } from '@material-tailwind/react'
import { stringify } from 'postcss'
import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  return (
    <div className='bg-white rounded-[10px] w-full h-[588px] p-[50px]'>
      <form action="" className='flex flex-col gap-3'>
        <div>
          <label htmlFor="name">Full Name*</label>
          <input type="text" className='w-full p-[15px] border-[1px] border-[#356EAD] outline-none rounded-[10px] border-opacity-40 mt-[8px]' required
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label htmlFor="name">Email*</label>
          <input type="text" className='w-full p-[15px] border-[1px] border-[#356EAD] outline-none rounded-[10px] border-opacity-40 mt-[8px]' required
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label htmlFor="name">Message*</label>
          <textarea type="text" className='w-full p-[15px] border-[1px] border-[#356EAD] outline-none rounded-[10px] border-opacity-40 mt-[8px] min-h-[100px]' required
            onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
      </form>
      <Button
        className='rounded-[4px] h-[72px] w-full mt-[40px]'
        style={{
          background: 'linear-gradient(97.32deg, #FC575E 25.55%, rgba(247, 180, 44, 0) 116.73%)'
        }}
        onClick={() => { alert(form.name) }}
      >
        SUBMIT
      </Button>

    </div>
  )
}
