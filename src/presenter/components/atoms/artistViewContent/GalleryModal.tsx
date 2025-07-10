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
      className="fixed top-0 left-0 z-30 flex min-h-screen w-full items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative flex w-full max-w-4xl flex-col gap-6 rounded-lg bg-white p-6 pr-12 shadow-lg"
      >
        <button
          className="absolute top-4 right-4 cursor-pointer text-2xl text-gray-600 transition hover:text-black"
          onClick={closeModal}
        >
          X
        </button>
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <div className="flex-1">
            <img
              className="max-h-[500px] w-full rounded-md border object-contain"
              src={mainImage}
              alt={mainImage}
            />
          </div>
          <div className="scrollbar-thin flex max-h-[500px] gap-4 overflow-auto md:flex-col">
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
