import Link from 'next/link'
import React from 'react'
import ActiveLink from './ActiveLink'

const Navbar = () => {


    const pages = ['about', 'contact', 'pricing']

    return (
        <ul className="p-2 flex">
            <Link className='mr-3 ' href={`/`}>
                <li className='p-3 hover:bg-blue-700 rounded-md'>home</li>
            </Link>
            {
                pages.map((page) => (
                    <ActiveLink key={page} path={page} text={page} />
                ))
            }
        </ul>
    )
}

export default Navbar