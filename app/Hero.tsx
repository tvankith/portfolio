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
      <div className='relative bg-[rgb(237,235,228)] h-[100vh] box-border border-transparent flex justify-center'>
        <div className='w-[1110px] text-black flex flex-col justify-center'>
          <Typewriter
            autoStart={visitibilty[0]}
            className={`leading-[100px] ${playfair.className} font-black text-[112px] h-[112px]`}
            text={"Hi, I'm Ankith T V"}
            onFinish={() => {
              toggleVisibilty(1);
            }}
            speed={100} />
          <Typewriter
            autoStart={visitibilty[1]}
            className={`${ptSansNarrow.className} leading-[40px] text-secondary font-black text-[30px] h-[40px] w-full`}
            text={"A skilled web developer creating great online experiences"}
            onFinish={() => {
              toggleVisibilty(2);
            }}
            speed={30} />
          <Typewriter
            autoStart={visitibilty[2]}
            className={`${ptSansNarrow.className} leading-[40px] text-secondary font-black text-[30px] h-[40px] w-full`}
            text={"Let's build something amazing for the web!"}
            speed={30}
            onFinish={() => {
              toggleVisibilty(3);
            }} />
          <button className={`bg-primary text-white mt-[22px] py-[12px] px-[20px] ${playfair.className} text-[20px] w-fit ${visitibilty[3] ? 'visible' : 'invisible'}`}>CONTACT ME</button>
        </div>
        <div className='absolute box-border bottom-0 w-0 h-0 border-white border border-r-[100vw] border-t-[134px] border-t-transparent'></div>
      </div>
    </main>
  );
};
