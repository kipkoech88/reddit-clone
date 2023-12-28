import React from 'react'
import profile from '../../public/user-profile-svgrepo-com.svg'
import Image from 'next/image'
import pic from '../../public/photo-svgrepo-com.svg'
import attach from '../../public/attachment-svgrepo-com.svg'

function CreatePost() {
  return (
    <div className='container bg-white h-14 items-center'>
      <button className='w-full'>
        <div className='flex justify-between items-center w-full'>
          <div className='w-14 h-14 items-center p-1'>
            <Image src={profile} className='w-12'/>
          </div>
          <div className='w-3/4'>
            <input type='text' placeholder='Create Post' className='w-full p-2 border border-gray-300 hover:border-blue-400 focus:outline-none'/>
          </div>
          <div className='flex items-center px-2 space-x-1'>
            <Image src={pic} className='h-8 w-8'/>
            <Image src={attach} className='h-8 w-8'/>
          </div>
        </div>
        </button>
    </div>
  )
}

export default CreatePost
