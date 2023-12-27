"use client"
import React from 'react';
import { Page } from '../components/Page';
import { Container } from '../components/Container';
import { ptSansNarrow } from '../fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const allSkills = [
    { label: "Javascript"},
    { label: "CSS"},
    { label: "React"},
    { label: "React Native" },
    { label: "Redux" },
    { label: "Babel" },
    { label: "Webpack" },
    { label: "Node.js"},
    { label: "Express.js" },
    { label: "Postgresql" },
    { label: "Mongodb" },
    { label: "Tailwind" },
    { label: "Angular" },
    { label: "AWS lambda" },
    { label: "Next.js" },
    { label: "Websocket" }
]
const Skill = (props: { icon?: IconProp; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
    return (
        <div className={` border-2 border-secondary px-4 py-2 w-fit text-secondary font-bold tracking-wide ${ptSansNarrow.className}`}>
            {props?.icon ? <FontAwesomeIcon className='text-black text-[20px] mx-2' icon={props?.icon} />: null}
            {props.label}
        </div>
    )
}

export default function Skills() {

    return (
        <Page>
            <Container>
                <div className='flex flex-row flex-wrap gap-y-4 gap-x-4 mt-[25%]'>
                    {
                        allSkills.map((item) => {
                            return <Skill key={item.label} label={item.label}/>
                        })
                    }
                </div>
            </Container>
        </Page>
    )
}
