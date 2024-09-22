import React from 'react'
import ProblemSectionCard from './ProblemSectionCard'
import image1 from '/p-1.png'
import image2 from '/p-2.png'
import image3 from '/p-3.png'
import image4 from '/p-4.png'
import image5 from '/p-5.png'
const ProblemSection = () => {
    return (
        <div className=' flex items-center mx-auto max-w-screen-lg mt-12 justify-center flex-col mb-16'>
            <h1 className=' font-bold text-[24px] md:text-[32px] xl:text-[45px] w-full text-center '>Job offers that meet your professional
                <br />
                aspirations
            </h1>

            <div className='flex flex-col w-full gap-4 my-12 '>
                <div className='grid  gap-3 sm:grid-cols-2 w-full place-content-center w-f'>
                    <ProblemSectionCard image={image1} />
                    <ProblemSectionCard image={image2} />
                </div>
                <div className='grid  gap-3 sm:grid-cols-2 lg:grid-cols-3 w-full place-content-center'>
                    <ProblemSectionCard image={image3} />
                    <ProblemSectionCard image={image4} />
                    <ProblemSectionCard image={image5} />
                </div>
            </div>


        </div>
    )
}

export default ProblemSection