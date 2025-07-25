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
    <header className="bg-header-bg z-20 flex min-h-[72px] w-full flex-row max-sm:bg-white">
      <div className="mx-auto flex w-full max-w-[1442px] items-center justify-between px-12 py-4 max-lg:px-6 max-sm:hidden">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" />
        </Link>
        <Navigation
          linkClassName="text-primary-blue font-semibold"
          activeLinkClassName="text-primary-red font-semibold"
        />
      </div>
      <div className="z-20 flex w-full max-w-[1442px] items-center justify-between px-5 sm:hidden">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <button onClick={handleBurgerClick}>
          <img src={isBurger1 ? Burger1 : Burger2} alt="BurgerMenu" />
        </button>
      </div>
      <div
        className={`fixed inset-0 top-[72px] z-10 bg-[#00000066] opacity-80 backdrop-blur-xs transition-opacity duration-300 sm:hidden ${!isPopupVisible ? 'hidden' : ''}`}
        onClick={handleBurgerClick}
      ></div>
      <div
        className={`absolute top-[76px] left-0 z-20 flex w-full flex-col items-center justify-center overflow-hidden bg-white shadow-lg transition-[max-height,opacity] duration-500 sm:hidden ${isPopupVisible ? 'max-h-[195px] opacity-100' : 'max-h-0 opacity-0'}`}
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
