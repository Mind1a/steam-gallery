import { useEffect, useState } from 'react';
import { GalleryItemsInner } from '../../../assets';
import { Link, useParams } from 'react-router-dom';

export default function ArtistViewContent() {
  // ------- id for current item from dynamic routing ----------//
  const { id } = useParams<{ id: string }>();

  // ------- states for defining current item and main image ----------//
  const [galleryMain, setGalleryMain] = useState(GalleryItemsInner[0].image);
  const [currentItem, setCurrentItem] = useState(
    GalleryItemsInner.find((item) => item.id === id) || GalleryItemsInner[0]
  );

  // ------- handling items change deppending on router id ----------//
  useEffect(() => {
    const foundItems = GalleryItemsInner.find((item) => item.id === id);
    if (foundItems) {
      setCurrentItem(foundItems);
      setGalleryMain(foundItems.image);
    } else {
      setCurrentItem(GalleryItemsInner[0]);
      setGalleryMain(GalleryItemsInner[0].image);
    }
  }, [id]);

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
          {GalleryItemsInner.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setGalleryMain(item.image)}
              className={`cursor-pointer overflow-hidden rounded-sm ${galleryMain === item.image ? 'ring-footer-bg ring-2' : ''}`}
            >
              <img
                className="w-full h-full object-cover aspect-[3/4] hover:scale-[1.03] transition-transform"
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-4 md:basis-[49%]">
          <h2 className="font-[600] text-footer-bg md:text-[32px] text-2xl">
            {currentItem?.title}
          </h2>
          <p className="font-[300] text-[#333] text-[16px]">
            {currentItem?.description}
          </p>
        </div>
      </section>
      {/* Bottom section with 'See also' elements */}
      <section className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-[92px] max-w-[1442px]">
        <p className="text-font-primary text-2xl uppercase">see also</p>
        <div className="md:flex gap-4 md:gap-6 grid grid-cols-2">
          {GalleryItemsInner.slice(6).map((item) => (
            <Link
              className="md:basis-[204px]"
              to={`/artistView/${item.id}`}
              key={item.id}
            >
              <div className="bg-black rounded-lg overflow-hidden">
                <img
                  className="opacity-40 hover:opacity-100 w-full h-full object-cover aspect-[3/4] hover:scale-[1.03] transition-all duration-300"
                  src={item.image}
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
