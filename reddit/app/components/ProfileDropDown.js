import React, { forwardRef } from 'react'
import profile from '../../public/profile-circle-svgrepo-com.svg'
import Image from 'next/image'
import eyes from '../../public/eye-closed-svgrepo-com.svg'

const ProfileDropDown = forwardRef((props, ref)=> {
  return (
    <div ref={ref} className='w-[250px] min-h-64 ml-[1039px] absolute mt-[80px] bg-white overflow-y-auto max-h-[500px]'>
        <div className='m-2 flex items-center space-x-1'> 
          <Image src={profile} className='w-5'/>
          <p className='text-xs text-gray-400'>My Stuff</p>
        </div>
        <div className='flex-col  p-2'>
          <button className='w-full hover:bg-gray-100 m-1 h-8 text-start'>
            Online status
          </button>
          <button className='w-full hover:bg-gray-100 m-1 h-8 text-start'>
            Reddit Recap
          </button>
          <button className='w-full hover:bg-gray-100 m-1 h-8 text-start'>Profile</button>
          <button className='w-full hover:bg-gray-100 m-1 h-8 text-start'>Create Avatar</button>
          <button className='w-full hover:bg-gray-100 m-1 h-8 text-start'>User Settings</button>
        </div>
        <hr className='border m-2'/>
        <div>
          <div className='flex space-x-1 items-center m-2'>
            <Image src={eyes} className='w-6'/>
            <p className='text-sm text-gray-400'>View Options</p>
          </div>
          <button className='w-full hover:bg-gray-100 h-8 p-2'>
            <div className='flex justify-between'>
              <p className='text-sm'> Dark Mode</p>
            </div>
          </button>
        </div>
        <hr className='border m-1'/>
        <div className='flex-col space-y-2 p-2'>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>Create Community</button>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>Advertize on Reddit</button>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>Premium</button>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>Explore</button>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>Help Center</button>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>More</button>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>Terms & Policies</button>
          <button className='hover:bg-gray-100 w-full h-8 m-1 text-start'>Logout</button>
        </div>
    </div>
  )
})

ProfileDropDown.displayName = 'ProfileDropDown'
export default ProfileDropDown
