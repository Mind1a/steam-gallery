import { useState } from 'react';

export default function ArtistViewContent() {
  
  const images = [
    '/assets/images/gallery-images/gallery-image-1.jpg',
    '/assets/images/gallery-images/gallery-image-2.jpg',
    '/assets/images/gallery-images/gallery-image-3.jpg',
    '/assets/images/gallery-images/gallery-image-4.jpg',
    '/assets/images/gallery-images/gallery-image-5.jpg',
    '/assets/images/gallery-images/gallery-image-6.jpg',
  ];

  const [galleryMain, setGalleryMain] = useState(images[0]);

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
          {images.slice(3).map((image) => (
            <div
              key={image}
              onClick={() => setGalleryMain(image)}
              className="rounded-sm overflow-hidden cursor-pointer"
            >
              <img
                className="w-full h-full object-cover aspect-[3/4]"
                src={image}
                alt="gallery image"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-4 md:pl-10 max-w-[660px]">
          <h2 className="font-[600] text-[#8B0000] md:text-[32px] text-2xl">
            პროდუქტი
          </h2>
          <p className="font-[300] text-[#333] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis q~ias error harum maxime
            adipisci amet laborum. Perspiciatis
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-[92px] max-w-[1442px]">
        <p className="text-[#5C4033] text-2xl uppercase">see also</p>
        <div className="md:flex gap-4 md:gap-6 grid grid-cols-2">
          {images.map((image) => (
            <div
              key={image}
              className="rounded-lg w-full md:max-w-[204px] max-h-[208px] md:max-h-[272px] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[3/4]"
                src={image}
                alt="gallery image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
