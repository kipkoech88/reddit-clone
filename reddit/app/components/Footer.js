import React from 'react'

function Footer() {
  return (
    <div className='container w-1/5 text-xs h-1/3 bg-white p-3 mb-2'>
      <div className='flex space-x-20'>
        <ul className='flex-col space-y-2'>
            <li className='cursor-pointer'>User Agreement</li>
            <li className='cursor-pointer'>Privacy Policy</li>
        </ul>
        <ul className='flex-col space-y-2'>
            <li className='cursor-pointer'>Content Policy</li>
            <li className='cursor-pointer'>Moderator Mode of Conduct</li>
        </ul>
      </div>
      <hr className='py-2 m-2'/>
      <div className='flex space-x-20'>
        <ul className='flex-col space-y-2'>
            <li className='cursor-pointer'>English</li>
            <li className='cursor-pointer'>Francais</li>
            <li className='cursor-pointer'>Italiano</li>
        </ul>
        <ul className='flex-col space-y-2'>
            <li className='cursor-pointer'>Deutsch</li>
            <li className='cursor-pointer'>Espanol</li>
            <li className='cursor-pointer'>Portugues</li>
        </ul>
      </div>
      <hr className='p-2 m-2'/>
      <div>
        <h6>Reddit Inc, &copy; 2023. All Rights Reserved</h6>
      </div>
    </div>
  )
}

export default Footer
