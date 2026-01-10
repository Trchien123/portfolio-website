import React, { useState } from 'react';
import PhotoPagination from '@/components/PhotoPagination';
import { portfolioData } from '@/lib/data';

const Photo = () => {
    // Access photos from centralized data
    const { photos } = portfolioData.about;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;
    const totalPages = Math.ceil(photos.length / itemsPerPage);
    
    const handlePrev = (e) => {
        if (e) e.preventDefault();
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNext = (e) => {
        if (e) e.preventDefault();
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Get current photo data from the data file
    const currentPhoto = photos[currentPage - 1];

    return (
        <div className="w-full max-w-4xl mx-auto animate-fade-in space-y-8">
            
            {/* MAIN CONTENT AREA (Grid Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* LEFT: Image Section */}
                <div className="relative group w-full aspect-square md:aspect-4/3 rounded-2xl overflow-hidden border border-text-main/10 bg-bg-main">
                    {/* The 'key' ensures the image fades in again when page changes */}
                    <img 
                        key={currentPage} 
                        src={currentPhoto.src} 
                        alt={currentPhoto.title}
                        className="w-full h-full object-cover animate-fade-in zoom-in-95 duration-500"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-bg-main/60 to-transparent opacity-50"></div>
                </div>

                {/* Description Section */}
                <div key={`${currentPage}-text`} className="space-y-4 animate-fade-in duration-500">
                    <div className="inline-block px-3 py-1 rounded-full bg-text-button/10 border border-text-button/20 text-text-button text-xs font-bold uppercase tracking-wider">
                        {currentPhoto.location}
                    </div>
                    
                    <h3 className="md:text-3xl text-2xl font-bold text-text-main font-spartan">
                        {currentPhoto.title}
                    </h3>
                    
                    <p className="text-text-muted/80 leading-relaxed text-base">
                        {currentPhoto.description}
                    </p>

                    <div className="pt-4 flex items-center gap-2 text-sm text-text-muted/50">
                        <span>Photo {currentPage} of {totalPages}</span>
                        <div className="h-px bg-bg-main/20 flex-1"></div>
                    </div>
                </div>
            </div>

            {/* PAGINATION CONTROLS */}
            <PhotoPagination 
                handleNext={handleNext} 
                handlePageChange={handlePageChange} 
                handlePrev={handlePrev} 
                page={currentPage} 
                totalPages={totalPages}
            />
        </div>
    );
};

export default Photo;