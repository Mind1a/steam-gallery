import Header from '../components/atoms/header/Header';
import Slider from '../components/atoms/slider/SliderComponent';
import Footer from '../components/atoms/footer/Footer';

export default function Home() {
  return (
    <>
      <body className="flex min-h-screen flex-col">
        <Header />
        <Slider></Slider>
        <div className="flex-1"></div>
        <Footer />
      </body>
    </>
  );
}
