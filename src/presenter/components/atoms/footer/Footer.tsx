import { Link } from 'react-router';
export default function Footer() {
  return (
    <footer className="bg-footer-bg font flex w-full font-light text-[#E0E0E0]">
      <div className="mx-auto flex w-full max-w-[1442px] justify-between px-12 pt-[35px] pb-[32px] max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:px-3">
        <p className="font-light">
          საიტზე მუშაობდა{' '}
          <Link
            to="https://unilab.iliauni.edu.ge/"
            target="_blank"
            className="font-medium"
          >
            უნილაბის{' '}
          </Link>
          გუნდი
        </p>
        <Link
          to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi"
          target="_blank"
          className="font-font-weight-250 max-sm:text-[12px]"
        >
          infounilab@iliauni.edu.ge
        </Link>
      </div>
    </footer>
  );
}
