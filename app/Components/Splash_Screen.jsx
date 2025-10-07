"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from "next/link"
import { Skiper58, TextRoll } from './TextRoll'

const Splash_Screen = () => {
    return (
        <div className='flex flex-col relative justify-center items-center h-screen w-full bg-amber-100'>
            <motion.div initial={{ y: -250, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, duration: 1.5 }}>
                <TextRoll />
                <Skiper58 />
            </motion.div>
            <motion.div
                initial={{ x: -250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // transition={{ type: "spring", stiffness: 120, duration: 1.5 }}
                className="absolute bottom-[10rem] cursor-pointer rounded"
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <Link className='flex justify-center items-center h-12 w-32 bg-amber-700 rounded shadow text-white' href={"/Pages/home"}>Let's Go</Link>
            </motion.div>
        </div>
    )
}

export default Splash_Screen