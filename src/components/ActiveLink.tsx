'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
    path: string;
    text: string;
}

const ActiveLink = ({ path, text}: Props) => {

    const pathName = usePathname( ).slice(1);

    return (
        <Link href={path}>
            <li className={`mr-3 p-3 hover:bg-blue-800 rounded-md transition-all ${pathName == path ? 'text-blue-300 bg-blue-800' : ''}`}>{text}</li>
        </Link>
    )
}

export default ActiveLink