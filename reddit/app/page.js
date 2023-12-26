import Image from 'next/image'
import Logo from '../app/reddit-1.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <nav className='container flex w-full justify-between space-x-4'>
        <div className='flex flex w-1/3 justify-between space-x-2'>
          <div>
            <Image src={Logo} width={250} height={250}/>
          </div>
          <div className='conatiner py-6'>
            Home
          </div>
        </div>
        <div className='flex w-1/3 my-2'>
            <input type='search' className='w-full peer rounded-full p-2.5 border-gray text-sm ps-10' placeholder='search Reddit'></input>
        </div>
        <div className='flex w-1/3 justify-between space-x-4 my-5'>
          <div className='flex justify-between w-1/2'>
            <div>Pop</div>
            <div>Rec</div>
            <div>Mess</div>
            <div>not</div>
            <div>pos</div>
          </div>
          <div className='w-1/2'>
            Academia wing
          </div>
        </div>
      </nav>
    </main>
  )
}
