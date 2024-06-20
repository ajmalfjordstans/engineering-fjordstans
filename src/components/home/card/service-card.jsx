import React from 'react'

export default function ServiceCard() {
  return (
    <div className='group transition-all duration-300'>
      <div className='h-[90px] w-[90px] rounded-full border-[1px] border-[#B8B8B8] bg-[#2E2E38] group-hover:bg-[#FFFFFF] translate-y-[50%] mx-auto flex justify-center items-center'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="54"
          height="55"
          fill="none"
          viewBox="0 0 54 55"
        >
          <rect
            width="53.325"
            height="53.325"
            x="0.3"
            y="0.948"
            fill="url(#pattern0_178_176)"
            rx="12"
          ></rect>
          <defs>
            <pattern
              id="pattern0_178_176"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use transform="scale(.02)" xlinkHref="#image0_178_176"></use>
            </pattern>
            <image
              id="image0_178_176"
              width="50"
              height="50"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nO2YsW4TQRCGt4qEqCjSJBSIggJKlFeIhIByZ4ztGeN00EKJaKBGvEGUOg0htKEhIGhICiTEIwQJpAASwjti0ZzXIXbO3Mkx2bWyn3SydLs3O79n9mZujclkMplMZsr8avAVAdpwSN8E2adwOfUFaMPb1uXaIhzwfmzHZZwg4P1aYlR18RDwM99YWTCJ4BsrC4d9q3xgkE4piRjgLS8OomKqGITQJIrU9S8LOQ0RccjXNK8dtG/OuBBaC3bvzLYQ4E9qs2c7V5MV4tvtswL8VpC2S8ebzXMO+bcD+umtnRtei7b1WbURXYgDXg1F6n3pOPJysPnm6Fq0E+rCalQhYvlWcOTHuLZBkB7259CT0TGPdOmgn7PUiSKkrhMC9KJvk3DSP+O/CfHWnhHk3Tpp4YD3ipYHOxeq05M+VO2XKEJ8s3sxtOCf/2UvmpC6qTVIGwHeLBuPnlp1nXBAT4OQB6aEJDb7kbRA2jEj6Cu3n1q8PDoWxmvts5MriEjvBPnV0H1r57QIajHUoli+VkIFcRw9uL0U6sdHM0XkpIUI0N3wxlo7rq2oQhzSDd3I+mumiOQvxMSQUxcRB/y16I0sL5rE8K3W+fAC+VI5WYDWg+rnKYnxeqYFvBl6svXSSQL8+rhHmfEu+vtl6pC/x3dosssdPnUUpJchZPfMjCDI9/s+89bBTS1aoZ3oqRhvu/MmUbztzqsIh+wKnxud60MTHPDjmUsrpEelaovIAG+lvGec+qY+jkYik8lkMhkzOX8ASGA2+mPm3qwAAAAASUVORK5CYII="
            ></image>
          </defs>
        </svg>
      </div>
      <div className='border-[1px] border-[#B8B8B8] bg-[#2E2E38] px-[15px] py-[30px] rounded-[12px] h-[278px] w-full flex flex-col items-center justify-center group-hover:bg-[#EFEFEF] group-hover:text-[black] '>
        <p className='font-[700px] text-[24px] leading-[32px]'>Web Development</p>
        <p className='text-[16px] leading-[26px] text-center mt-[17px]'>Lorem ipsum dolor sit amet consectetur. Non a ullamcorper diam urna id odio porttitor. Curabitur a sem mauris a.</p>
      </div>
    </div>
  )
}
