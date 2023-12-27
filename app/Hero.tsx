"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { Typewriter } from './components/Typewriter';
import { Container } from './components/Container';
import { playfair, ptSansNarrow } from './fonts';


export const Hero = () => {

  return (
    <main>
      <div className='relative'>
        <Container>
          <div className=' text-black flex flex-col pt-[25vh]'>
            <h1 className={`lg:leading-[100px] ${playfair.className} text-secondary font-black lg:text-[112px] text-[50px] leading-tight`}>
              Hi, I'm Ankith
            </h1>
            <h3 className={`${ptSansNarrow.className} lg:leading-[40px] text-secondary font-black text-[20px] leading-normal md:text-[30px]`}>
              A skilled web developer creating great online experiences
            </h3>
            <h5 className={`${ptSansNarrow.className} lg:leading-[40px] text-secondary font-black text-[20px] leading-normal md:text-[30px]`}>
              Let's build something amazing for the web!
            </h5>
            <a
              className={`bg-accent text-primary rounded-md mt-[22px] py-[12px] px-[20px] ${playfair.className} text-[20px] w-fit cursor-pointer`}
              href='/contact'
            >CONTACT ME</a>
          </div>
        </Container>
      </div>
    </main>
  );
};
