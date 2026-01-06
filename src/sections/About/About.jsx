import React, { useState } from 'react';
import AboutSidebar from './AboutSidebar';
import Intro from './tabs/Intro';
import Education from './tabs/Education';
import Achievement from './tabs/Achievement';
import Hobby from './tabs/Hobby';
import Photo from './tabs/Photo';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { ScanFace } from 'lucide-react';
import Certificate from './tabs/Certificate';

const About = () => {
    // React use state to control the state of the current selected tab
    const [activeTab, setActiveTab] = useState("intro");

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
        <section id="about" className="min-h-fit max-w-368 w-full flex flex-col mx-auto pb-20 md:pb-40 px-4 md:px-6 lg:px-8">
            {/* Title */}
            <div className="mb-10 flex gap-3" data-aos="fade-up">
                <ScanFace className="text-neon" size={40} />
                <h2 className="text-4xl md:text-5xl font-bold text-sage">About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12">
                {/* Side Bar */}
                <div className="md:col-span-4 lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
                    <div className="md:sticky md:top-32">
                        <AboutSidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
                        
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <h4 className="text-xs font-bold text-sage/40 uppercase tracking-widest mb-4 px-2">
                                Connect
                            </h4>
                            
                            <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-3 px-1">
                                
                                {/* Facebook */}
                                <a href="https://www.facebook.com/huynh.trung.chien.2025" className="p-2 md:p-3 bg-navy/50 rounded-xl text-sage/60 border border-white/10 hover:text-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                                    <FaFacebook size={20} />
                                    <span className="font-bold text-[12px] md:text-sm">Facebook</span>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/tchiennn_0708/" className="p-2 md:p-3 bg-navy/50 rounded-xl text-sage/60 border border-white/10 hover:text-pink-500 hover:border-pink-500 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                                    <FaInstagram size={20} />
                                    <span className="font-bold text-[12px] md:text-sm">Instagram</span>
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/trung-chien-huynh-73a196360/" className="p-2 md:p-3 bg-navy/50 rounded-xl text-sage/60 border border-white/10 hover:text-blue-400 hover:border-blue-400 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                                    <FaLinkedin size={20} />
                                    <span className="font-bold text-[12px] md:text-sm">LinkedIn</span>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Trchien123" className="p-2 md:p-3 bg-navy/50 rounded-xl text-sage/60 border border-white/10 hover:text-white hover:border-white transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                                    <FaGithub size={20} />
                                    <span className="font-bold text-[12px] md:text-sm">Github</span>
                                </a>

                                {/* Kaggle */}
                                <a href="https://www.kaggle.com/hunhtrungchin" className="p-2 md:p-3 bg-navy/50 rounded-xl text-sage/60 border border-white/10 hover:text-[#20BEFF] hover:border-[#20BEFF] transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                                    <FaKaggle size={20} />
                                    <span className="font-bold text-[12px] md:text-sm">Kaggle</span>
                                </a>

                                {/* Mail */}
                                <a href="mailto:huynhtrungchienltt@gmail.com" className="p-2 md:p-3 bg-navy/50 rounded-xl text-sage/60 border border-white/10 hover:text-[#EA4335] hover:border-[#EA4335] transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                                    <IoMdMail size={20} />
                                    <span className="font-bold text-[12px] md:text-sm">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8 lg:col-span-9" data-aos="fade-up" data-aos-delay="400">
                    <div className="min-h-112.5 md:h-150 bg-dusk/20 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-sm">
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