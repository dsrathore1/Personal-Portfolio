import Blocks from '@/app/Components/Blocks'
import Nav_Header from '@/app/Components/Nav_Header'
import React from 'react'

const WorkPage = () => {
    return (
        <>
            <Nav_Header />
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='overflow-y-auto w-screen h-full pt- bg-amber-400 pt-[10rem] scroll-smooth justify-center items-center flex'>
                    <div className='grid grid-cols-3 mt-20 gap-16 flex-col'>
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkPage