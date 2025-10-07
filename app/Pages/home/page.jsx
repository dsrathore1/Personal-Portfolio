"use client"
import React from 'react'
import Navbar from '@/app/Components/Navbar';
import Icons from '../../Components/Icons'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa6'
import Image from 'next/image'
import Buttons from '@/app/Components/Buttons'
import { motion } from "framer-motion"
import { Skiper19 } from '@/app/Components/ScrollEffect';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='relative h-screen w-full'>
                <Skiper19 />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='w-[25rem] h-[30rem] absolute right-[13rem] top-[10rem]'>
                    <Image className='absolute right-5 top-4 h-[80%] w-[70%] rounded-xl' src="/Images/Profile_pic.png" alt='profile_pic' width={400} height={400} />
                    <p className='text-l absolute bottom-14 right-20 text-gray-400 font-sans font-extralight'>CEO <span className='font-bold'>
                        @WeFarmous
                    </span>
                    </p>
                </motion.div>
                <div>
                    <div className='absolute left-[13rem] top-[15rem]'>
                        <div className='flex gap-14'>
                            <Icons icon={FaGithub} color={'black'} size={25} />
                            <Icons icon={FaTwitter} color={'black'} size={25} />
                            <Icons icon={FaLinkedin} color={'black'} size={25} />
                        </div>
                    </div>
                    <div className='absolute left-[13rem] top-[19rem]'>
                        <h1 className='flex text-[2.5rem] font-sans tracking-wide font-light gap-4 text-gray-500 relative select-none'>
                            Hello I'm <span className='relative z-[1] text-black font-medium'>
                                {/* <div className='absolute bg-violet-300 z-[-1] rounded h-4 w-[35rem] left-[1rem] bottom-[.8rem]'></div> */}
                                Digpal Singh Rathore</span>
                        </h1>
                        <p className='text-[17px] text-gray-500 font-sans font-extralight'>DevOps Cloud Engineer / MLOps Engineer / Freelancer / Photographer / YouTuber</p>
                    </div>
                    <div className='absolute mt-4 left-[13rem] top-[25rem] h-[5rem] w-[30%]'>
                        <div className='gap-[2rem] flex h-full items-center'>
                            <Buttons click={"https://github.com/dsrathore1"} text={"Let's Colaborate"} />
                            <Buttons click={"Service button Clicked"} text={"Services"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home