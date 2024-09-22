import React, { useState } from 'react'
import PricingCard from '../components/PricingCard'
import { pricingBusinessDetails1, pricingBusinessDetails2, pricingTalentDetails1, pricingTalentDetails2 } from '../constants';
import Footer from '../components/Footer';

const Pricing = () => {
    const [isTalentClicked, setIsTalentClicked] = useState(true);
    const [talentData1, setTalentData1] = useState(pricingTalentDetails1)
    const [talentData2, setTalentData2] = useState(pricingTalentDetails2)
    const [businessData1, setBusinessData1] = useState(pricingBusinessDetails1)
    const [businessData2, setBusinessData2] = useState(pricingBusinessDetails2)


    function activeButtonHandler(e) {
        console.log(e.target.innerText)
        if (e.target.innerText === 'Talent') {
            setIsTalentClicked(true)
        }
        else if (e.target.innerText === 'Business') {
            setIsTalentClicked(false)
        }
    }


    return (
        <>
            <div className='max-w-screen-2xl mx-auto flex flex-col  items-center justify-center'>
                <h1 className='font-extrabold text-[25px] md:text-[45px]  xl:text-[67px] mt-16'>Find Your Perfect Plan</h1>
                <p className='text-center text-[15px] md:text-[25px]'>
                    Our pricing options are designed to meet the needs of
                    <br />
                    businesses and talents.
                </p>

                <span className='bg-[#FBFBFB] w-fit mt-8 flex gap-4 p-4 rounded-lg'>
                    <button className={`${isTalentClicked && 'bg-white p-2 border-2 rounded-xl'}`}
                        onClick={activeButtonHandler}
                    > Talent</button>
                    <button className={`${!isTalentClicked && 'bg-white p-2 border-2 rounded-xl'}`}
                        onClick={activeButtonHandler}
                    > Business </button>
                </span>

                <div className='grid grid-cols-1 my-6 gap-4 xl:grid-cols-2 place-content-center px-2'>
                    <PricingCard data={isTalentClicked ? pricingTalentDetails1 : pricingBusinessDetails1} />
                    <PricingCard data={isTalentClicked ? pricingTalentDetails2 : pricingBusinessDetails2} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pricing