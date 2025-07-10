import { ChildrenItemsType } from '../../../assets';

export default function ArtistImagesGallery({
  galleryMain,
  setGalleryMain,
  currentItem,
  setOpenModal,
  openModal,
}: {
  galleryMain: string;
  setGalleryMain: React.Dispatch<React.SetStateAction<string>>;
  currentItem: ChildrenItemsType;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}) {
  return (
    <div className="gap-2 lg:gap-x-6 lg:gap-y-4 grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 h-[562px] lg:h-[540px] lg:shrink-0 lg:basis-[44%]">
      <div className="col-span-3 row-span-3 rounded-lg overflow-hidden cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={galleryMain}
          alt="gallery image"
        />
      </div>
      {currentItem.images.length > 3 ? (
        <>
          {currentItem.images.slice(0, 2).map((item) => (
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
          <div
            onClick={() => setOpenModal(!openModal)}
            className={`relative cursor-pointer overflow-hidden rounded-sm ${galleryMain === currentItem.images[2] ? 'ring-footer-bg ring-2' : ''}`}
          >
            <img
              className="w-full h-full object-cover aspect-[3/4] hover:scale-[1.03] transition-transform"
              src={currentItem.images[2]}
              alt={currentItem.images[2]}
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/40 font-semibold text-white text-3xl">
              +{currentItem.images.length - 3}
            </div>
          </div>
        </>
      ) : (
        currentItem.images.map((item) => (
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
        ))
      )}
    </div>
  );
}
