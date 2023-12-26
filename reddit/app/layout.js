import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../app/reddit-1.svg'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reddit clone',
  description: 'Cloning reddit app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <Link rel='icon' href='./reddit-1.svg'/> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
