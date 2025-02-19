import Header from '../components/atoms/header/Header';
import Slider from '../components/atoms/slider/SliderComponent';
import Gallery from '../components/atoms/gallery/Gallery';
import Footer from '../components/atoms/footer/Footer';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Slider></Slider>
        <Gallery></Gallery>
        <div className="flex-1"></div>
        <Footer />
      </div>
    </>
  );
}
