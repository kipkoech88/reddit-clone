import React, { forwardRef } from 'react';
import add from '../../public/plus.png'
import Image from 'next/image';
import reddit from '../../public/reddit-svgrepo-com.svg'
import star from '../../public/star-sharp-svgrepo-com.svg'

const HomeDropDown =forwardRef((props, ref) => {
  return (
    <div ref={ref} className='w-[265px] min-h-64 ml-40 absolute mt-[80px] bg-white  shadow p-1'>
      <input type='text' className='border border-gray-300 m-2 focus:outline-none focus:border-blue-500 w-[240px] h-7 block p-1' placeholder='Filter'/>
      <p className='text-xs p-2 text-gray-400'>YOUR COMMUNITIES</p>
      <div>
        <button className='w-full hover:bg-gray-100'>
          <div className='container h-8 p-2 flex items-center space-x-1  w-[240px] m-2'>
            <Image src={add} className='w-5 h-5'/>
            <p className='text-xs'>Create Community</p>
          </div>
        </button>
        <button className='w-full hover:bg-gray-100'>
          <div className='container flex h-8 items-center justify-between space-x-1 p-2'>
            <div className='flex space-x-1 p-2'>
              <Image src={reddit} className='w-5'/>
              <p className='text-gray-400 underline text-xs'>r/announcements</p>
            </div>
            <Image src={star} className='w-5 mr-5'/>
          </div>
        </button>
      </div>
    </div>
  );
})

HomeDropDown.displayName = 'HomeDropDown'

export default HomeDropDown;
