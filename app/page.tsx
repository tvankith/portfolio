"use client"
import Image from 'next/image'
import { Playfair, PT_Sans_Narrow } from 'next/font/google'

import React from 'react';
import { Hero } from './Hero';

export const playfair = Playfair({
  subsets: ["latin"]
})

export const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function Home() {

  return (
    <div className='bg-white overflow-x-hidden'>
      <Hero/>
    </div>
  )
}
