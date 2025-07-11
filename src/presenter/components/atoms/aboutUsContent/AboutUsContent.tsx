import { Link } from 'react-router-dom';
import { AboutUs, aboutUsContent } from '../../../assets';

export const AboutUsContent = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
        <img src={AboutUs} alt="About Us Background" />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-6 px-6 lg:px-12 py-8 max-w-[1442px]">
        <div className="flex flex-col gap-4">
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col justify-start gap-3">
              <h2 className="mb-4 max-sm:mb-1 w-full text-font-primary font-light text-2xl text-left">
                ჩვენ შესახებ
              </h2>
              {aboutUsContent.map((item) => (
                <div
                  key={item.id}
                  className="flex-1 max-sm:mb-1 w-full font-light text-[#333333] text-[16px] text-justify"
                >
                  {item.content}
                </div>
              ))}

              <Link to="/contact">
                <button className="flex justify-center items-center bg-primary-blue hover:bg-primary-red mt-[30px] py-3 rounded-lg w-full max-w-[176px] font-semibold text-[#FFFAFA] text-[16px] transition duration-200 cursor-pointer">
                  დაგვიკავშირდი
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center min-w-[432px] h-auto">
              <img
                src="/assets/images/students-images/saba-jolbordi/saba-4-5.jpg"
                alt="ჩვენს შესახებ"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
