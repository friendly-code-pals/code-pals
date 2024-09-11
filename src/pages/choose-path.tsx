// pages/choose-path.tsx

import React from 'react';
import ChoiceCard from '../components/ChoiceCard';

const ChoosePath: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex flex-wrap justify-center">
        <ChoiceCard
          title="Learn"
          description="Start your learning journey."
          link="/learn"
          linkLabel="Start Learning"
        />
        <ChoiceCard
          title="Design"
          description="Explore design principles."
          link="/design"
          linkLabel="Explore Design"
        />
        <ChoiceCard
          title="Develop"
          description="Build your development skills."
          link="/develop"
          linkLabel="Start Developing"
        />
        <ChoiceCard
          title="The Web"
          description="Understand the web."
          link="/web"
          linkLabel="Explore the Web"
        />
      </div>
    </div>
  );
};

export default ChoosePath;
