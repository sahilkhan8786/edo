import React from 'react'

const Button = ({ bg, text, isBorder = false, borderColor = '', children }) => {
    return (
        <button className={`bg-${bg} px-16  py-5 text-${text} hover:opacity-85 cursor-pointerrounded-3xl  text-[20px] md:[text-26px] rounded-[70px] font-semibold ${isBorder && 'border'} border-${borderColor} `}>{children}</button>
    )
}

export default Button