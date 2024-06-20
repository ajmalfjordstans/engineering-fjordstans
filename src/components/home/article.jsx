'use client'
import React from 'react'
import ArticleCard from './card/article-card'
import { Button } from '@material-tailwind/react'

const articleData = [
  {
    id: 1,
    title: "What is SEO. How SEO helps business?",
    date: "20 May, 2024",
    image: "/images/article/article1.jpg",
    link: ""
  },
  {
    id: 2,
    title: "What is SEO. How SEO helps business?",
    date: "20 May, 2024",
    image: "/images/article/article2.jpg",
    link: ""
  },
  {
    id: 3,
    title: "What is SEO. How SEO helps business?",
    date: "20 May, 2024",
    image: "/images/article/article3.jpg",
    link: ""
  },
  {
    id: 4,
    title: "What is SEO. How SEO helps business?",
    date: "20 May, 2024",
    image: "/images/article/article1.jpg",
    link: ""
  },
  {
    id: 5,
    title: "What is SEO. How SEO helps business?",
    date: "20 May, 2024",
    image: "/images/article/article2.jpg",
    link: ""
  },
  {
    id: 6,
    title: "What is SEO. How SEO helps business?",
    date: "20 May, 2024",
    image: "/images/article/article3.jpg",
    link: ""
  },
]

export default function Article() {
  return (
    <section id='article' className='bg-[#2E2E38] py-[50px]'>
      <div className='container mx-auto px-[5%] text-white'>
        <p className='font-[600] text-[36px] leading-[49px]'>Our Latest News And Articles</p>
        <div className='grid grid-cols-3 gap-[30px] mt-[60px]'>
          {articleData.map((data, id) => {
            return (
              <ArticleCard data={data} key={id} />
            )
          })}
        </div>
        <div className='w-full flex justify-center py-[20px]'>
          <Button
            className='capitalize bg-transparent border-[#FA434C] border-[1px] text-[#FA434C]'
          >View All</Button>
        </div>
      </div>
    </section>
  )
}
