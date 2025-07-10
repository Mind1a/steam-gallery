import { useEffect, useState } from 'react';

export default function GalleryModal({
  closeModal,
  images,
}: {
  closeModal: () => void;
  images: string[];
}) {
  const [mainImage, setMainImage] = useState<string>('');

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  return (
    <div
      onClick={closeModal}
      className="top-0 left-0 z-30 fixed flex justify-center items-center bg-black/50 p-4 w-full min-h-screen"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative flex flex-col gap-6 bg-white shadow-lg p-6 pr-12 rounded-lg w-full max-w-4xl"
      >
        <button
          className="top-4 right-4 absolute text-gray-600 hover:text-black text-2xl transition cursor-pointer"
          onClick={closeModal}
        >
          X
        </button>
        <div className="flex md:flex-row flex-col items-start gap-6">
          <div className="flex-1">
            <img
              className="border rounded-md w-full max-h-[500px] object-contain"
              src={mainImage}
              alt={mainImage}
            />
          </div>
          <div className="flex md:flex-col gap-4 max-h-[500px] overflow-auto scrollbar-thin">
            {images.map((item) => (
              <img
                onClick={() => setMainImage(item)}
                key={item}
                src={item}
                alt={item}
                className={`h-20 w-20 cursor-pointer rounded-md border object-cover transition ${
                  mainImage === item
                    ? 'ring-2 ring-blue-500'
                    : 'hover:opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
