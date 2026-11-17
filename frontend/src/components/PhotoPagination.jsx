import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const PhotoPagination = ({
  handleNext,
  handlePrev,
  handlePageChange,
  page,
  totalPages,
}) => {
  const generatePages = () => {
    const pages = [];

    if (totalPages < 4) {
      // Show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page < 2) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (page >= totalPages - 1) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page, "...", totalPages);
      }
    }

    return pages;
  };

  const pagesToShow = generatePages();

  return (
    <div className="flex justify-start">
      <Pagination>
        <PaginationContent>
          {/* Prvious */}
          <PaginationItem>
            <PaginationPrevious
              onClick={page === 1 ? undefined : handlePrev}
              className={cn(
                "cursor-pointer",
                "text-ink",
                page === 1 && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>

          {pagesToShow.map((p, index) => (
            <PaginationItem key={index}>
              {p === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={p === page}
                  onClick={() => {
                    if (p !== page) handlePageChange(p);
                  }}
                  className={cn(
                    "cursor-pointer font-mono",
                    p === page ? "bg-fill text-on-fill hover:bg-fill" : "text-muted hover:text-ink"
                  )}
                >
                  {p}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* After */}
          <PaginationItem>
            <PaginationNext
              onClick={page === totalPages ? undefined : handleNext}
              className={cn(
                "cursor-pointer",
                "text-ink",
                page === totalPages && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PhotoPagination;