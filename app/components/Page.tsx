"use client";
import React from 'react';
import { Nav } from './Nav';

export const Page = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
  return (
    <div className='bg-background h-screen overflow-x-hidden'>
      <Nav />
      <div className='pt-[80px] mr-[-8px]'>
        {props.children}
      </div>
    </div>
  );
};
