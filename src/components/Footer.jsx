import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full flex flex-col gap-0 '>
            <article className='relative h-[800px] overflow-hidden'>
                <div className='w-full h-full bg-black/45 flex items-center justify-center flex-col gap-3 absolute top-0 z-20 rounded-3xl'>
                    <h1 className='font-bold text-[45px] text-white text-center
                    '>Join thousands of talents and land your next job</h1>
                    <img src="/Google Play.png" alt="" className='cursor-pointer' />
                    <img src="/Group.png" alt="" className='cursor-pointer' />
                </div>
                <img src="/footer-1.png" alt="" className='absolute top-0' />
                <img src="/footer-2.png" alt="" className='absolute left-0 bottom-0' />
                <img src="/footer-4.png" alt="" className='absolute right-0' />
                <img src="/footer-5.png" alt=""
                    className='absolute right-0 bottom-0' />
            </article>
            <div className='flex w-full items-center justify-between my-8 mx-auto max-w-screen-2xl flex-col gap-4 lg:flex-row px-2'>
                <Link to={'/'}>
                    <img src="/logo.png" alt="" />
                </Link>

                <p> &copy;  2024 EDO. All rights reserved.</p>
                <div className='flex gap-6'>

                    <p className='cursor-pointer hover:underline'>Privacy & Policy </p>
                    <p className='cursor-pointer hover:underline'>Terms & Conditions </p>
                </div>
                <div className='flex gap-6'>

                    <img src="/linked-in.png" alt="" className='size-6  cursor-pointer ' />
                    <img src="/fb.png" alt="" className='size-6  cursor-pointer ' />
                    <img src="/google.png" alt="" className='size-6  cursor-pointer ' />
                </div>
            </div>
        </div>
    )
}

export default Footer