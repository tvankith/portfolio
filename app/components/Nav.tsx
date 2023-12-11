"use client";
import React, { useEffect, useState } from 'react';
import { Container } from './Container';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ptSansNarrow } from '../fonts';

const HamburgerIcon = (props: { onChange: (arg0: boolean) => void; }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={`hamburger ${isActive ? 'hamburger--active' : ''}`}
      onClick={() => {
        setIsActive(v => !v)
        props.onChange(!isActive)
      }}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

const SocialIcons = () => {
  return (
    <div className='mt-[5px] flex flex-row gap-x-5 h-[20px]'>
      <a href='https://www.linkedin.com/in/tvankith/' target='_blank'>
        <FontAwesomeIcon className='text-black text-[20px]' icon={faLinkedin} />
      </a>
      <a href='https://github.com/tvankith' target='_blank'>
        <FontAwesomeIcon className='text-black text-[20px]' icon={faGithub} />
      </a>
    </div>
  )
}

const MobileNav = () => {
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  useEffect(() => {

  }, [])
  return (
    <div className='md:hidden mt-8'>
      <div className='md:hidden fixed z-20'>
        <HamburgerIcon
          onChange={(v) => {
            setIsMenuVisible(v)
          }}
        />
      </div>
      <div onAnimationEnd={() => {

      }}
        className={`${isMenuVisible ? ' animate-fadein' : ' animate-fadeout'} fixed inset-0 h-screen w-screen z-10 bg-background transition-opacity delay-300`}>
        <Container>
          <div className='mt-[30%]'>
            <div className='flex flex-col items-center gap-y-6 mt-8 text-[18px]'>
              <Link className={`cursor-pointer nav__link ${ptSansNarrow.className} ${pathname === "/" ? 'nav__link--active' : ''}`} href={"/"}>Home</Link>
              <Link className={`cursor-pointer nav__link ${ptSansNarrow.className} ${pathname === "/skills" ? 'nav__link--active' : ''}`} href={"/skills"}>Skills</Link>
              <Link className={`cursor-pointer nav__link ${ptSansNarrow.className} ${pathname === "/portfolio" ? 'nav__link--active' : ''}`} href={"/portfolio"}>Portfolio</Link>
              <Link className={`cursor-pointer nav__link ${ptSansNarrow.className} ${pathname === "/contact" ? 'nav__link--active' : ''}`} href={"/contact"}>Contact</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={`w-full fixed z-10 bg-background pb-2`}>
      <Container>
        <MobileNav />
        <div className='hidden md:flex flex-row justify-between mt-8'>
          <div className={`flex flex-row justify-start gap-x-8 w-full text-primary ${ptSansNarrow.className} font-semibold text-[18px] flex`}>
            <Link className={`nav__link cursor-pointer ${ptSansNarrow.className} ${pathname === "/" ? 'nav__link--active' : ''}`} href={"/"}>Home</Link>
            <Link className={`nav__link cursor-pointer ${ptSansNarrow.className} ${pathname === "/skills" ? 'nav__link--active' : ''}`} href={"/skills"}>Skills</Link>
            <Link className={`nav__link cursor-pointer ${ptSansNarrow.className} ${pathname === "/portfolio" ? 'nav__link--active' : ''}`} href={"/portfolio"}>Portfolio</Link>
            <Link className={`nav__link cursor-pointer ${ptSansNarrow.className} ${pathname === "/contact" ? 'nav__link--active' : ''}`} href={"/contact"}>Contact</Link>
          </div>
          <SocialIcons />
        </div>
      </Container>
    </nav>
  );
};
