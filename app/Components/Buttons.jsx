"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Buttons = ({ text: text, click: RouteTo }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(RouteTo)
        setTimeout(() => {
            router.push(RouteTo)
        }, 500);
    }
    return (
        <button onClick={handleClick} className='text-gray-600 font-light font-mono duration-300 ease-in-out hover:border-white hover:scale-[0.97] hover:text-white hover:bg-black text-[13px] border-[0.1px] cursor-pointer rounded p-4'>{text}</button>
    )
}

export default Buttons