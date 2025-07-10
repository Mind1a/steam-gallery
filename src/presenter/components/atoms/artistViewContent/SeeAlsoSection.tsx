import { Link } from 'react-router-dom';
import { ChildrenItemsType } from '../../../assets';

export default function SeeAlsoSection({
  matchedContent,
}: {
  matchedContent: ChildrenItemsType[];
}) {
  return (
    <section className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-[92px] max-w-[1442px]">
      <p className="text-font-primary text-2xl uppercase">see also</p>
      <div className="md:flex gap-4 md:gap-6 grid grid-cols-2">
        {matchedContent.map((item) => (
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
  );
}
