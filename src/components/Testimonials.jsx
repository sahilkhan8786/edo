import React from 'react'
import Button from './Button'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='w-full  bg-white my- mx-auto max-w-screen-2xl flex flex-col gap-7'>
            <article className='w-full text-center flex flex-col gap-5 mb-8'>
                <h1 className='font-bold text-[25px] sm:text-[35px] xl:text-[60px]'>
                    An AI that connects you to
                    <br />
                    the best offers for you
                </h1>
                <p className='font-medium text-[15px] sm:text-[20px] xl:text-[26px] text-[#303030] opacity-90 '>Your new partner in job search in Africa.</p>
                <p>

                    <Button
                        bg={'primary-green'}
                        text='white'
                    >Post Job</Button>
                </p>
            </article>

            <div className='w-full '>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}




                    pagination={{
                        clickable: true,
                    }}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <article className='bg-[#F5F7F8] p-3 flex flex-col gap-3'>
                            <aside className='flex gap-4'>
                                <img src="/testimonial-image.png" alt="" className='w-[68px]' />
                                <div>
                                    <h1 className='  font-semibold text-lg'>Assistant Comptable</h1>
                                    <p className='text-xs text-primary-green'>88% Compatible</p>
                                </div>
                            </aside>
                            <aside>

                                <h1 className=' whitespace-nowrap font-semibold text-lg'>Mission Brief</h1>
                                <p className='font-medium text-xs text-[#1E1E1E]'>We are looking for an accounting assistant</p>
                            </aside>

                            <Button
                                bg={'white'}
                                text='primary-green'
                                isBorder={true}
                                borderColor={'primary-green'}
                            >Show</Button>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide >
                        <article className='bg-[#F5F7F8] p-3 flex flex-col gap-3'>
                            <aside className='flex gap-4'>
                                <img src="/testimonial-image.png" alt="" className='w-[68px]' />
                                <div>
                                    <h1 className='  font-semibold text-lg'>Assistant Comptable</h1>
                                    <p className='text-xs text-primary-green'>88% Compatible</p>
                                </div>
                            </aside>
                            <aside>

                                <h1 className=' whitespace-nowrap font-semibold text-lg'>Mission Brief</h1>
                                <p className='font-medium text-xs text-[#1E1E1E]'>We are looking for an accounting assistant</p>
                            </aside>

                            <Button
                                bg={'white'}
                                text='primary-green'
                                isBorder={true}
                                borderColor={'primary-green'}
                            >Show</Button>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide >
                        <article className='bg-[#F5F7F8] p-3 flex flex-col gap-3'>
                            <aside className='flex gap-4'>
                                <img src="/testimonial-image.png" alt="" className='w-[68px]' />
                                <div>
                                    <h1 className='  font-semibold text-lg'>Assistant Comptable</h1>
                                    <p className='text-xs text-primary-green'>88% Compatible</p>
                                </div>
                            </aside>
                            <aside>

                                <h1 className=' whitespace-nowrap font-semibold text-lg'>Mission Brief</h1>
                                <p className='font-medium text-xs text-[#1E1E1E]'>We are looking for an accounting assistant</p>
                            </aside>

                            <Button
                                bg={'white'}
                                text='primary-green'
                                isBorder={true}
                                borderColor={'primary-green'}
                            >Show</Button>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide >
                        <article className='bg-[#F5F7F8] p-3 flex flex-col gap-3'>
                            <aside className='flex gap-4'>
                                <img src="/testimonial-image.png" alt="" className='w-[68px]' />
                                <div>
                                    <h1 className='  font-semibold text-lg'>Assistant Comptable</h1>
                                    <p className='text-xs text-primary-green'>88% Compatible</p>
                                </div>
                            </aside>
                            <aside>

                                <h1 className=' whitespace-nowrap font-semibold text-lg'>Mission Brief</h1>
                                <p className='font-medium text-xs text-[#1E1E1E]'>We are looking for an accounting assistant</p>
                            </aside>

                            <Button
                                bg={'white'}
                                text='primary-green'
                                isBorder={true}
                                borderColor={'primary-green'}
                            >Show</Button>
                        </article>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='w-full mb-16 flex flex-col gap-5'>
                <h1 className='font-bold text-[25px] md:text-[35px] xl:text-[60px] text-center'>
                    What people are saying about EDO...
                </h1>

                <article className=''>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}

                        breakpoints={{

                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <article className='w-full  flex gap-3 flex-row px-2' >
                                <img src="/testimonila-person-1.png" alt="" className='w-[150px]' />
                                <aside className='w-full flex flex-col gap-3 mt-6'>
                                    <img src="/stars.png" alt="" className='w-fit' />
                                    <p className='text-[#64748B] font-medium '>Your new partner in job search in Africa.
                                        I recommend I recommend I recommend I recommend.</p>
                                    <h3 className='font-bold '>
                                        Agbé VINCENT,
                                        <br />
                                        DevOps
                                    </h3>
                                </aside>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className='w-full  flex gap-3 flex-row px-2' >
                                <img src="/testimonila-person-1.png" alt="" className='w-[150px]' />
                                <aside className='w-full flex flex-col gap-3 mt-6'>
                                    <img src="/stars.png" alt="" className='w-fit' />
                                    <p className='text-[#64748B] font-medium '>Your new partner in job search in Africa.
                                        I recommend I recommend I recommend I recommend.</p>
                                    <h3 className='font-bold '>
                                        Agbé VINCENT,
                                        <br />
                                        DevOps
                                    </h3>
                                </aside>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className='w-full  flex gap-3 flex-row px-2' >
                                <img src="/testimonila-person-1.png" alt="" className='w-[150px]' />
                                <aside className='w-full flex flex-col gap-3 mt-6'>
                                    <img src="/stars.png" alt="" className='w-fit' />
                                    <p className='text-[#64748B] font-medium '>Your new partner in job search in Africa.
                                        I recommend I recommend I recommend I recommend.</p>
                                    <h3 className='font-bold '>
                                        Agbé VINCENT,
                                        <br />
                                        DevOps
                                    </h3>
                                </aside>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className='w-full  flex gap-3 flex-row px-2' >
                                <img src="/testimonila-person-1.png" alt="" className='w-[150px]' />
                                <aside className='w-full flex flex-col gap-3 mt-6'>
                                    <img src="/stars.png" alt="" className='w-fit' />
                                    <p className='text-[#64748B] font-medium '>Your new partner in job search in Africa.
                                        I recommend I recommend I recommend I recommend.</p>
                                    <h3 className='font-bold '>
                                        Agbé VINCENT,
                                        <br />
                                        DevOps
                                    </h3>
                                </aside>
                            </article>
                        </SwiperSlide>


                    </Swiper>
                </article>
            </div>
        </div>
    )
}

export default Testimonials