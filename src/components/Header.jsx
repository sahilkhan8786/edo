import React, { useEffect, useState } from 'react'
import logo from '/logo.png'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import HamburgerIcon from '../icons/Hamburger'

const Header = () => {
    const [isHamClicked, setIsHamClicked] = useState(false)
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Function to return classes for active/inactive NavLink
    const navLinkClasses = ({ isActive }) =>
        isActive ? 'md:text-primary-green text-[26px] text-white' : 'text-[26px] cursor-pointer hover:text-primary-green'

    return (
        <header className='max-w-screen-2xl px-4 h-[115px] flex items-center justify-between 2xl:mx-auto border-primary-green border mt-4 rounded-[41px] mx-3'>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" className='cursor-pointer w-1/2 sm:w-full' />
            </NavLink>

            {/* Desktop navigation */}
            {!isMobileView && (
                <nav>
                    <ul className='hidden sm:flex gap-6 items-center'>
                        <li>
                            <NavLink className={navLinkClasses} to={'/pricing'}>
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={navLinkClasses} to={'/faq'}>
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <Button bg={'primary-green'} text='white'>
                                Post Job
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Hamburger Icon for mobile */}
            {isMobileView && (
                <HamburgerIcon
                    className={'block md:hidden'}
                    onClick={() => setIsHamClicked(prev => !prev)}
                />
            )}

            {/* Mobile-specific navigation */}
            {isMobileView && isHamClicked && (
                <nav className='block absolute top-[135px] w-full bg-primary-green text-white p-8 left-0'>
                    <ul className='flex gap-6 items-center flex-col'>
                        <li>
                            <NavLink
                                className={navLinkClasses}
                                to={'/pricing'}
                                onClick={() => setIsHamClicked(false)}
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={navLinkClasses}
                                to={'/faq'}
                                onClick={() => setIsHamClicked(false)}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        {/* Post Job button for mobile */}
                        <li>
                            <Button
                                bg={'white'}  // Adjust colors to fit the mobile menu design
                                text='primary-green'
                                onClick={() => setIsHamClicked(false)}  // Optionally close the menu after clicking
                            >
                                Post Job
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header
