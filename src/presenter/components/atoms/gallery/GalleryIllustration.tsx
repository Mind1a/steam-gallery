import { Link } from 'react-router-dom';
import { ChildrenItemsType } from '../../../assets';

export default function GalleryIllustration({
  item,
}: {
  item: ChildrenItemsType;
}) {
  return (
    <Link to={`/artistView/${item.id}`}>
      <div className="relative w-[133px] h-[183px] overflow-hidden max-390 max-1090-size">
        <img
          src={item.images[0]}
          alt={item.title}
          className="shadow-[0px_4px_10px_0px_#88787833] rounded-lg w-full h-full object-cover"
        />
        <div className="absolute inset-0 lg:bg-black opacity-40 hover:opacity-0 rounded-lg transition-opacity duration-300 max-1442-dp-none"></div>
      </div>
    </Link>
  );
}
