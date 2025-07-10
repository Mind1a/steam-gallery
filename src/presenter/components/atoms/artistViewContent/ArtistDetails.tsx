import { ChildrenItemsType } from '../../../assets';

export default function ArtistDetails({
  currentItem,
}: {
  currentItem: ChildrenItemsType;
}) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 md:pl-5 md:basis-[49%]">
      <h2 className="font-[600] text-footer-bg md:text-[32px] text-2xl">
        {currentItem.title}
      </h2>
      <p className="font-[300] text-[#333] text-[16px]">
        {currentItem.description}
      </p>
      <p className="font-[300] text-[#333] md:text-[16px] text-lg">
        <span className="font-[600] text-footer-bg">მოსწავლის სახელი:</span>{' '}
        {currentItem.authorName}
      </p>
      <p className="font-[300] text-[#333] md:text-[16px] text-lg">
        <span className="font-[600] text-footer-bg">სკოლა:</span>{' '}
        {currentItem.authorSchool}
      </p>
      <p className="font-[300] text-[#333] md:text-[16px] text-lg">
        <span className="font-[600] text-footer-bg">კლასი:</span>{' '}
        {currentItem.authorClassGrade}
      </p>
      <p className="font-[300] text-[#333] md:text-[16px] text-lg">
        <span className="font-[600] text-footer-bg">ელ.ფოსტა:</span>{' '}
        {currentItem.authorEmail}
      </p>
    </div>
  );
}
