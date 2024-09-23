import React from 'react'
import Hero from '../components/Hero'
import CustomerLogos from '../components/CustomerLogos'
import ProblemSection from '../components/ProblemSection'
import Solutions from '../components/Solutions'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'
const Home = () => {
    return (
        <>
            <Carousal />
            <Hero />
            <CustomerLogos />
            <ProblemSection />
            <Solutions />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home