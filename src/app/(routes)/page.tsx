'use client';

import React from 'react';
import HeroSection from '../../components/HeroSection';
import ChoiceCard from '../../components/ChoiceCard';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <HeroSection />

      {/* Section with choices */}
      <div className="choices-container">
        <ChoiceCard 
          title="Code"
          description="Explore coding challenges, tutorials, and more."
          link="/code"
          linkLabel="Start Coding"
        />
        <ChoiceCard 
          title="Fun"
          description="Learn through play in our RPG-style adventures."
          link="/code/fun/rpg"
          linkLabel="Start Your Adventure"
        />
        <ChoiceCard 
          title="Pal"
          description="Connect with others, collaborate, and grow together."
          link="/pal"
          linkLabel="Find a Pal"
        />
      </div>
    </div>
  );
};

export default HomePage;
