import React from 'react';
import { portfolioData } from '@/lib/data';

const Education = () => {
  const { education } = portfolioData.about;

  return (
    <div className="space-y-10 animate-fade-in">
        
        {education.map((item, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-text-muted/20">
              {/* Green Circle */}
              <span className="absolute -left-2.25 w-4 h-4 rounded-full bg-bg-main border-2 border-text-button"></span>
              
              <div className="text-text-button font-bold font-spartan text-xl mb-1">{item.year}</div>
              <h4 className="text-xl font-bold text-text-main">{item.degree}</h4>
              <div className="text-sm font-bold text-text-muted/60 uppercase tracking-widest mb-3">
                  {item.institution}
              </div>
              <div className="text-text-muted/80 leading-relaxed space-y-3">
                  <p>
                      <span className="block mt-1 text-text-muted/80 font-semibold">
                          GPA: {item.gpa}
                      </span>
                  </p>

                  {/* Achievements Block */}
                  {item.awards && item.awards.length > 0 && (
                    <div className="bg-text-main/10 p-3 rounded-lg border border-text-main/10 mt-2">
                        <p className="text-text-button text-sm font-bold mb-2 flex items-center gap-2">
                            {item.awardsTitle || "🏆 Achievements:"}
                        </p>
                        <ul className="space-y-2 text-sm">
                            {item.awards.map((award, awardIndex) => (
                              <li key={awardIndex} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-text-main/10 pb-1 last:border-0 last:pb-0">
                                  <span className="text-text-main">{award.name}</span>
                                  <span className="text-text-muted/50 font-mono text-xs">{award.code}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                  )}
              </div>
          </div>
        ))}

    </div>
  );
};

export default Education;