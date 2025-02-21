import { useState, useEffect } from 'react';
import { Logo, Burger1, Burger2 } from '../../../assets';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

export default function Header() {
  const [isBurger1, setIsBurger1] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleBurgerClick = () => {
    setIsBurger1(!isBurger1);
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsPopupVisible(false);
        setIsBurger1(true);
        document.body.classList.remove('overflow-hidden');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isPopupVisible]);

  return (
    <header className="bg-header-bg max-sm:bg-white flex w-full flex-row min-h-[72px] z-20">
      <div className="mx-auto flex w-full max-w-[1442px] items-center justify-between px-12 max-lg:px-6 py-4 max-sm:hidden">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" />
        </Link>
        <Navigation
          linkClassName="text-primary-blue font-semibold"
          activeLinkClassName="text-primary-red font-semibold"
        />
      </div>
      <div className="flex w-full max-w-[1442px] items-center justify-between sm:hidden z-20 px-5">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <button onClick={handleBurgerClick}>
          <img src={isBurger1 ? Burger1 : Burger2} alt="BurgerMenu" />
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-[#00000066] top-[72px] backdrop-blur-xs opacity-80 z-10 sm:hidden transition-opacity duration-300 ${!isPopupVisible ? 'hidden' : ''}`}
        onClick={handleBurgerClick}
      ></div>
      <div
        className={`absolute top-[76px] left-0 w-full bg-white shadow-lg z-20 sm:hidden transition-[max-height,opacity] duration-500 overflow-hidden flex flex-col items-center justify-center ${isPopupVisible ? 'max-h-[195px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <Navigation
          linkClassName="text-primary-blue font-semibold"
          activeLinkClassName="text-primary-red font-semibold"
          isColumn={true}
        />
      </div>
    </header>
  );
}
