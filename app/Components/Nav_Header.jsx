import React from 'react'
import "../globals.css"
import Link from 'next/link'

const Nav_Header = () => {
    return (
        <div className='flex text-gray-700 bg-[#faf9f4] justify-between text-[.9rem] items-center border-b-[.05rem] border-gray-200 shadow-xs h-[4rem] w-full absolute z-[1]'>
            <div className='ml-10'>
                <Link href={"/"} className='text-black font-bold text-[1.2rem] font-sans cursor-pointer select-none tracking-wider'>portfolio.</Link>
            </div>
            <div>
                <ul className='list-none font-mono font-light duration-300 ease-in-out tracking-widest flex gap-[3.4rem] mr-[10rem] justify-center items-center'>
                    <li className='hover:text-black hover:font-bold duration-200 ease-in-out cursor-pointer'><Link href="/Pages/newsletter">Newsletter</Link></li>
                    <li className='hover:text-black hover:font-bold duration-200 ease-in-out cursor-pointer'><Link href="/Pages/blog">Blog</Link></li>
                    <li className='hover:text-black hover:font-bold duration-200 ease-in-out cursor-pointer'><Link href="/Pages/work">Work</Link></li>
                    <li className='hover:text-black hover:font-bold duration-200 ease-in-out cursor-pointer'><Link href="/Pages/toolkit">Toolkit</Link></li>
                    <li className='hover:text-black hover:font-bold duration-200 ease-in-out cursor-pointer'><Link href="/Pages/photograph">Photography</Link></li>
                    <li className='hover:text-black hover:font-bold duration-200 ease-in-out cursor-pointer'><Link href="/Pages/cv">CV</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav_Header