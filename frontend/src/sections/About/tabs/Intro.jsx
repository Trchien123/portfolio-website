import React from 'react';
import { portfolioData } from '@/lib/data';

const Intro = () => {
  const { intro } = portfolioData.about;

  return (
    <div className="space-y-6 animate-fade-in">
        <h3 className="text-2xl font-bold text-text-main">
            {intro.title} <span className="text-neon/80">{intro.subtitle}</span>
        </h3>

        {intro.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-text-muted/90 leading-loose text-base text-justify">
              {paragraph}
          </p>
        ))}
    </div>
  );
};

export default Intro;