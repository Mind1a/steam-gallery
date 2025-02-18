import { GalleryItems } from '../../../assets/index';
import { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';

export default function Gallery() {
  const [illustrationsPerPage, setIllustrationsPerPage] = useState<number>(9); // Default to 9 for small screens

  useEffect(() => {
    const updateIllustrationsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setIllustrationsPerPage(8);
      } else if (window.innerWidth >= 640) {
        setIllustrationsPerPage(9);
      } else {
        setIllustrationsPerPage(6);
      }
    };

    updateIllustrationsPerPage();

    window.addEventListener('resize', updateIllustrationsPerPage);

    return () => window.removeEventListener('resize', updateIllustrationsPerPage);
  }, []);

  const totalPages = Math.ceil(GalleryItems.length / illustrationsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentIllustrations = GalleryItems.slice(
    (currentPage - 1) * illustrationsPerPage,
    currentPage * illustrationsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="mx-auto mb-[32px] flex w-full max-w-[1442px] flex-col items-center p-12 max-lg:p-6">
        <p className="text-font-primary mb-4 max-sm:mb-1 w-full text-left text-2xl font-light">
          გალერია
        </p>
        <div className="mb-6 grid min-h-[820px] grid-cols-4 gap-6 max-sm:gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {currentIllustrations.map((item, index) => (
            <div
              key={index}
              className="relative h-auto max-h-[400px] w-full max-w-[318px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full rounded-lg object-cover shadow-[0px_4px_10px_0px_#88787833]"
              />
              <div className="absolute inset-0 lg:bg-black opacity-40 rounded-lg transition-opacity duration-300 hover:opacity-0"></div>
            </div>
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
        ></Pagination>
      </div>
    </>
  );
}