import Slider from '../components/atoms/slider/SliderComponent';
import Gallery from '../components/atoms/gallery/Gallery';

export default function Home() {
  return (
    <>
      <Slider></Slider>
      <Gallery></Gallery>
      <div className="flex-1"></div>
    </>
  );
}
