import { useState } from 'react';
import PaginationButtons from '../paginationButtons/PaginationButton';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}
export default function Pagination({
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center gap-1">
      <PaginationButtons
        text="წინა"
        variant="left"
        onClick={() => handlePageChange(currentPage - 1)}
      />{' '}
      <div className="flex justify-center items-center gap-2 w-full">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            className={`text-font-primary cursor-pointer rounded-lg bg-white px-4 py-2 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.07)] ${
              currentPage === i + 1
                ? 'text-primary-blue font-extrabold'
                : 'text-font-primary font-normal'
            }`}
            key={i}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <PaginationButtons
        text="შემდეგი"
        variant="right"
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </div>
  );
}
