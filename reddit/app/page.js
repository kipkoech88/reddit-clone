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

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
       <header className='w-full px-2 py-2 bg-white'>
        <nav className='container flex w-full justify-between space-x-4 items-center'>
          <div className='flex flex w-1/3 justify-between space-x-2'>
            <div>
              <Image src={Logo} width={150} height={150}/>
            </div>
            <div className='w-2/3'>
              <button className='w-full hover:border border-gray-500 rounded-sm'>
              <div className='flex justify-between   w-full border py-2 h-10 items-center'>
              <div className='flex space-x-4 mr-6'>
                <Image src={home} alt='Reddit' width={20}/>
                <div className='py-2 order-1'>Home</div>
              </div>
              <div>
                  <div className='py-2 px-2'>
                    <Image src={down} width={20}/>
                  </div>
              </div>
            </div>
              </button>
            </div>
          </div>
          <div className='flex w-1/3 my-2'>
              <input type='text' className='w-full peer rounded-full py-2 px-4 border border-gray text-sm hover:border-blue-500' placeholder='Search Reddit'></input>
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
              <button>
                <div className='flex justify-between spce-x-8'>
                  <div className='w-2/3 flex space-x-2 mr-6'>
                    <div className='w-1/3'>
                      <Image src={profile} width={70}/>
                    </div>
                    <div>
                      <h4 className='text-xs'>Academia_wing</h4>
                      <h6 className='text-xs'>1 karma</h6>
                    </div>
                  </div>
                  <div className='px-2'>
                    <Image src={down} width={20} className='py-2'/>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      <div className='border border-red-500 overflow-y-auto m-4'>
          <div className='flex flex-col space-y-5 order-1'>
            <Premium/>
            <Communities/>
            <Recent/>
            <Footer/>
          </div>
          <div className='flex-col flex w-1/3'>
            <CreatePost/>
          </div>
      </div>
    </main>
  )
}
