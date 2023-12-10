"use client"
import React from 'react';
import { Hero } from './Hero';
import { Nav } from './Nav';

export default function Home() {

  return (
    <div className='bg-background h-screen overflow-x-hidden'>
      <Nav />
      <Hero />
    </div>
  )
}
