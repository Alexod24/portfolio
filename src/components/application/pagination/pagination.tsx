import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  className?: string;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  rounded?: boolean;
}

export function PaginationPageDefault({
  className,
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  rounded,
}: PaginationProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-t border-border px-4 py-3 sm:px-6",
        className,
      )}
    >
      <div className="flex flex-1 justify-between sm:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage >= totalPages}
        >
          Next
        </Button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">1</span> to{" "}
            <span className="font-medium text-foreground">10</span> of{" "}
            <span className="font-medium text-foreground">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-l-md"
              onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
              disabled={currentPage <= 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              className="relative z-10 inline-flex items-center bg-primary text-primary-foreground focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              1
            </Button>
            <Button
              variant="ghost"
              className="relative inline-flex items-center text-foreground ring-1 ring-inset ring-border hover:bg-muted focus:z-20 focus:outline-offset-0"
            >
              2
            </Button>
            <Button
              variant="ghost"
              className="relative hidden items-center text-foreground ring-1 ring-inset ring-border hover:bg-muted focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </Button>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border focus:outline-offset-0">
              ...
            </span>
            <Button
              variant="ghost"
              className="relative hidden items-center text-foreground ring-1 ring-inset ring-border hover:bg-muted focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </Button>
            <Button
              variant="ghost"
              className="relative inline-flex items-center text-foreground ring-1 ring-inset ring-border hover:bg-muted focus:z-20 focus:outline-offset-0"
            >
              9
            </Button>
            <Button
              variant="ghost"
              className="relative inline-flex items-center text-foreground ring-1 ring-inset ring-border hover:bg-muted focus:z-20 focus:outline-offset-0"
            >
              10
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-r-md"
              onClick={() =>
                onPageChange?.(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage >= totalPages}
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
