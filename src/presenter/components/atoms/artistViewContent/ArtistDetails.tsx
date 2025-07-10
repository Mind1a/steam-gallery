import { ChildrenItemsType } from '../../../assets';

export default function ArtistDetails({
  currentItem,
}: {
  currentItem: ChildrenItemsType;
}) {
  return (
    <div className="flex flex-col gap-2 md:basis-[49%] md:gap-4 md:pl-5">
      <h2 className="text-footer-bg text-2xl font-[600] md:text-[32px]">
        {currentItem.title}
      </h2>
      <p className="text-[16px] font-[300] text-[#333]">
        {currentItem.description}
      </p>
      <p className="text-lg font-[300] text-[#333] md:text-[16px]">
        <span className="text-footer-bg font-[600]">მოსწავლის სახელი:</span>{' '}
        {currentItem.authorName}
      </p>
      <p className="text-lg font-[300] text-[#333] md:text-[16px]">
        <span className="text-footer-bg font-[600]">სკოლა:</span>{' '}
        {currentItem.authorSchool}
      </p>
      <p className="text-lg font-[300] text-[#333] md:text-[16px]">
        <span className="text-footer-bg font-[600]">კლასი:</span>{' '}
        {currentItem.authorClassGrade}
      </p>
      <p className="text-lg font-[300] text-[#333] md:text-[16px]">
        <span className="text-footer-bg font-[600]">ელ.ფოსტა:</span>{' '}
        {currentItem.authorEmail}
      </p>
    </div>
  );
}
