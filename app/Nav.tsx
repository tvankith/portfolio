"use client";
import React from 'react';
import { Container } from './Container';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={`w-full fixed z-10 `}>
      <Container>
        <div className='flex flex-row justify-between mt-8'>
          <div className='flex flex-row justify-start gap-x-5 md:gap-x-8 w-full text-primary ${playfair.className} font-semibold md:text-[16px] text-[14px]'>
            <Link className={`nav__link cursor-pointer ${pathname === "/" ? 'nav__link--active' : ''}`} href={"/"}>Home</Link>
            <Link className={`nav__link cursor-pointer ${pathname === "/skills" ? 'nav__link--active' : ''}`} href={"/skills"}>Skills</Link>
            <Link className={`nav__link cursor-pointer ${pathname === "/portfolio" ? 'nav__link--active' : ''}`} href={"/portfolio"}>Portfolio</Link>
            <Link className={`nav__link cursor-pointer ${pathname === "/contact" ? 'nav__link--active' : ''}`} href={"/contact"}>Contact</Link>
          </div>
          <div className='mt-[5px] flex flex-row gap-x-5 h-[20px]'>
            <a href='https://www.linkedin.com/in/tvankith/' target='_blank'>
              <FontAwesomeIcon className='text-black text-[20px]' icon={faLinkedin} />
            </a>
            <a href='https://github.com/tvankith' target='_blank'>
              <FontAwesomeIcon className='text-black text-[20px]' icon={faGithub} />
            </a>
          </div>
        </div>
        
      </Container>
    </nav>
  );
};
