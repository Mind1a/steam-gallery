import { GalleryItemsInner } from '../../../assets/index';
import { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [illustrationsPerPage, setIllustrationsPerPage] = useState<number>(8);

  useEffect(() => {
    const updateIllustrationsPerPage = () => {
      setIllustrationsPerPage(8); // Fixed number of images for all screen sizes
    };

    updateIllustrationsPerPage();
    window.addEventListener('resize', updateIllustrationsPerPage);

    return () =>
      window.removeEventListener('resize', updateIllustrationsPerPage);
  }, []);

  const totalPages = Math.ceil(GalleryItemsInner.length / illustrationsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentIllustrations = GalleryItemsInner.slice(
    (currentPage - 1) * illustrationsPerPage,
    currentPage * illustrationsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-col items-center mx-auto mb-[32px] p-12 max-lg:p-6 w-full max-w-[1442px]">
        <p className="mb-4 max-sm:mb-3 w-full text-font-primary font-light text-2xl text-left">
          გალერეა
        </p>
        <div className="gap-6 grid grid-cols-2 mb-6 min-560 max-1081 max-1090 max-770 max-560">
          {currentIllustrations.map((item) => (
            <Link to={`/artistView/${item.id}`} key={item.id}>
              <div className="relative w-[133px] h-[183px] overflow-hidden max-390 max-1090-size">
                <img
                  src={item.image}
                  alt={item.title}
                  className="shadow-[0px_4px_10px_0px_#88787833] rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 lg:bg-black opacity-40 hover:opacity-0 rounded-lg transition-opacity duration-300 max-1442-dp-none"></div>
              </div>
            </Link>
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
