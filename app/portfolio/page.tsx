"use client"
import React from 'react';
import { Nav } from '../components/Nav';
import { Page } from '../components/Page';
import { Container } from '../components/Container';
import { playfair, ptSansNarrow } from '../fonts';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Card = (props: {
  link: string;
  thumbnail: string | StaticImport; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; archievements: string[];
}) => {
  return (
    <div className=' border-2 border-primary'>
      <div className='relative w-full h-[250px] aspect-video bg-black flex flex-row justify-center'>
        <Image
          src={props.thumbnail}
          fill
          alt=""
          className='h-[100%] object-contain'
          quality={1}
          unoptimized={true}
        />
      </div>
      <div className='m-3'>
        <Link href={props.link} target='_blank' className='flex flex-row gap-x-1 items-center'>
          <h1 className={`text-[18px] text-black font-bold tracking-wide underline ${playfair.className}`}>{props.name}</h1>
          <FontAwesomeIcon className='text-black text-[15px]' icon={faArrowUpRightFromSquare} />
        </Link>
        <ul className={`ml-4 text-[16px] list-disc ${ptSansNarrow.className}`}>
          {
            props.archievements.map((text: string) => <li>{text}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default function Portfolio() {

  const experience = [
    {
      companyName: "Neoito",
      year: "(2020 - present)",
      projects: [{
        name: "Storyd",
        link: "https://www.storyd.ai/",
        archievements: ["Improved user interfaces based on client and customer feedback, resulting in positive feedback from users", "Implemented a real-time cursor UI to revolutionise the way users collaborate, making it easier and more efficient than ever before."],
        thumbnail: "/portfolio-preview/storyd-preview.png"
      },
      {
        name: "Permitflow",
        link: "https://www.permitflow.com/",
        archievements: ["Leveraged GraphQL to reduce network calls and server load, resulting in increased performance and scalability.", "Integrated Material UI to create a consistent and user-friendly UI, enhancing the user experience."],
        thumbnail: "/portfolio-preview/permitflow-preview.jpg",
        thumbnailClassName: ""
      },
      {
        name: "Cwikpay",
        link: "https://store.cwikpay.com/",
        archievements: ["Enabled over-the-air (OTA) updates with React Native CodePush, providing users with the latest features and bug fixes without the need to download a new app from the app store., resulting in increased performance and scalability.", "Developed customizable vendor pages with dashboards, increasing customer engagement and vendor satisfaction by empowering vendors to manage their own content and branding."],
        thumbnail: "/portfolio-preview/cwikpay-preview.webp",
        thumbnailClassName: ""
      },
    ]
    },
    {
      companyName: "Newagesys",
      year: "(2018 - 2020)",
      projects: [{
        name: "Usee",
        link: "https://theuseeshop.com/",
        archievements: ["Enhanced the Product page to boost customer engagement.", "Migrated app to React Native, improving performance and reducing complexity, resulting in a more efficient and scalable app."],
        thumbnail: "/portfolio-preview/usee-preview.jpg"
      },
      {
        name: "Vacationme",
        link: "https://www.vacationme.com/",
        archievements: ["Migrated Angular 2 app to Angular 6, upgrading dependencies and ensuring compatibility, ensuring a smooth and efficient migration process.", "Implemented WebSockets for real-time data updates and communication, enhancing performance and user experience."],
        thumbnail: "/portfolio-preview/vactionme-preview.jpg",
        thumbnailClassName: ""
      }]
    },
  ]
  return (
    <Page>
      <Container>
        {
          experience.map((company) => (
            <div className='flex flex-col w-full mb-3'>
              <div className='flex flex-row'>
                <h1 className={`text-[22px] font-bold my-2 ${playfair.className}`}>{company.companyName}</h1>
                <h1 className={`text-[22px] font-bold my-2 ${playfair.className} text-orange-600`}>{company.year}</h1>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                  company.projects.map((project) => <Card {...project} />)
                }
              </div>
            </div>
          ))
        }
      </Container>
    </Page>
  )
}
