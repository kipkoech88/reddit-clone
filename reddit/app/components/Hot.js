import React from 'react'
import hot from '../../public/hot-svgrepo-com.svg'
import Image from 'next/image'
import best from '../../public/rocket-svgrepo-com.svg'
import newss from '../../public/new-5-svgrepo-com.svg'
import top from '../../public/analytics-chart-growth-svgrepo-com.svg'
import menu from '../../public/menu-dots-svgrepo-com.svg'
import card from '../../public/card-svgrepo-com.svg'
import down from '../../public/down-arrow-svgrepo-com.svg'

function Hot() {
  return (
    <div className='container bg-white h-14 mt-4 items-center flex'>
      <div className='w-2/3  h-12 flex justify-between items-center px-2 space-x-1'>
        <div className='py-1'>
          <Image src={best} className='w-12'/>
        </div>
        <div className='py-1'>
          <Image src={hot} className='w-12'/>
        </div>
        <div className='py-1'>
          <Image src={newss} className='w-12'/>
        </div>
        <div className='py-1'>
          <Image src={top} className='w-12'/>
        </div>
        <div className='py-1'>
          <Image src={menu} className='w-11'/>
        </div>
      </div>
      <div className='w-1/3  h-12 flex justify-between items-center'>
        <div className='w-2/3'></div>
        <div className='w-1/2 flex space-x-2'>
        <Image src={card} className='w-12'/>
        <Image src={down} className='w-5'/>
        </div>
      </div>
    </div>
  )
}

export default Hot
