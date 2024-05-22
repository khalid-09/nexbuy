import { useSearchParams } from "react-router-dom";

import { Button } from "../ui/button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PAGE_SIZE = 8;

interface ProductPaginationProps {
  count: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ProductPagination = ({
  count,
  currentPage,
  onPageChange,
}: ProductPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
    onPageChange(next);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
    onPageChange(prev);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="m-auto flex max-w-6xl items-center justify-between gap-2 px-4 pb-12 font-poppins">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </Button>
        <Button
          variant="secondary"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default ProductPagination;
