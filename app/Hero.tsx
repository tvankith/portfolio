"use client";
import React, { useState } from 'react';
import { Typewriter } from './Typewriter';
import { playfair, ptSansNarrow } from './page';

export const Hero = () => {
  const [visitibilty, setVisitibilty] = useState<boolean[]>([true, false, false, false]);

  const toggleVisibilty = (index: number) => {
    setVisitibilty(arr => arr.map(((v, i) => i === index ? true : v)));
  };
  return (
    <main>
      <div className='relative bg-[rgb(237,235,228)] h-[100vh] flex flex-row justify-center'>
        <div className='lg:w-[1110px] w-full px-8 text-black flex flex-col pt-[30vh]'>
          <Typewriter
            autoStart={visitibilty[0]}
            className={`lg:leading-[100px] ${playfair.className} font-black lg:text-[112px] text-[50px] leading-tight`}
            text={"Hi, I'm Ankith"}
            onFinish={() => {
              toggleVisibilty(1);
            }}
            speed={100} />
          <Typewriter
            autoStart={visitibilty[1]}
            className={`${ptSansNarrow.className} lg:leading-[40px] text-secondary font-black text-[20px] leading-normal md:text-[30px]`}
            text={"A skilled web developer creating great online experiences"}
            onFinish={() => {
              toggleVisibilty(2);
            }}
            speed={30} />
          <Typewriter
            autoStart={visitibilty[2]}
            className={`${ptSansNarrow.className} lg:leading-[40px] text-secondary font-black text-[20px] leading-normal md:text-[30px]`}
            text={"Let's build something amazing for the web!"}
            speed={30}
            onFinish={() => {
              toggleVisibilty(3);
            }} />
          <a 
            className={`bg-primary text-white mt-[22px] py-[12px] px-[20px] ${playfair.className} text-[20px] w-fit cursor-pointer ${visitibilty[3] ? 'visible' : 'invisible'}`}
            href={"mailto:tvankith@gmail.com"}
            >CONTACT ME</a>
        </div>
        <div className='absolute box-border bottom-0 w-0 h-0 border-white border border-r-[100vw] border-t-[134px] border-t-transparent'></div>
      </div>
    </main>
  );
};
