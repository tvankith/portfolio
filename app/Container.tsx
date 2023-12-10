"use client";
import React from 'react';

export const Container = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
  return (
    <div className='flex flex-row justify-center'>
      <div className='lg:w-[1110px] w-full px-8'>
        {props.children}
      </div>
    </div>
  );
};
