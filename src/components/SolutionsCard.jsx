import React from 'react'

const SolutionsCard = ({ bgColor, circleColor, textColor }) => {
    return (
        <article className={`shadow-2xl h-[450px] bg-${bgColor} text-${textColor} rounded-[40px] relative flex items-center justify-end pb-8 flex-col px-12 overflow-hidden`}>
            <div className={`font-bold text-[60px] border-[20px] rounded-full size-[256px] flex items-center  justify-center absolute -top-24 -left-24 ${circleColor ? `border-solutions-card-yellow` : ''}`}>
                <span className='absolute top-24 left-28'>01</span>
            </div>

            <h2 className='font-bold text-[40px] text-left  w-full tracking-tight leading-snug'>Create
                <br />
                your
                <br />
                profile</h2>
            <p className='font-normal text-[16px]'>Record a 30-second video, introduce yourself, and attract recruiters!</p>
        </article>
    )
}

export default SolutionsCard