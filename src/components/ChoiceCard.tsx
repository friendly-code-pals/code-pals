// components/ChoiceCard.tsx

import React from 'react';
import Link from 'next/link';

interface ChoiceCardProps {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({ title, description, link, linkLabel }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-xs m-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link className="text-blue-400 hover:underline" href={link}>
        {linkLabel}
      </Link>
    </div>
  );
};

export default ChoiceCard;

