import { Link } from 'react-router';
export default function Footer() {
  return (
    <footer className="bg-footer-bg font flex w-full font-light text-[#E0E0E0]">
      <div className="mx-auto flex w-full max-w-[1442px] justify-between px-12 pt-[35px] pb-[32px] max-sm:flex-col max-sm:items-center max-sm:gap-4">
        <p className="font-light max-sm:text-[11px]">
          საიტზე მუშაობდა{' '}
          <Link to="https://unilab.iliauni.edu.ge/" target="_blank" className="max-sm:text-[11px] font-medium">
            უნილაბის{' '}
          </Link>
          გუნდი
        </p>
        <Link to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi" target="_blank"  className="max-sm:text-[12px] font-font-weight-250">
        infounilab@iliauni.edu.ge
        </Link>
      </div>
    </footer>
  );
}
