import React, { useState } from 'react';
import { ExternalLink, FolderGit2, ArrowRight, Folder, ArrowUp } from 'lucide-react';
import Button from '@/components/Button';
import { portfolioData } from '@/lib/data';

const Project = () => {
    // Access projects from centralized data
    const { projects } = portfolioData;

    // State to keep track of projects per page
    const [visibleCount, setVisibleCount] = useState(3);

    // Handle when users click show more, 3 more projects will be shown
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    // Reset view to 3 projects and scroll back to the header of the project section
    const handleSeeLess = () => {
        setVisibleCount(3);
        const section = document.getElementById('projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="projects" className="w-full min-h-fit max-w-368 mx-auto animate-fade-in pb-20 md:pb-40 px-4 md:px-6 lg:px-8 scroll-mt-20">
            <h2 className="text-4xl md:text-5xl mb-10 flex gap-3" data-aos="fade-up">
                <Folder className='text-text-button' size={40}/>
                Projects
            </h2>
        
            {/* 2. THE RESPONSIVE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {projects.slice(0, visibleCount).map((project, index) => (
                    <a 
                        key={project.id} 
                        className="group flex flex-col bg-bg-surface/30 border border-text-main/10 rounded-2xl overflow-hidden hover:border-text-button/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay={(index % 3) * 100}
                        href={project.link}
                    >
                        
                        {/* IMAGE SECTION */}
                        <div className="relative w-full h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-bg-main/20 group-hover:bg-transparent z-10 transition-colors duration-300"></div>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* CONTENT SECTION */}
                        <div className="p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-text-main group-hover:text-text-button transition-colors">
                                    {project.title}
                                </h3>
                                <FolderGit2 className="text-text-muted/80 translate-y-1.25 group-hover:text-text-main transition-colors" size={20} />
                            </div>
                            
                            <p className="text-text-muted/80 text-base leading-relaxed mb-4 line-clamp-4">
                                {project.description}
                            </p>
                        </div>

                        {/* FOOTER SECTION */}
                        <div className="p-6 pt-0 mt-auto">
                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, techIdx) => (
                                    <span key={techIdx} className="text-sm font-mono text-text-button bg-text-button/10 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* The Link Button */}
                            <a 
                                href={project.link}
                                className="flex items-center gap-2 text-sm font-bold text-text-main group-hover:text-text-button transition-colors w-fit"
                            >
                                View Project 
                                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </a>
                ))}
            </div>

            {/* 4. LOAD MORE & SEE LESS BUTTON SECTION */}
            <div className="flex justify-center mt-12 gap-4">
                {visibleCount < projects.length ? (
                    <Button 
                        variant='outline'
                        onClick={handleLoadMore}
                    >
                        Load More
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                ) : (
                    /* Show 'See Less' only if there are more than 3 projects total */
                    projects.length > 3 && (
                        <Button 
                            variant='outline'
                            onClick={handleSeeLess}
                            className="border-red-500/50 text-red-400 hover:bg-red-500/50 hover:text-text-muted"
                        >
                            See Less
                            <ArrowUp size={18} className="ml-2 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    )
                )}
            </div>
        </div>
    );
};

export default Project;