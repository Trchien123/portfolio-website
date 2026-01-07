import React from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-368 px-4 md:px-6 lg:px-8 scroll-mt-20">
            {/* Header Section */}
            <div className="flex flex-col items-start text-left mb-12" data-aos="fade-up">
                <div className='flex gap-3'>
                    <Mail className="text-text-button" size={40}/>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-muted mb-4">Get In Touch</h2>
                </div>
                <p className="text-text-muted/60 max-w-2xl">
                    Want to discuss about any project or just want to say hi? Feel free to contact me!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Side: Contact Info */}
                <div className="space-y-8" data-aos="fade-up">
                    <h3 className="text-2xl font-semibold text-text-main">Contact Information</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-text-main/5 flex items-center justify-center group-hover:bg-text-muted/20 transition-colors">
                            <Mail className="text-text-muted" size={24} />
                            </div>
                            <div>
                            <p className="text-text-muted/40 text-sm">Email</p>
                            <p className="text-text-main font-medium">huynhtrungchienltt@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-text-main/5 flex items-center justify-center group-hover:bg-text-muted/20 transition-colors">
                            <Phone className="text-text-muted" size={24} />
                            </div>
                            <div>
                            <p className="text-text-muted/40 text-sm">Phone</p>
                            <p className="text-text-main font-medium">+84 394 394 694</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-text-main/5 flex items-center justify-center group-hover:bg-text-muted/20 transition-colors">
                            <MapPin className="text-text-muted" size={24} />
                            </div>
                            <div>
                            <p className="text-text-muted/40 text-sm">Location</p>
                            <p className="text-text-main font-medium">Ho Chi Minh City, Vietnam</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="grid grid-cols-8 gap-2 md:gap-3 px-1">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/huynh.trung.chien.2025" className="p-2 md:p-3 bg-bg-main/50 rounded-xl text-text-muted/60 border border-white/10 hover:text-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                            <FaFacebook size={20} />
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/tchiennn_0708/" className="p-2 md:p-3 bg-bg-main/50 rounded-xl text-text-muted/60 border border-white/10 hover:text-pink-500 hover:border-pink-500 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                            <FaInstagram size={20} />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/trung-chien-huynh-73a196360/" className="p-2 md:p-3 bg-bg-main/50 rounded-xl text-text-muted/60 border border-white/10 hover:text-blue-400 hover:border-blue-400 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                            <FaLinkedin size={20} />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/Trchien123" className="p-2 md:p-3 bg-bg-main/50 rounded-xl text-text-muted/60 border border-white/10 hover:text-text-main hover:border-white transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                            <FaGithub size={20} />
                        </a>

                        {/* Kaggle */}
                        <a href="https://www.kaggle.com/hunhtrungchin" className="p-2 md:p-3 bg-bg-main/50 rounded-xl text-text-muted/60 border border-white/10 hover:text-[#20BEFF] hover:border-[#20BEFF] transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                            <FaKaggle size={20} />
                        </a>

                        {/* Mail */}
                        <a href="mailto:huynhtrungchienltt@gmail.com" className="p-2 md:p-3 bg-bg-main/50 rounded-xl text-text-muted/60 border border-white/10 hover:text-[#EA4335] hover:border-[#EA4335] transition-all hover:-translate-y-1 flex flex-col md:flex-row items-center justify-center gap-2">
                            <IoMdMail size={20} />
                        </a>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Contact;