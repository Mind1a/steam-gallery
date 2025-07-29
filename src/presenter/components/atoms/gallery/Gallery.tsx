// import { GalleryItemsInner } from '../../../assets/index';
import { useState } from 'react';
import Pagination from '../pagination/Pagination';
import { ChildrenItems } from '../../../assets';
import GalleryIllustration from './GalleryIllustration';

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
        <h2 className="mb-10 w-full text-font-primary font-bold text-4xl text-center">
          გალერეა
        </h2>
        <div className="gap-6 grid grid-cols-2 md:grid-cols-3 mb-6">
          {currentIllustrations.map((item) => (
            <GalleryIllustration key={item.id} item={item} />
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
