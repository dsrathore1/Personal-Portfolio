import React from 'react'
import { FaDownload } from "react-icons/fa6";

const CVPage = () => {
    return (
        <>
            <h1>Hello world I am CV</h1>
            <button className='bg-black floating_icon rounded-full flex justify-center items-center shadow-xl absolute right-10 top-[2rem] h-[3.2rem] w-[3.2rem] transition-transform duration-300 ease-in-out hover:translate-y-1 cursor-pointer'><FaDownload color='white' size={20} /></button>
        </>
    )
}

export default CVPage