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

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setIsBurger1(true);
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
      <div className="mx-auto flex w-full max-w-[1442px] items-center justify-between px-12 py-4 max-sm:hidden">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" />
        </Link>
        <Navigation
          linkClassName="text-primary-blue font-semibold"
          activeLinkClassName="text-primary-red font-semibold"
        />
      </div>
      <div className="flex w-full max-w-[1442px] items-center justify-center sm:hidden z-20">
        <button onClick={handleBurgerClick}>
          <img src={isBurger1 ? Burger1 : Burger2} alt="BurgerMenu" />
        </button>
      </div>
      {isPopupVisible && (
        <>
          <div className="fixed inset-0 top-[72px] bg-[#17171766] opacity-70 z-10 sm:hidden" onClick={handleClosePopup}></div>
          <div className="absolute top-[76px] left-0 w-full h-[195px] bg-white shadow-lg z-20 transition-transform duration-300 transform translate-y-0 flex flex-col items-center justify-center sm:hidden">
            <Navigation
              linkClassName="text-primary-blue font-semibold"
              activeLinkClassName="text-primary-red font-semibold"
              isColumn={true}
            />
          </div>
        </>
      )}
    </header>
  );
}