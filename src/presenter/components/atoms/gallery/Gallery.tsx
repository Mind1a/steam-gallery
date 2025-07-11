// import { GalleryItemsInner } from '../../../assets/index';
import { useState } from 'react';
import Pagination from '../pagination/Pagination';
import { Link } from 'react-router-dom';
import { ChildrenItems } from '../../../assets';

export default function Gallery() {
  const totalPages = Math.ceil(ChildrenItems.length / 9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentIllustrations = ChildrenItems.slice(
    (currentPage - 1) * 9,
    currentPage * 9
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
        <div className="gap-6 grid grid-cols-2 md:grid-cols-3 mb-6">
          {currentIllustrations.map((item) => (
            <Link to={`/artistView/${item.id}`} key={item.id}>
              <div className="relative w-[133px] h-[183px] overflow-hidden max-390 max-1090-size">
                <img
                  src={item.images[0]}
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
