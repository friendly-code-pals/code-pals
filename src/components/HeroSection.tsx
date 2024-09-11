'use client';

import React from 'react';
import Link from 'next/link';
import ChoiceCard from './ChoiceCard';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center text-white">
    <h1 className="text-5xl font-bold mb-8">
      Code Pals
    </h1>
    <p className="text-xl mb-4">
      Learn by building<Link href="/learn" className="text-blue-400 hover:underline">learn</Link>,  
      <Link href="/web" className="text-blue-400 hover:underline">the web</Link>.  
    </p>
    <p className="text-lg mt-8 max-w-xl">
      Explore your path as a UX designer, developer, or cybersecurity professional. 
      Start your journey with a role-playing interface that grows with you as you progress. 
      <ChoiceCard 
          title="design"
          description="Design your future"
          link="/design"
          linkLabel="Start Designing"
        />
         <ChoiceCard 
          title="Develop your skills"
          description="Explore coding challenges, tutorials, and more."
          link="/code"
          linkLabel="Start Coding"
        />
         <ChoiceCard 
          title="Secure your knowledge"
          description="Get industry-certified"
          link="/cyber"
          linkLabel="Start Earning Certifications"
        />
      
      
    </p>
  </div>
  );
};

export default HeroSection;
