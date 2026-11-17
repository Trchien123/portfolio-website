import { useState } from "react";
import PhotoPagination from "@/components/PhotoPagination";
import { portfolioData } from "@/lib/data";

const { photos } = portfolioData.about;

const Photo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = photos.length;
  const currentPhoto = photos[currentPage - 1];

  const handlePrev = (e) => {
    e?.preventDefault();
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = (e) => {
    e?.preventDefault();
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="space-y-6">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <figure className="border-2 border-line">
          <img key={currentPage} src={currentPhoto.src} alt={currentPhoto.title} loading="lazy" decoding="async" width={900} height={675} className="block aspect-4/3 w-full animate-fade-in object-cover" />
        </figure>
        <div key={`${currentPage}-text`} className="animate-fade-in space-y-3">
          <p className="font-mono text-sm tracking-wider text-dim uppercase">{currentPhoto.location}</p>
          <h3 className="text-3xl">{currentPhoto.title}</h3>
          {currentPhoto.description ? <p className="text-lg leading-relaxed">{currentPhoto.description}</p> : null}
          <p className="font-mono text-sm text-muted">
            Photo {currentPage} of {totalPages}
          </p>
        </div>
      </div>
      <PhotoPagination handleNext={handleNext} handlePrev={handlePrev} handlePageChange={setCurrentPage} page={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default Photo;
