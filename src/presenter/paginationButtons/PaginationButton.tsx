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
    <div className="mx-2">
      <button
        onClick={onClick}
        className="bg-primary-blue flex h-full w-[80px] cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-normal text-white"
      >
        {variant === 'left' && (
          <img src={PaginationButton} className="mt-0.5" />
        )}

        <span>{text}</span>

        {variant === 'right' && (
          <img src={PaginationButton} className="mt-0.5 rotate-180" />
        )}
      </button>
    </div>
  );
}
