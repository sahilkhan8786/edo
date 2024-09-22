import React from 'react'
import Button from './Button'
import SolutionsCard from './SolutionsCard'

const Solutions = () => {
    return (
        <div className=' px-4  bg-solutions-bg mt-12 mb-16'>
            <div className=' flex items-center mx-auto max-w-screen-lg  justify-center flex-col  px-2 gap-6' >


                <h1 className='font-bold text-[25px] sm:text-[35px] xl:text-[60px] mt-6'>How does it work?</h1>
                <p className='font-medium text-[15px] s,:text-[25px] xl:text-[26px]'>Finding a job becomes simple and fast</p>
                <Button text={'white'} bg={'primary-green'}>
                    Create my Edo profile
                </Button>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3   gap-8  place-content-center my-12'>
                    <SolutionsCard
                        bgColor='primary-green'
                        circleColor={false}
                        textColor={'white'} />
                    < SolutionsCard
                        bgColor={'white'}
                        circleColor={true}
                        textColor={'black'}
                    />
                    <SolutionsCard
                        bgColor={'primary-green'}
                        circleColor={false}
                        textColor={'white'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Solutions