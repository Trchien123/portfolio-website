import React from 'react';
import Button from '../../components/Button';
import {User, GraduationCap, Trophy, Award, BookHeart, Camera} from "lucide-react";

const AboutSidebar = ({activeTab, setActiveTab}) => {
    const menuItems = [
        {id: "intro", label: "Overview", icon: User},
        {id: "education", label: "Education", icon: GraduationCap},
        {id: "achievement", label: "Achievements", icon: Trophy},
        {id: "certificate", label: "Certificates", icon: Award},
        {id: "hobby", label: "Hobbies", icon: BookHeart},
        {id: "photo", label: "Photos", icon: Camera}
    ];

    return (
        <div className="w-full">
            <div className="hidden md:block text-xs font-bold text-text-muted/40 uppercase tracking-widest mb-4 px-2">
                Navigation
            </div>

            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <Button
                            key={item.id}
                            variant={isActive ? "active" : "ghost"}
                            onClick= {() => setActiveTab(item.id)}
                            className="w-full whitespace-nowrap md:whitespace-normal"
                        >  
                            {/* Icon */}
                            <Icon className={`w-5 h-5 ${isActive ? "text-text-button" : "text-text-muted/50"}`} />

                            {/* Label */}
                            <span className="text-md md:text-base ml-3">{item.label}</span>

                            {/* Marking */}
                            {isActive && (
                                <span className="hidden md:block ml-auto w-1.5 h-1.5 rounded-full bg-neon animate-pulse shadow-neon"></span>
                            )}

                        </Button>
                    )
                })}
            </div>
        </div>
    )
};

export default AboutSidebar;
