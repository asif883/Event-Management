import React from 'react';
import HeroSection from '../Components/HomeComponents/HeroSection';
import FeaturesSection from '../Components/HomeComponents/FeaturesSection';
import HowItWorksSection from '../Components/HomeComponents/HowItWorksSection';
import TestimonialsSection from '../Components/HomeComponents/TestimonialsSection';
import UpcomingEventsSection from '../Components/HomeComponents/UpcomingEventsSection';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <TestimonialsSection/>
            <UpcomingEventsSection/>
        </div>
    );
};

export default Home;