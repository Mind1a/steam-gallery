import { GalleryItems } from '../../../assets/index';

export default function Gallery() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1442px] items-center p-12">
        <p className="text-font-primary mb-4 text-2xl font-light">გალერია</p>
        <div className="grid grid-cols-4 gap-6">
          {GalleryItems.map((item, index) => (
            <div key={index} className="w-max[318px] h-max[400px]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full rounded-lg object-cover shadow-[0px_4px_10px_0px_#88787833]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
