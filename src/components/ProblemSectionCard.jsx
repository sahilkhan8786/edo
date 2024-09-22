import React from 'react'

const ProblemSectionCard = ({ image, className }) => {
    return (

        <img src={image} alt="" className={`  ${className} hover:scale-105 transition-all cursor-pointer w-full  px-4 `} />

    )
}

export default ProblemSectionCard