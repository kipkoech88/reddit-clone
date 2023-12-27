import Image from 'next/image'
import React from 'react'
import space from '../../public/space.jpg'
import alien from '../../public/alien-4-svgrepo-com.svg'

function Communities() {
  return (
    <div className='container w-full bg-white p-4'>
      <div>
        <Image src={space} className='w-full h-[25px]'/>
      </div>
      <div className='flex space-x-4 items-center'>
        <Image src={alien} width={50} />
        <p>Home</p>
      </div>
      <div className='text-sm'>
        <p>Your personal Reddit frontpage. Come here to check in with your favorite communities.</p>
      </div>
      <hr/>
      <div className='flex-col space-y-3 p-1'>
        <button className='w-full rounded-full bg-blue-500 text-white text-center py-2 hover:bg-blue-400'>Create Post</button>
        <button className='w-full rounded-full text-blue-500 border border-blue-500 py-2 hover:bg-blue-50'>Create Communities</button>
      </div>
    </div>
  )
}

export default Communities
