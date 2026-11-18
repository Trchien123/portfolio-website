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

// Page numbers to show, with "..." standing in for skipped ranges.
function getVisiblePages(page, totalPages) {
  if (totalPages < 4) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (page < 2) {
    return [1, 2, 3, "...", totalPages];
  }
  if (page >= totalPages - 1) {
    return [1, "...", totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, "...", page, "...", totalPages];
}

function PhotoPagination({ handleNext, handlePrev, handlePageChange, page, totalPages }) {
  const isFirst = page === 1;
  const isLast = page === totalPages;
  const pagesToShow = getVisiblePages(page, totalPages);

  return (
    <div className="flex justify-start">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={isFirst ? undefined : handlePrev}
              className={cn("cursor-pointer text-ink", isFirst && "pointer-events-none opacity-50")}
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

          <PaginationItem>
            <PaginationNext
              onClick={isLast ? undefined : handleNext}
              className={cn("cursor-pointer text-ink", isLast && "pointer-events-none opacity-50")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PhotoPagination;