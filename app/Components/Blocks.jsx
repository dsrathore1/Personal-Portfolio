"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Blocks = () => {
    return (
        <motion.div
            initial={{ y: -250, opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "interia", velocity: 120, duration: 1 }}
            className='bg-white h-[60vh] w-[25rem] cursor-pointer flex justify-center items-center rounded-xl shadow '>
            Hello
        </motion.div>
    )
}

export default Blocks