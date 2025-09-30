"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from "next/link"

const Splash_Screen = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center bg-amber-100 gap-10'>
            <motion.h1
                initial={{ y: -250, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, duration: 1.5 }}
                className='text-9xl text-white font-bold font-mono cursor-default select-none'>HeLlo WoRlD</motion.h1>
            <motion.div
                className="h-[3rem] w-[10rem] bg-amber-200 cursor-pointer rounded"
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <Link className='flex justify-center items-center h-full w-full bg-amber-700 rounded-lg shadow text-white' href={"/Pages/home"}>Let's Go</Link>
            </motion.div>
        </div>
    )
}

export default Splash_Screen