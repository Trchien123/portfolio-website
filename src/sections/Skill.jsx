import React from 'react';
import { CheckCircle2, CircleDashed, Cpu, Globe } from 'lucide-react';

const Skill = () => {
    const skillSets = [
        {
            id: 'ai',
            title: "Artificial Intelligence & Data",
            icon: <Cpu size={24} />,
            description: "Focusing on Computer Vision and Deep Learning algorithms.",
            proficient: [
                "Python",
                "TensorFlow / Keras",
                "OpenCV",
                "Pandas & NumPy",
                "Scikit-learn",
                "Machine Learning",
                "Deep Learning",
                "Transformers (LLMs)"
            ],
            learning: [
                "C++ (Basics)",
                "PyTorch",
                "Model Deployment",
                "System Design",
                "Reinforcement Learning",
                "MLOps"
            ]
        },
        {
            id: 'web',
            title: "Web Development",
            icon: <Globe size={24} />,
            description: "Exploring frontend & backend to build user interfaces for AI apps.",
            proficient: [], 
            learning: [
                "HTML5 & CSS3",
                "React.js",
                "Tailwind CSS",
                "JavaScript (ES6+)",
                "Git & GitHub",
                "Streamlit"
            ]
        }
    ];

    return (
        <div id="skills" className="w-full min-h-fit pb-20 md:pb-40 max-w-368 mx-auto space-y-12 px-4 md:px-6 lg:px-8 scroll-mt-20">
            
            <div className="text-left mx-auto mb-12" data-aos="fade-up">
                <div className="flex gap-3">
                    <Cpu className='text-text-button' size={40}/>
                    <h2 className="text-4xl md:text-5xl text-text-muted mb-4">Skills</h2>
                </div>
                <p className="text-text-muted/80 text-base">
                    My core strength lies in <span className="text-text-main font-bold">Machine Learning</span>, while I am actively expanding my skillset in <span className="text-text-main font-bold">Web Development</span>.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {skillSets.map((category, index) => (
                    <div 
                        key={category.id} 
                        className="bg-bg-surface/30 border border-text-main/10 rounded-3xl p-8 flex flex-col hover:border-text-button/80 transition-colors duration-300"
                        data-aos="fade-up"  
                        data-aos-delay={index * 100}
                    >
                        
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6 border-b border-text-main/10 pb-4">
                            <div className="p-3 bg-text-button/10 rounded-xl text-text-button">
                                {category.icon}
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
                                        <CircleDashed className="-translate-y-0.5"x size={14} /> 
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
                ))}
            </div>
        </div>
    );
};

export default Skill;