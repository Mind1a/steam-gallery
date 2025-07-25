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
    <div className="grid h-[562px] grid-cols-3 grid-rows-4 gap-2 lg:h-[540px] lg:shrink-0 lg:basis-[44%] lg:grid-cols-4 lg:grid-rows-3 lg:gap-x-6 lg:gap-y-4">
      <div className="col-span-3 row-span-3 cursor-pointer overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover"
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
                className="aspect-[3/4] h-full w-full object-cover transition-transform hover:scale-[1.03]"
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
              className="aspect-[3/4] h-full w-full object-cover transition-transform hover:scale-[1.03]"
              src={currentItem.images[2]}
              alt={currentItem.images[2]}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-3xl font-semibold text-white">
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
              className="aspect-[3/4] h-full w-full object-cover transition-transform hover:scale-[1.03]"
              src={item}
              alt={item}
            />
          </div>
        ))
      )}
    </div>
  );
}
