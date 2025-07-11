import { SliderItems } from '../../../assets/index';
import Slider from 'react-slick';

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div className="bottom-4 absolute w-full">
        <ul className="flex justify-center gap-3 m-0 p-0">{dots}</ul>
      </div>
    ),
  };
  return (
    <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
      <Slider {...settings} className="">
        {SliderItems.map((item, index) => (
          <div key={index} className="outline-none">
            <img src={item.image} alt={item.title} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
