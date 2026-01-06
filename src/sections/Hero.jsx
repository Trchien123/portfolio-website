import React from 'react';
import ProfileImage from "../assets/image.jpg";
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="min-h-fit max-w-368 flex justify-between items-center mx-auto py-40 pb-20 md:pb-40 px-4 md:px-6 lg:px-8">
        <div className="md:w-[70%] w-full flex flex-col" data-aos="fade-up">
            <div className="md:text-lg text-md text-sage/90 tracking-wide">
                Hiiii, my name is
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-sage tracking-tighter">
                Huynh Trung Chien.    
            </h2>
            <div className="md:text-lg text-md text-justify max-w-3xl text-sage/90 leading-loose tracking-wide">
                <div className="md:text-lg text-md pt-5">
                    I’m an AI Student and Machine Learning enthusiast. I enjoy turning complex datasets into simple, intelligent, and impactful solutions.
                </div>
                <div className="md:text-lg text-md pt-5">
                    My job is to build models that are functional and accurate, but also ethical and transparent. I add a technical edge to your projects by bridging the gap between raw algorithms and real-world needs. My aim is to bring your data to life through the most innovative AI techniques."
                </div>
            </div>
            <div className="flex gap-6 pt-5">
                <Button onClick={() => console.log("Download CV")}>
                    Download CV
                </Button>

                <Button variant="outline">
                    About Me
                </Button>
            </div>
        </div>
        <div className="w-[30%] justify-end hidden lg:flex" data-aos="fade-up" data-aos-delay="100">
            <img
                src={ProfileImage}
                alt="Huynh Trung Chien"
                className="w-full max-w-2xl h-auto object-cover rounded-2xl  shadow-2xlshadow-navy/50 border border-white/20"
            />
        </div>
    </section>
  )
}

export default Hero;
