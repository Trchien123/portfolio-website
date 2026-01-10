import React from 'react';
import { CheckCircle2, CircleDashed, Cpu } from 'lucide-react';
import { portfolioData } from '@/lib/data';

const Skill = () => {
    const { skills } = portfolioData;

    return (
        <div id="skills" className="w-full min-h-fit pb-20 md:pb-40 max-w-368 mx-auto space-y-12 px-4 md:px-6 lg:px-8 scroll-mt-20">
            
            {/* SECTION HEADER */}
            <div className="text-left mx-auto mb-12" data-aos="fade-up">
                <div className="flex gap-3">
                    <Cpu className='text-text-button' size={40}/>
                    <h2 className="text-4xl md:text-5xl text-text-muted mb-4">Skills</h2>
                </div>
                <p className="text-text-muted/80 text-base">
                    {skills.intro}
                </p>
            </div>

            {/* SKILLS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {skills.skillSets.map((category, index) => {
                    const Icon = category.icon; // Capitalize to render as component
                    return (
                        <div 
                            key={category.id} 
                            className="bg-bg-surface/30 border border-text-main/10 rounded-3xl p-8 flex flex-col hover:border-text-button/80 transition-colors duration-300"
                            data-aos="fade-up"  
                            data-aos-delay={index * 100}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6 border-b border-text-main/10 pb-4">
                                <div className="p-3 bg-text-button/10 rounded-xl text-text-button">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-text-main">{category.title}</h4>
                                    <p className="text-base text-text-muted/60">{category.description}</p>
                                </div>
                            </div>

                            <div className="flex-1 space-y-8">
                                {/* SECTION 1: PROFICIENT */}
                                {category.proficient.length > 0 && (
                                    <div>
                                        <h5 className="text-text-button font-bold uppercase tracking-widest text-base mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="-translate-y-0.5" size={14} /> Proficient
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {category.proficient.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-text-main/5 border border-text-main/10 rounded-lg text-text-muted text-base hover:bg-text-button/10 hover:text-text-button transition-colors cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* SECTION 2: LEARNING */}
                                {category.learning.length > 0 && (
                                    <div>
                                        <h5 className="text-text-muted font-bold uppercase tracking-widest text-base mb-4 flex items-center gap-2">
                                            <CircleDashed className="-translate-y-0.5" size={14} /> 
                                            Currently Learning & Exploring
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {category.learning.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-transparent border border-text-main/5 border-dashed rounded-lg text-text-muted/60   text-base hover:text-text-main hover:border-text-main/40 transition-colors cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skill;