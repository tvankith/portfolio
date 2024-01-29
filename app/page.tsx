"use client"
import React from 'react';
import { Hero } from './Hero';
import { ptSansNarrow } from './fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

export default function Home() {

  return (
    <div className='flex flex-col item-center'>
      <Hero />
      <Link href={"https://github.com/tvankith/portfolio"}>
        <div className='absolute left-0 bottom-5 w-screen flex flex-row gap-x-1 justify-center items-center underline '>
          <FontAwesomeIcon className='text-secondary h-[18px] md:text-[20px]' icon={faGithub} />
          <p className={`text-[18px] text-secondary ${ptSansNarrow.className}`}>Built with Next.js</p>
        </div>
      </Link>
    </div>
  )
}
