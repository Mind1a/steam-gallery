import Navigation from '../navigation/Navigation';

export default function Header() {
  return (
    <header className="bg-header-bg flex w-full flex-row">
      <div className="mx-auto flex w-full max-w-[1442px] items-center justify-between px-12 py-4">
        <p className="text-2xl">LOGO</p>
        <Navigation />
      </div>
    </header>
  );
}
