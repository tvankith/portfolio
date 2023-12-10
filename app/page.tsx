"use client"
import React from 'react';
import { Hero } from './Hero';
import { Nav } from './Nav';

export default function Home() {

  return (
    <div className='bg-[rgb(237,235,228)] h-screen overflow-x-hidden'>
      <Nav />
      <Hero />
    </div>
  )
}
