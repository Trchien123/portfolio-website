import React from 'react';
import { portfolioData } from '@/lib/data';

const Achievement = () => {
  const { achievements } = portfolioData.about;

  return (
    <div className="space-y-8 animate-fade-in">
        <div className="grid grid-cols-1 gap-4">
            {achievements.map((item, index) => (
                <div 
                    key={index} 
                    className="bg-bg-surface/40 p-6 rounded-xl border border-text-main/10 hover:border-text-button/40 transition-all group"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-bg-main rounded-lg text-text-button border border-text-button/20 group-hover:bg-text-button group-hover:text-text-main transition-colors">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main text-lg font-spartan">
                                {item.title}
                            </h4>
                            <div className="text-sm text-text-muted/50 font-bold mb-2">
                                {item.year}
                            </div>
                            <p className="text-text-muted/80 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Achievement;