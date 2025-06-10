import { useEffect, useState } from 'react';
import { GalleryItemsInner } from '../../../assets';
import { useParams } from 'react-router-dom';

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
    const fountItem = GalleryItemsInner.find((item) => item.id === id);
    if (fountItem) {
      setCurrentItem(fountItem);
      setGalleryMain(fountItem.image);
    } else {
      setCurrentItem(GalleryItemsInner[0]);
      setGalleryMain(GalleryItemsInner[0].image);
    }
  }, [id]);

  return (
    <div className="flex flex-col flex-1 gap-6 md:gap-12 px-6 lg:px-[49px]">
      <section className="flex md:flex-row flex-col justify-between gap-4 md:gap-0 mt-2 md:mt-[60px] max-w-[1442px]">
        <div className="gap-2 md:gap-x-6 md:gap-y-4 grid grid-cols-3 md:grid-cols-4 grid-rows-4 md:grid-rows-3 md:max-w-[598px] max-h-[540px]">
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
              className="rounded-sm overflow-hidden cursor-pointer"
            >
              <img
                className="w-full h-full object-cover aspect-[3/4]"
                src={item.image}
                alt="gallery item"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-4 md:pl-10 max-w-[660px]">
          <h2 className="font-[600] text-[#8B0000] md:text-[32px] text-2xl">
            {currentItem?.title}
          </h2>
          <p className="font-[300] text-[#333] text-[16px]">
            {currentItem?.description}
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-[92px] max-w-[1442px]">
        <p className="text-[#5C4033] text-2xl uppercase">see also</p>
        <div className="md:flex gap-4 md:gap-6 grid grid-cols-2">
          {GalleryItemsInner.slice(6).map((item) => (
            <div
              key={item.id}
              className="rounded-lg md:max-w-[204px] md:max-h-[272px] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[3/4]"
                src={item.image}
                alt="gallery item"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
