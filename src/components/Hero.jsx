import React from 'react'
import image1 from '/hero-1.png'
import image2 from '/hero-2.png'
import Button from './Button'

const Hero = () => {
    return (
        <div className='flex items-center mx-auto max-w-screen-lg mt-12 justify-center flex-col mb-16'>
            <h1 className='font-extrabold text-[25px] md:text-[45px] xl:text-[67.79px] text-center '>Find & Hire Talents <br />
                around the world</h1>
            <p className='font-medium
            text-[15px] md:text-[35px]
            xl:text-[30px] text-p-hero'>Your new partner in job search in Africa.</p>

            <div className='gap-4 grid md:grid-cols-3 px-1 h-full mt-12'>
                <img src={image1} alt="" className='md:col-span-2' />
                <img src={image2} alt="" className='' />
            </div>
            <div className='flex gap-4 items-center justify-center mt-16 w-full flex-wrap px-2'>
                <Button bg={'primary-green'}
                    text='white'
                >   Post a Job
                </Button>
                <Button
                    bg={'white'}
                    text='primary-green'
                    isBorder={true}
                    borderColor={'primary-green'}
                >Discover job Offers</Button>
            </div>
        </div>
    )
}

export default Hero