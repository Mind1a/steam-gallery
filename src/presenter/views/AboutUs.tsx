import Header from '../components/atoms/header/Header';
import Footer from '../components/atoms/footer/Footer';

export default function AboutUs() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1"></div>
        <Footer />
      </div>
    </>
  );
}
