// import { GalleryItemsInner } from '../../../assets/index';
import { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import { Link } from 'react-router-dom';
import { ChildrenItems } from '../../../assets';

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

  const totalPages = Math.ceil(ChildrenItems.length / illustrationsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentIllustrations = ChildrenItems.slice(
    (currentPage - 1) * illustrationsPerPage,
    currentPage * illustrationsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="mx-auto mb-[32px] flex w-full max-w-[1442px] flex-col items-center p-12 max-lg:p-6">
        <p className="text-font-primary mb-4 w-full text-left text-2xl font-light max-sm:mb-3">
          გალერეა
        </p>
        <div className="min-560 max-1081 max-1090 max-770 max-560 mb-6 grid grid-cols-2 gap-6">
          {currentIllustrations.map((item) => (
            <Link to={`/artistView/${item.id}`} key={item.id}>
              <div className="max-390 max-1090-size relative h-[183px] w-[133px] overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-full w-full rounded-lg object-cover shadow-[0px_4px_10px_0px_#88787833]"
                />
                <div className="max-1442-dp-none absolute inset-0 rounded-lg opacity-40 transition-opacity duration-300 hover:opacity-0 lg:bg-black"></div>
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
