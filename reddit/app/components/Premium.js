import React from 'react'
import premium from '../../public/shield-svgrepo-com.svg'
import Image from 'next/image'

function Premium() {
  return (
    <div className='container w-full text-xs bg-white p-4'>
      <div className='flex space-x-2 items-center'>
        <div>
            <Image src={premium} width={50} className='pb-2'/>
        </div>
        <div>
            <h3 className='font-bold'>Reddit Premium</h3>
            <p>The best Reddit experience</p>
        </div>
      </div>
      <button className='rounded full w-full py-2 text-center text-white bg-orange-500'>Try now</button>
    </div>
  )
}

export default Premium
