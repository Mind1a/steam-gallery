import { PaginationButton } from '../assets/index';

interface PaginationButtonProps {
  text: string;
  variant?: 'left' | 'right';
  onClick?: () => void;
}

export default function PaginationButtons({
  text,
  variant,
  onClick,
}: PaginationButtonProps) {
  return (
    <div className="mx-2 flex items-center justify-center">
      <button
        onClick={onClick}
        className="bg-primary-blue flex w-[80px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-normal text-white"
      >
        {variant === 'left' && (
          <img src={PaginationButton} className="rotate-180" />
        )}

        <span>{text}</span>

        {variant === 'right' && <img src={PaginationButton} />}
      </button>
    </div>
  );
}
