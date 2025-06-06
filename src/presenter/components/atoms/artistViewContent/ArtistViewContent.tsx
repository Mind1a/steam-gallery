export default function ArtistViewContent() {
  const images = [
    '/assets/images/gallery-images/gallery-image-1.jpg',
    '/assets/images/gallery-images/gallery-image-1.jpg',
    '/assets/images/gallery-images/gallery-image-1.jpg',
    '/assets/images/gallery-images/gallery-image-1.jpg',
    '/assets/images/gallery-images/gallery-image-1.jpg',
    '/assets/images/gallery-images/gallery-image-1.jpg',
  ];

  return (
    <div className="flex flex-col flex-1 gap-12 px-[49px]">
      <section className="flex justify-between mt-[60px] max-w-[1442px]">
        <div className="gap-x-6 gap-y-4 grid grid-cols-3 grid-rows-3 max-w-[598px] max-h-[540px]">
          <div className="col-span-2 row-span-3 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={images[0]}
              alt="gallery image"
            />
          </div>
          {images.slice(3).map((image, i) => (
            <div key={i} className="rounded-sm overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="gallery image"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pl-10 max-w-[660px]">
          <h2 className="font-[600] text-[#8B0000] text-[32px]">პროდუქტი</h2>
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
      <section className="flex flex-col gap-4 mb-[92px] max-w-[1442px]">
        <p className="text-[#5C4033] text-2xl uppercase">see also</p>
        <div className="flex gap-6">
          {images.map((image, i) => (
            <div
              key={i}
              className="rounded-lg max-w-[204px] max-h-[272px] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
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
