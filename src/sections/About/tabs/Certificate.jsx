import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '@/lib/data';

const Certificate = () => {
    const { certificates } = portfolioData.about;

    return (
        <div className="animate-fade-in">
            {/* Grid Layout: 1 column on mobile, 2 columns on tablet/desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                    <a 
                        key={cert.id}
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative bg-bg-main/5 border border-text-main/10 rounded-xl p-6 hover:bg-bg-main/10 hover:border-text-button/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Top Row: Date & Icon */}
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-text-button text-xs font-bold tracking-wider uppercase bg-text-button/10 px-2 py-1 rounded">
                                {cert.date}
                            </span>
                            <ExternalLink size={18} className="text-text-muted/40 group-hover:text-text-button transition-colors" />
                        </div>

                        {/* Middle: Title */}
                        <h4 className="text-lg font-bold text-text-main mb-2 group-hover:text-text-button transition-colors">
                            {cert.title}
                        </h4>

                        {/* Bottom: Issuer */}
                        <div className="flex items-center gap-2 text-sm font-bold text-text-muted/60 uppercase tracking-wide">
                            <Award size={14} />
                            {cert.issuer}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Certificate;