"use client";
import React from 'react';
import { Container } from './Container';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={`w-full fixed z-10`}>
      <Container>
        <div className='flex flex-row justify-start gap-x-5 md:gap-x-8 mt-8 w-full text-primary ${playfair.className} font-semibold md:text-[16px] text-[14px]'>
          <Link className={`cursor-pointer ${pathname === "/" ? 'nav__link--active' : ''}`} href={"/"}>Home</Link>
          <Link className={`cursor-pointer ${pathname === "/skills" ? 'nav__link--active' : ''}`} href={"/skills"}>Skills</Link>
          <Link className={`cursor-pointer ${pathname === "/portfolio" ? 'nav__link--active' : ''}`} href={"/portfolio"}>Portfolio</Link>
          <Link className={`cursor-pointer ${pathname === "/contact" ? 'nav__link--active' : ''}`} href={"/contact"}>Contact</Link>
        </div>
      </Container>
    </nav>
  );
};
