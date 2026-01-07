import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const Certificate = () => {
    const certificates = [
        {
            id: 1,
            date: "June 2025",
            title: "Deep Learning Specialization",
            issuer: "DeepLearning.AI - Coursera",
            link: "https://www.coursera.org/account/accomplishments/specialization/YOUR_ID_HERE" 
        },
        {
            id: 2,
            date: "June 2025",
            title: "Generative AI with LLMs",
            issuer: "DeepLearning.AI - Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/YOUR_ID_HERE"
        },
        {
            id: 3,
            date: "April 2025",
            title: "Mathematics for Machine Learning",
            issuer: "Imperial College London",
            link: "#"
        },
        // Adding a 4th dummy item to show how the grid fills up nicely
        {
            id: 4,
            date: "Jan 2025",
            title: "TensorFlow Developer Certificate",
            issuer: "Google",
            link: "#"
        }
    ];

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