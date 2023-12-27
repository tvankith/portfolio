"use client"
import React from 'react';
import { Nav } from '../components/Nav';
import { Page } from '../components/Page';
import { Container } from '../components/Container';
import { playfair, ptSansNarrow } from '../fonts';

export default function Contact() {

  return (
    <Page>
      <Container>
        <div className='mt-[20%] text-secondary'>
          <h5 className={`text-[20px] lg:text-[30px] ${playfair.className}`}>
            Email: tvankith@gmail.com
          </h5>
          <h5 className={`text-[15px] lg:text-[20px] mt-2 font-black ${ptSansNarrow.className}`}>
            Feel free to reach out to me at the email address provided above!
          </h5>
        </div>
      </Container>
    </Page>
  )
}
