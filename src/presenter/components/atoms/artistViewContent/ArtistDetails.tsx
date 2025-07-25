import { ChildrenItemsType } from '../../../assets';

export default function ArtistDetails({
  currentItem,
}: {
  currentItem: ChildrenItemsType;
}) {
  const infoStyle = 'font-[300] text-[#333] md:text-[16px] text-lg';
  const labelStyle = 'font-[600] text-footer-bg';

  return (
    <div className="flex flex-col gap-2 md:gap-4 md:pl-5 md:basis-[49%]">
      <h2 className="font-[600] text-footer-bg md:text-[32px] text-2xl">
        {currentItem.title}
      </h2>

      {[
        { label: 'მოსწავლის სახელი', value: currentItem.authorName },
        { label: 'სკოლა', value: currentItem.authorSchool },
        { label: 'კლასი', value: currentItem.authorClassGrade },
        { label: 'აღწერა', value: currentItem.description },
        { label: 'ელ.ფოსტა', value: currentItem.authorEmail },
      ].map(({ label, value }) => (
        <p key={label} className={infoStyle}>
          <span className={labelStyle}>{label}:</span> {value}
        </p>
      ))}
    </div>
  );
}
