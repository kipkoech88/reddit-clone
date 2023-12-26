import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Logo from './reddit-1.svg'
import home from '../public/home.png'
import messenger from '../public/messenger.png'
import banana from '../public/banana.png'
import advertising from '../public/advertising.png'
import plus from '../public/plus.png'
import trending from '../public/trending.png'
import notification from '../public/bell.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <header className='w-full px-2 py-2'>
      <nav className='container flex w-full justify-between space-x-4 items-center'>
        <div className='flex flex w-1/3 justify-between space-x-2'>
          <div>
            <Image src={Logo} width={150} height={150}/>
          </div>
          <div className='conatiner flex justify-between  border-red-500 w-2/3 border py-2 h-10 items-center'>
            <div className='flex space-x-4 mr-6'>
              {/* <Image src={home} alt='Reddit' width={20}/> */}
              <div className='py-2 order-1'>Home</div>
            </div>
            <div>
                <div className='py-2'>Arr</div>
            </div>
          </div>
        </div>
        <div className='flex w-1/3 my-2'>
            <input type='text' className='w-full peer rounded-full py-2 px-4 border border-gray text-sm' placeholder='search Reddit'></input>
        </div>
        <div className='flex w-1/3 justify-between space-x-4 my-5 border border-red-500'>
          <div className='flex justify-between w-1/2'>
            <div>
            </div>
            <div>
              <Image src={trending} alt='trending on reddit' width={25} height={10}/>
            </div>
            <div>
              <Image src={banana} width={25} height={10} alt='messages'/>
            </div>
            <div>
              <Image src={messenger} alt='' width={25} height={10}/>
            </div>
            <div>
              <Image src={notification} alt='notification' width={25} height={10}/>
            </div>
            <div>
              <Image src={plus} width={25} height={10} alt='add post'/>
            </div>
            <div>
              <Image src={advertising} width={25} height={10} alt='advertize'/>
            </div>
          </div>
          <div className='w-1/2 border border-gray-500'>
            Academia wing
          </div>
        </div>
      </nav>
      </header>
    </main>
  )
}
