import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MobileNav from '../components/MobileNav/MobileNav';
import Hero from '../components/HeroSection/Hero';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection'
import Services from '../components/Services/Services'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <MobileNav isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
        </>
    );
}

export default Home;