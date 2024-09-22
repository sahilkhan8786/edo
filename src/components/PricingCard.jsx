import React from 'react'
import Button from './Button'

const PricingCard = ({ data }) => {
    return (
        <div className='w-full sm:w-[488px] border-2 border-[#E7EBFF] p-6 ' >
            <p>
                <img src={data?.icon} alt={data.heading} />
            </p>

            <h1 className='font-medium text-[35px] xl:text-[44px]'>{data?.heading}</h1>
            <p className='text-[#797878] text-[24px]'>{data?.description}</p>
            <div className='flex my-12 items-end'>

                <h1 className='text-[30px] xl:text-[60px] font-medium'>{data?.nextHeading}</h1>
                {data.isAvailable && (
                    <span className=' text-[14px]'>per month</span>
                )}

            </div>

            <article className='flex flex-col gap-5'>
                {data?.list.map(el => (
                    <aside className='flex gap-6 items-center ' key={el}>

                        <img src="/pricing-vector.png" alt="" className='h-full' />
                        <p className='text-[#222222] font-normal text-[16px] sm:text-[24px]'>{el}</p>

                    </aside>
                ))}

            </article>

            <p className='w-full flex  justify-center mt-12 mb-6'>

                <Button
                    bg={'white'}
                    text='primary-green'
                    isBorder={true}
                    borderColor={'primary-green'}
                >Get Started</Button>
            </p>
        </div>
    )
}

export default PricingCard