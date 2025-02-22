import { Outlet } from 'react-router-dom';
import Footer from '../../atoms/footer/Footer';
import Header from '../../atoms/header/Header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1442px] flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
