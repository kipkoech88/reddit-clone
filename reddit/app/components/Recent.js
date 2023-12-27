import Image from 'next/image'
import React from 'react'
import recent from '../../public/blog-template-with-four-areas-svgrepo-com.svg'

function Recent() {
    const char1 = '['
    const char2 = ']'
  return (
    <div className='container flex-col space-y-2 w-1/5 text-xs bg-white p-4'>
      <h3 className='font-bold'>Recent posts</h3>
      <div className='flex space-x-1'>
        <div>
            <Image src={recent} alt='recent posts' width={70}/>
        </div>
        <div>
            <h2>{char1}Hiring{char2} $15/HR - Looking for experienced VA to complete</h2>
            <ul className='flex space-x-2 text-gray-500'>
                <li className='text-[10px]'>19 points</li>
                <li className='text-[10px]'>21 comments</li>
                <li className='text-[10px]'>10 hours</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Recent
