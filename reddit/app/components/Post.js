import React from 'react'
import up from '../../public/up-arrow-arrows-svgrepo-com.svg'
import downvote from '../../public/down-arrow-download-svgrepo-com.svg'
import Image from 'next/image'
import reddit from '../../public/reddit-svgrepo-com.svg'
import Link from 'next/link'
import share from '../../public/share-arrow-svgrepo-com.svg'
import save from '../../public/save-svgrepo-com.svg'
import comments from '../../public/comments-svgrepo-com.svg'
import menu from '../../public/menu-dots-svgrepo-com.svg'

function Post() {
  return (
    <div className='container bg-white mt-4 min-h-20'>
      <div className='flex w-full border  min-h-20'>
        <div className='w-14  flex-col items-center space-y-1 p-2'>
          <Image src={up} className='w-8 h-5'/>
          <p className='text-center'>1</p>
          <Image src={downvote} className='w-8 h-5'/>
        </div>
        <div className='w-full'>
          <div className='flex py-2 space-x-1'>
            <Image src={reddit} className='w-6'/>
            <Link href='#' className='text-xs font-bold hover:underline'>r/digitalNomad</Link>
            <div>
              <p className='text-xs text-gray-400'>Posted by <Link href='#' className='hover:underline hover:underline-offset-2'>u/Glass_clock</Link> in 3 hours</p>
            </div>
          </div>
          <div>
            <Link href='#'>
              <h3 className='font-bold text-gray-700'>Which countries have the least walkable areas and poor infrastructure in your experience?</h3>
            </Link>
          </div>
          <div className='flex h-10 mt-3'>
            <div className='w-66  flex space-x-3'>
              <div className='flex items-center'>
                <Image src={comments} className='w-8'/>
                <p className='text-xs text-gray-400'>6 comments</p>
              </div>
              <div className='flex items-center'>
                <Image src={share} className='w-8'/>
                <p className='text-xs text-gray-400'>Share</p>
              </div>
              <div className='flex items-center'>
                <Image src={save} className='w-8'/>
                <p className='text-xs text-gray-400'>Save</p>
              </div>
              <div className='items-center'>
                <Image src={menu} className='w-8'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
