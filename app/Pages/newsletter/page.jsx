import Nav_Header from '@/app/Components/Nav_Header'
import NewsletterForm from '@/app/Components/NewsletterForm'
import React from 'react'

const page = () => {
    return (
        <>
            <Nav_Header />
            <div className='h-screen w-full flex justify-center items-center'>
                <NewsletterForm />
            </div>
        </>
    )
}

export default page