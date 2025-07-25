import { PaginationButton } from '../../../assets/index';

interface PaginationButtonProps {
  text: string;
  variant?: 'left' | 'right';
  onClick?: () => void;
  bgColor?: string;
}

export default function PaginationButtons({
  text,
  variant,
  onClick,
  bgColor = 'bg-primary-blue',
}: PaginationButtonProps) {
  return (
    <div className="mx-2">
      <button
        onClick={onClick}
        className={`${bgColor} hover:bg-primary-red active:bg-primary-red flex h-full w-[80px] cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-normal text-white transition duration-200 max-lg:transition-none max-lg:duration-0`}
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
