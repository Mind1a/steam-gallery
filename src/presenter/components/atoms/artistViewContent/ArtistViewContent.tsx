import { useEffect, useState } from 'react';
import { ChildrenItems, ChildrenItemsType } from '../../../assets';
import { Link, useParams } from 'react-router-dom';

export default function ArtistViewContent() {
  // ------- id for current item from dynamic routing ----------//
  const { id } = useParams<{ id: string }>();

  // ------- states for defining current item and main image ----------//
  const [galleryMain, setGalleryMain] = useState<string>();
  const [currentItem, setCurrentItem] = useState<ChildrenItemsType>();

  // ------- handling items change deppending on router id ----------//
  useEffect(() => {
    const foundItem = ChildrenItems.find((item) => item.id === id);
    if (foundItem) {
      setCurrentItem(foundItem);
      setGalleryMain(foundItem.images?.[0]);
    }
  }, [id]);

  console.log(currentItem);

  if (!currentItem) return null;

  return (
    <div className="flex flex-col flex-1 gap-6 md:gap-12 px-6 lg:px-[49px]">
      {/* Upper section with images gallery and product info */}
      <section className="flex md:flex-row flex-col justify-between gap-4 md:gap-0 mt-2 md:mt-[60px] max-w-[1442px]">
        <div className="gap-2 lg:gap-x-6 lg:gap-y-4 grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 h-[562px] lg:h-[540px] lg:shrink-0 lg:basis-[44%]">
          <div className="col-span-3 row-span-3 rounded-lg overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src={galleryMain}
              alt="gallery image"
            />
          </div>
          {currentItem.images.slice(0, 3).map((item) => (
            <div
              key={item}
              onClick={() => setGalleryMain(item)}
              className={`cursor-pointer overflow-hidden rounded-sm ${galleryMain === item ? 'ring-footer-bg ring-2' : ''}`}
            >
              <img
                className="w-full h-full object-cover aspect-[3/4] hover:scale-[1.03] transition-transform"
                src={item}
                alt={item}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-4 md:basis-[49%]">
          <h2 className="font-[600] text-footer-bg md:text-[32px] text-2xl">
            {currentItem.title}
          </h2>
          <p className="font-[300] text-[#333] text-[16px]">
            {currentItem.description}
          </p>
          <p className="font-[300] text-[#333] md:text-[16px] text-lg">
            <span className="font-[600] text-footer-bg">მოსწავლის სახელი:</span>{' '}
            {currentItem.authorName}
          </p>
          <p className="font-[300] text-[#333] md:text-[16px] text-lg">
            <span className="font-[600] text-footer-bg">სკოლა:</span>{' '}
            {currentItem.authorSchool}
          </p>
          <p className="font-[300] text-[#333] md:text-[16px] text-lg">
            <span className="font-[600] text-footer-bg">კლასი:</span>{' '}
            {currentItem.authorClassGrade}
          </p>
          <p className="font-[300] text-[#333] md:text-[16px] text-lg">
            <span className="font-[600] text-footer-bg">ელ.ფოსტა:</span>{' '}
            {currentItem.authorEmail}
          </p>
        </div>
      </section>
      {/* Bottom section with 'See also' elements */}
      <section className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-[92px] max-w-[1442px]">
        <p className="text-font-primary text-2xl uppercase">see also</p>
        <div className="md:flex gap-4 md:gap-6 grid grid-cols-2">
          {ChildrenItems.slice(0, 6).map((item) => (
            <Link
              className="md:basis-[204px]"
              to={`/artistView/${item.id}`}
              key={item.id}
            >
              <div className="bg-black rounded-lg overflow-hidden">
                <img
                  className="opacity-40 hover:opacity-100 w-full h-full object-cover aspect-[3/4] hover:scale-[1.03] transition-all duration-300"
                  src={item.images[0]}
                  alt={item.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
