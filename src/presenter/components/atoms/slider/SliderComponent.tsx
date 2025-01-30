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
            margin: '0px',
            padding: '0px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden">
      <Slider {...settings} className="">
        {SliderItems.map((item, index) => (
          <div key={index} className="aling-center flex justify-center">
            <img src={item.image} alt={item.title} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
