'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from './reddit-1.svg'
import messenger from '../public/messenger.png'
import banana from '../public/banana.png'
import advertising from '../public/advertising.png'
import plus from '../public/plus.png'
import trending from '../public/trending.png'
import notification from '../public/bell.png'
import down from '../public/down-arrow-svgrepo-com.svg'
import profile from '../public/user-profile-svgrepo-com.svg'
import Footer from './components/Footer'
import Recent from './components/Recent'
import Premium from './components/Premium'
import home from '../public/home-icon-silhouette-svgrepo-com.svg'
import Communities from './components/Communities'
import CreatePost from './components/CreatePost'
import Hot from './components/Hot'
import Post from './components/Post'
import HomeDropDown from './components/HomeDropDown'
import { useEffect, useRef, useState } from 'react'
import ProfileDropDown from './components/ProfileDropDown'

export default function Home() {
  const [isDropDown, setDropdown] = useState(false);
  const [isProfileDropDown, setIsprofileDropDown] = useState(false)

  const dropDownRef = useRef(null)

  
  
  const toggleProfileDropdown = ()=>{
    setIsprofileDropDown(!isProfileDropDown)
  }
  const toggleDropdown = ()=>{
    setDropdown(!isDropDown)
  }

  const closeDropDown = (event)=>{
    if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
      setDropdown(false);
      setIsprofileDropDown(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click', closeDropDown);

    return ()=>{
      document.removeEventListener('click', closeDropDown)
    }
  })

  return (
    <main className="flex flex-col h-screen">
       <header className='w-full px-2 py-2 bg-white'>
        <nav className='container flex w-full justify-between space-x-4 items-center'>
          <div className='flex flex w-1/3 justify-between space-x-2'>
            <div>
              <Image src={Logo} width={150} height={150}/>
            </div>
            <div className='w-2/3'>
              <button className='w-full hover:border border-gray-500 rounded-sm' onClick={toggleDropdown}>
                <div className='flex justify-between   w-full border py-2 h-10 items-center'>
                  <div className='flex space-x-4 mr-6'>
                    <Image src={home} alt='Reddit' width={20}/>
                    <div className='py-2 order-1'>Home</div>
                  </div>
                  <div>
                      <div className='py-2 px-2'>
                        <Image src={down} className='w-4'/>
                      </div>
                  </div>
                </div>
              </button>
              
            </div>
          </div>
          <div className='flex w-1/3 my-2'>
              <input type='text' className='w-full peer rounded-full py-2 px-4 border border-gray text-sm hover:border-blue-500 focus:outline-none' placeholder='Search Reddit'></input>
          </div>
          <div className='flex w-1/3 justify-between space-x-4   items-centre'>
            <div className='flex justify-between w-1/2'>
              <div>
              </div>
              <div>
                <Image src={trending} alt='trending on reddit' width={25} height={10} className='transition cursor-pointer ease-in-out duration-300 hover:bg-gray-500 h-7 w-7' />
              </div>
              <div>
                <Image src={banana} width={25} height={10} alt='messages' className='transition cursor-pointer ease-in-out duration-300 hover:bg-gray-500 h-7 w-7'/>
              </div>
              <div>
                <Image src={messenger} alt='' width={25} height={10} className='transition cursor-pointer ease-in-out duration-300 hover:bg-gray-500 h-7 w-7'/>
              </div>
              <div>
                <Image src={notification} alt='notification' width={25} height={10} className='transition cursor-pointer ease-in-out duration-300 hover:bg-gray-500 h-7 w-7'/>
              </div>
              <div>
                <Image src={plus} width={25} height={10} alt='add post' className='transition cursor-pointer ease-in-out duration-300 hover:bg-gray-500 h-7 w-7'/>
              </div>
              <div>
                <Image src={advertising} width={25} height={10} alt='advertize' className='transition cursor-pointer ease-in-out duration-300 hover:bg-gray-500 h-7 w-7'/>
              </div>
            </div>
            <div className='w-1/2 border border-gray-450 relative group'>
              <button onClick={toggleProfileDropdown}>
                <div className='flex justify-between spce-x-8 items-center'>
                  <div className='w-2/3 flex space-x-2 mr-6'>
                    <div className='w-1/3 p-1'>
                      <Image src={profile} width={70}/>
                    </div>
                    <div className='flex-col space-y-1'>
                      <h4 className='text-xs'>Academia_wing</h4>
                      <h6 className='text-xs text-gray-500 -pr-1'>1 karma</h6>
                    </div>
                  </div>
                  <div className='px-2 items-center'>
                    <Image src={down}  className='py-2 w-4'/>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {isDropDown && <HomeDropDown/>}
      {isProfileDropDown && <ProfileDropDown/>}
      <div className='mx-12 flex justify-between  m-4 overflow-y-auto space-x-3'>
          <div className='flex-none w-1/4'></div>
          <div className='flex-initial w-1/2'>
            <CreatePost/>
            <Hot/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
          <div className=' flex-initial flex w-1/4'>
            <div className='flex-1 space-y-3 overflow-y-auto no-scrollbar'>
              <Premium/>
              <Communities/>
              <Recent/>
              <Footer/>
            </div>
          </div>
          
      </div>
    </main>
  )
}
