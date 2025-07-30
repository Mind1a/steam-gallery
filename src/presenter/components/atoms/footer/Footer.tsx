import { Link } from 'react-router';
export default function Footer() {
  return (
    <footer className="flex bg-footer-bg w-full font-light text-[#E0E0E0] font">
      <div className="flex max-sm:flex-col justify-between max-sm:items-center max-sm:gap-4 mx-auto px-12 max-sm:px-3 pt-[35px] pb-[32px] w-full max-w-[1442px]">
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
          to="mailto:infounilab@iliauni.edu.ge"
          className="font-font-weight-250 max-sm:text-[12px]"
        >
          infounilab@iliauni.edu.ge
        </Link>
      </div>
    </footer>
  );
}
