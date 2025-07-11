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
      <div style={{ position: 'absolute', bottom: '16px', width: '100%' }}>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            margin: '0',
            padding: '0',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
      <Slider {...settings} className="">
        {SliderItems.map((item, index) => (
          <div
            key={index}
            className="outline-none max-h-[200px] lg:max-h-[480px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] lg:h-[480px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
