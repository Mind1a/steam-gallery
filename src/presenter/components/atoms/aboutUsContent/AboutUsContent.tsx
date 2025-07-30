import { Link } from 'react-router-dom';
import { AboutUs, aboutUsContent } from '../../../assets';

export const AboutUsContent = () => {
  return (
    <div className="flex flex-col flex-1">
      <section>
        {' '}
        {/* Background Image */}
        <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
          <img src={AboutUs} alt="About Us Background" />
        </div>
        {/* Main Content */}
        <div className="flex flex-col flex-1 justify-center items-center gap-6 m-auto px-6 lg:px-12 py-8 max-w-[1442px]">
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-4">
              {/* Text Content */}
              <div className="flex flex-col justify-start gap-3">
                <h2 className="mb-4 max-sm:mb-1 w-full text-font-primary font-light text-2xl text-left">
                  ჩვენ შესახებ
                </h2>

                {aboutUsContent.map((item, index) => (
                  <div key={item.id}>
                    {/* Paragraph */}
                    <div className="flex-1 max-sm:mb-1 w-full font-light text-[#333333] text-[16px] text-justify">
                      {item.content}
                    </div>

                    {/* Mobile Image between 2nd and 3rd paragraph */}
                    {index === 1 && (
                      <div className="md:hidden block my-4">
                        <img
                          src="/assets/images/students-images/saba-jolbordi/saba-4-5.jpg"
                          alt="ჩვენს შესახებ"
                          className="rounded-md w-full"
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Button */}
                <Link to="/contact">
                  <button className="flex justify-center items-center bg-primary-blue hover:bg-primary-red mt-[30px] py-3 rounded-lg w-full max-w-[176px] font-semibold text-[#FFFAFA] text-[16px] transition duration-200 cursor-pointer">
                    დაგვიკავშირდი
                  </button>
                </Link>
              </div>

              {/* Desktop Image */}
              <div className="hidden md:flex justify-center items-center min-w-[432px] h-auto">
                <img
                  src="/assets/images/students-images/saba-jolbordi/saba-4-5.jpg"
                  alt="ჩვენს შესახებ"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
