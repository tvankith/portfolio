"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { Typewriter } from './components/Typewriter';
import { Container } from './components/Container';
import { playfair, ptSansNarrow } from './fonts';


export const Hero = () => {
  const [visitibilty, setVisitibilty] = useState<boolean[]>([true, false, false, false]);

  const toggleVisibilty = useCallback((index: number) => {
    setVisitibilty(arr => arr.map(((v, i) => i === index ? true : v)));
  }, [])

  const [isRenderdOnClient, setIsRenderdOnClient] = useState(false)
  useEffect(() => {
    sessionStorage.setItem("isHeroSectionLoaded", "true")
    setIsRenderdOnClient(true)
  }, [])

  const [showAnimation] = useState(typeof sessionStorage !== 'undefined' ? sessionStorage.getItem("isHeroSectionLoaded") !== "true" : false)

  return (
    <main>
      <div className='relative'>
        <Container>
          {isRenderdOnClient &&
            <div className=' text-black flex flex-col pt-[25vh]'>
              <Typewriter
                autoStart={visitibilty[0]}
                className={`lg:leading-[100px] ${playfair.className} font-black lg:text-[112px] text-[50px] leading-tight`}
                text={"Hi, I'm Ankith"}
                onFinish={() => {
                  toggleVisibilty(1);
                }}
                speed={100}
                animation={showAnimation}
              />
              <Typewriter
                autoStart={visitibilty[1]}
                className={`${ptSansNarrow.className} lg:leading-[40px] text-secondary font-black text-[20px] leading-normal md:text-[30px]`}
                text={"A skilled web developer creating great online experiences"}
                onFinish={() => {
                  toggleVisibilty(2);
                }}
                speed={30}
                animation={showAnimation}
              />
              <Typewriter
                autoStart={visitibilty[2]}
                className={`${ptSansNarrow.className} lg:leading-[40px] text-secondary font-black text-[20px] leading-normal md:text-[30px]`}
                text={"Let's build something amazing for the web!"}
                speed={30}
                animation={showAnimation}
                onFinish={() => {
                  toggleVisibilty(3);
                }} />
              <a
                className={`bg-primary text-white mt-[22px] py-[12px] px-[20px] ${playfair.className} text-[20px] w-fit cursor-pointer ${(visitibilty[3] || !showAnimation) ? 'visible' : 'invisible'}`}
                href='/contact'
              >CONTACT ME</a>
            </div>
          }
        </Container>
      </div>
    </main>
  );
};
