import { GalleryItems } from '../../../assets/index';
import { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';

export default function Gallery() {
  const [illustrationsPerPage, setIllustrationsPerPage] = useState<number>(8);

  useEffect(() => {
    const updateIllustrationsPerPage = () => {
      setIllustrationsPerPage(8); // Fixed number of images for all screen sizes
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
        <p className="text-font-primary mb-4 max-sm:mb-3 w-full text-left text-2xl font-light">
          გალერეა
        </p>
        <div className="mb-6 grid gap-6 grid-cols-2 min-560 max-1081 max-1090 max-770 max-560">
          {currentIllustrations.map((item, index) => (
            <div
              key={index}
              className="relative w-[133px] h-[183px] overflow-hidden max-390 max-1090-size"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full rounded-lg object-cover shadow-[0px_4px_10px_0px_#88787833]"
              />
              <div className="absolute inset-0 lg:bg-black max-1442-dp-none opacity-40 rounded-lg transition-opacity duration-300 hover:opacity-0"></div>
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
