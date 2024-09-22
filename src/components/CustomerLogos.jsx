import React from 'react'
import logo1 from '/adobe_logo.png'
import logo2 from '/google_logo.png'
import logo3 from '/duolingo_logo.png'
import logo4 from '/facebook_logo.png'
import logo5 from '/amazon_logo.png'
const CustomerLogos = () => {
    return (
        <div className='bg-customer-logo-bg' >
            <div className='flex gap-8 w-full  grid-cols-5 px-3 mb-16  py-16 items-center justify-center max-w-screen-2xl mx-auto flex-wrap'>

                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
            </div>
        </div>
    )
}

export default CustomerLogos