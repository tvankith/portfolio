"use client"
import React from 'react';
import { Hero } from './Hero';
import { Page } from './components/Page';
import { ptSansNarrow } from './fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

export default function Home() {

  return (
    <Page>
      <Hero />
      <Link href={"https://github.com/tvankith/portfolio"}>
        <div className='fixed bottom-5 w-full flex flex-row gap-x-1 justify-center items-center underline'>
          <FontAwesomeIcon className='text-black text-[14px] md:text-[20px]' icon={faGithub} />
          <p className={`text-[18px]  ${ptSansNarrow.className}`}>Built with Next.js</p>
        </div>
      </Link>
    </Page>
  )
}
