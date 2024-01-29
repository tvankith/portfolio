'use client'

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { blog } from "@prisma/client";

export const BlogTable = (props: { list: {
    id: number;
    name: string;
    description: string;
    content: string;
    createdAt: Date;
}[]; deleteBlog: (id: number)=> Promise<blog | null> }) => {
    const {list, deleteBlog} = props
    return (
        <table>
            <tbody>
                {
                    list.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className="border text-left p-2">{item.name}</td>
                                <td className="border text-left p-2">{item.description}</td>
                                <td className="border text-left p-2">
                                    <div className="flex flex-row gap-x-2">
                                        <Link href={`/admin/blog/${item.id}`}>
                                            <FontAwesomeIcon
                                                className='text-secondary h-[18px] md:text-[20px]'
                                                icon={faPen}
                                            />
                                        </Link>
                                        <FontAwesomeIcon
                                            className='text-secondary h-[18px] md:text-[20px]'
                                            icon={faTrash}
                                            onClick={() => {
                                                deleteBlog(item.id)
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}