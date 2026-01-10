import React, { useState } from 'react';
import AboutSidebar from './AboutSidebar';
import Intro from './tabs/Intro';
import Education from './tabs/Education';
import Achievement from './tabs/Achievement';
import Hobby from './tabs/Hobby';
import Photo from './tabs/Photo';
import { ScanFace } from 'lucide-react';
import Certificate from './tabs/Certificate';
import { portfolioData } from '@/lib/data';

const About = () => {
    // React use state to control the state of the current selected tab
    const [activeTab, setActiveTab] = useState("intro");

    const { about } = portfolioData;

    // Render content function to render the content based on the selected tab
    const renderContent = () => {
        switch (activeTab) {
            case "intro": return <Intro/>;
            case "education": return <Education/>;
            case "achievement": return <Achievement/>;
            case "certificate": return <Certificate/>;
            case "hobby": return <Hobby/>;
            case "photo": return <Photo/>;
            default: return <Intro/>;
        }
    }
    return (
        <section id="about" className="min-h-fit max-w-368 w-full flex flex-col mx-auto pb-20 md:pb-40 px-4 md:px-6 lg:px-8 scroll-mt-20">
            {/* Title */}
            <div className="mb-10 flex gap-3" data-aos="fade-up">
                <ScanFace className="text-text-button" size={40} />
                <h2 className="text-4xl md:text-5xl font-bold text-text-muted">About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12">
                {/* Side Bar */}
                <div className="md:col-span-4 lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
                    <div className="md:sticky md:top-32">
                        <AboutSidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
                        
                        <div className="mt-6 pt-6 border-t border-text-muted/10">
                            <h4 className="text-xs font-bold text-text-muted/40 uppercase tracking-widest mb-4 px-2">
                                Connect
                            </h4>
                            
                            <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-3 px-1">
                                {about.socials.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a 
                                            key={index}
                                            href={social.url} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 md:p-3 bg-bg-surface/50 rounded-xl text-text-muted/60 border border-bg-surface transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2 ${social.color}`}
                                        >
                                            <Icon size={20} />
                                            <span className="font-bold text-[12px] md:text-sm">{social.name}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8 lg:col-span-9" data-aos="fade-up" data-aos-delay="400">
                    <div className="min-h-112.5 md:h-150 bg-bg-surface/50 border border-text-main/10 rounded-3xl relative overflow-hidden backdrop-blur-sm">
                        <div className="h-full overflow-y-auto p-5 md:p-8">
                            <div key={activeTab} className="animate-fade-in">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;