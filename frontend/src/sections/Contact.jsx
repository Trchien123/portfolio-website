import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';

const Contact = () => {
    const { contact, about } = portfolioData;

    return (
        <section id="contact" className="py-20 scroll-mt-20">
            <div className="mx-auto max-w-368 px-4 md:px-6 lg:px-8 scroll-mt-20">
                {/* Header Section */}
                <div className="flex flex-col items-start text-left mb-12" data-aos="fade-up">
                    <div className='flex gap-3'>
                        <Mail className="text-text-button" size={40}/>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-muted mb-4">{contact.title}</h2>
                    </div>
                    <p className="text-text-muted/60 max-w-2xl">
                        {contact.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Contact Info */}
                    <div className="space-y-8" data-aos="fade-up">
                        <h3 className="text-2xl font-semibold text-text-main">Contact Information</h3>
                        
                        <div className="space-y-6">
                            {contact.details.map((detail, index) => {
                                const Icon = detail.icon;
                                return (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-lg bg-text-main/5 flex items-center justify-center group-hover:bg-text-muted/20 transition-colors">
                                            <Icon className="text-text-muted" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-text-muted/40 text-sm">{detail.label}</p>
                                            {detail.href ? (
                                                <a href={detail.href} className="text-text-main font-medium hover:text-text-button transition-colors">
                                                    {detail.value}
                                                </a>
                                            ) : (
                                                <p className="text-text-main font-medium">{detail.value}</p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social Media Links Loop */}
                        <div className="grid grid-cols-8 gap-2 md:gap-3 px-1">
                            {about.socials.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={index}
                                        href={social.url} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 md:p-3 bg-bg-main/50 rounded-xl text-text-muted/60 border border-white/10 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2 ${social.color}`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;