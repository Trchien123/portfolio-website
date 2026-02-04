import React from 'react';
import { portfolioData } from '@/lib/data';

const Hobby = () => {
  const { hobbies } = portfolioData.about;

  return (
    <div className="space-y-8 animate-fade-in font-montserrat">
        
        {/* Hobbies */}
        <div>
            <h3 className="text-2xl font-bold text-text-main font-spartan mb-4">{hobbies.title}</h3>
            <div className="flex flex-wrap gap-3">
                {/* Tags */}
                {hobbies.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-bg-main rounded-full border border-text-muted/20 text-text-muted hover:text-text-button hover:border-text-button transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Description and Photos */}
        <div className="space-y-6">
            <p className="text-text-muted/90 leading-loose text-justify">
                {hobbies.description}
            </p>

            {/* Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hobbies.images.map((img, index) => (
                    <div key={index} className="bg-bg-surface/10 rounded-xl flex items-center justify-center border border-dashed border-text-muted/30 overflow-hidden">
                        {img ? (
                            <img src={img} alt={`Hobby ${index + 1}`} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-text-muted/40">Image {index + 1}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
};

export default Hobby;