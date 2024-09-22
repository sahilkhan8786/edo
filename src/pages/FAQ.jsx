import React, { useState } from 'react'
import Footer from '../components/Footer'
import { FAQData } from '../constants';
import FAQCards from '../components/FAQCards';
const FAQ = () => {

    const [faqs, setFaqs] = useState(FAQData);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <>
            <div className='max-w-screen-2xl mx-auto flex flex-col  items-center justify-center'>
                <h1 className='font-extrabold text-[25px] md:text-[35px] xl:text-[67px] mt-16 text-center'>Frequently Asked Questions</h1>
                <p className='text-center mb-24 text-[16px] sm:text-[20px]'>
                    Featuring a summary of FAQ section.
                </p>

                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <FAQCards faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FAQ