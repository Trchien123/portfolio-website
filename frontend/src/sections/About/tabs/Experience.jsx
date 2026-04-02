import React from 'react';
import { portfolioData } from '@/lib/data';

/**
 * Experience Component
 * Renders a timeline of professional roles and internships.
 */
const Experience = () => {
  // Ensure 'experience' exists in your portfolioData.about
  const { experience } = portfolioData.about;

  return (
    <div className="space-y-10 animate-fade-in">
      {experience.map((item, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-text-muted/20">
          {/* Timeline bullet point */}
          <span className="absolute -left-2.25 w-4 h-4 rounded-full bg-bg-main border-2 border-text-button"></span>
          
          {/* Period/Time Range */}
          <div className="text-text-button font-bold font-spartan text-xl mb-1">{item.period}</div>
          
          {/* Job Title */}
          <h4 className="text-xl font-bold text-text-main">{item.role}</h4>
          
          {/* Company & Location Metadata */}
          <div className="text-sm font-bold text-text-muted/60 uppercase tracking-widest mb-3">
            {item.company} • {item.location}
          </div>

          <div className="text-text-muted/80 leading-relaxed space-y-4">
            {/* Responsibilities and Key Achievements */}
            <ul className="list-disc list-outside ml-4 space-y-2 text-sm md:text-base">
              {item.tasks && item.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="pl-1">
                  {task}
                </li>
              ))}
            </ul>

            {/* Tech Stack tags for ATS optimization and quick scanning */}
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {item.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-text-button/10 text-text-button text-xs font-mono rounded border border-text-button/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;