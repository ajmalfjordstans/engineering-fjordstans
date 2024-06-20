import React from 'react'
import WorkCard from './card/work-card'

const workData = [
  {
    id: 1,
    title: "TalTek",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim sem posuere ut aliquam sollicitudin libero felis. Purus eget lorem consequat interdum tincidunt ornare et.",
    image: "/images/works/work1.jpg",
    link: "/"
  },
  {
    id: 2,
    title: "TalTek",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim sem posuere ut aliquam sollicitudin libero felis. Purus eget lorem consequat interdum tincidunt ornare et.",
    image: "/images/works/work2.jpg",
    link: "/"
  },
  {
    id: 3,
    title: "TalTek",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim sem posuere ut aliquam sollicitudin libero felis. Purus eget lorem consequat interdum tincidunt ornare et.",
    image: "/images/works/work3.jpg",
    link: "/"
  },
  {
    id: 4,
    title: "TalTek",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim sem posuere ut aliquam sollicitudin libero felis. Purus eget lorem consequat interdum tincidunt ornare et.",
    image: "/images/works/work4.jpg",
    link: "/"
  },
]

export default function Works() {
  return (
    <section id='works' className='py-[60px]'>
      <div className='container mx-auto px-[5%]'>
        <p className='font-[600] text-[36px] leading-[49px]'>Our Latest Works</p>
      </div>
      <div className="grid grid-cols-4 gap-[15px] mt-[40px]">
        {workData.map((data, id) => {
          return (
            <WorkCard key={id} data={data}/>
          )
        })}
      </div>
    </section>
  )
}
