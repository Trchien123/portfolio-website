import React, { useState } from 'react';
import PhotoPagination from '@/components/PhotoPagination';

const photos = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000", // Replace with your local path: /images/photo1.jpg
        title: "Working on AI Project",
        description: "Developing a computer vision model for face recognition using Python and TensorFlow. This project involved training on the CelebA dataset and implementing anti-spoofing measures.",
        location: "Hanoi, Vietnam"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1528127223428-ff0052ed7a85?auto=format&fit=crop&q=80&w=1000",
        title: "Exploring Hanoi",
        description: "A memorable trip to the Old Quarter in Hanoi. I love the vibrant street life and the historical architecture here.",
        location: "Old Quarter, Hanoi"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
        title: "University Life",
        description: "Collaborating with my team at Swinburne University during a hackathon. We built a solution for accessible living support systems.",
        location: "Swinburne University"
    },
];

const Photo = () => {
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

    // Get current photo data
    const currentPhoto = photos[currentPage - 1];

    return (
        <div className="w-full max-w-4xl mx-auto animate-fade-in space-y-8">
            
            {/* 3. MAIN CONTENT AREA (Grid Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* LEFT: Image Section */}
                <div className="relative group w-full aspect-square md:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 bg-black">
                    {/* The 'key' ensures the image fades in again when page changes */}
                    <img 
                        key={currentPage} 
                        src={currentPhoto.src} 
                        alt={currentPhoto.title}
                        className="w-full h-full object-cover animate-fade-in zoom-in-95 duration-500"
                    />
                    
                    {/* Optional: Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-50"></div>
                </div>

                {/* RIGHT: Description Section */}
                <div key={`${currentPage}-text`} className="space-y-4 animate-fade-in duration-500">
                    <div className="inline-block px-3 py-1 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-bold uppercase tracking-wider">
                        {currentPhoto.location}
                    </div>
                    
                    <h3 className="md:text-3xl text-2xl font-bold text-white font-spartan">
                        {currentPhoto.title}
                    </h3>
                    
                    <p className="text-sage/80 leading-relaxed text-base">
                        {currentPhoto.description}
                    </p>

                    <div className="pt-4 flex items-center gap-2 text-sm text-sage/50">
                        <span>Photo {currentPage} of {totalPages}</span>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                </div>
            </div>

            {/* 4. PAGINATION CONTROLS */}
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
