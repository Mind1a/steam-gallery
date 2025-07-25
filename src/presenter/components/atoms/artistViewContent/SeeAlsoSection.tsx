import { Link } from 'react-router-dom';
import { ChildrenItemsType } from '../../../assets';

export default function SeeAlsoSection({
  matchedContent,
}: {
  matchedContent: ChildrenItemsType[];
}) {
  return (
    <section className="mb-8 flex max-w-[1442px] flex-col gap-2 md:mb-[92px] md:gap-4">
      <p className="text-font-primary text-2xl uppercase">see also</p>
      <div className="grid grid-cols-2 gap-4 md:flex md:gap-6">
        {matchedContent.map((item) => (
          <Link
            className="md:basis-[204px]"
            to={`/artistView/${item.id}`}
            key={item.id}
          >
            <div className="overflow-hidden rounded-lg bg-black">
              <img
                className="aspect-[3/4] h-full w-full object-cover opacity-40 transition-all duration-300 hover:scale-[1.03] hover:opacity-100"
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
