import { Link } from 'react-router-dom';
import { AboutUs, AboutUs2 } from '../../../assets';

export const AboutUsContent = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
        <img src={AboutUs} alt="About Us Background" />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-6 px-6 lg:px-12 py-8 max-w-[1442px]">
        <div className="flex flex-col gap-4">
          <p className="lg:hidden mb-4 max-sm:mb-1 w-full text-font-primary font-light text-2xl text-left">
            ჩვენ შესახებ
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col justify-start gap-3">
              <div className="hidden lg:flex mb-4 max-sm:mb-1 w-full text-font-primary font-light text-2xl text-left">
                ჩვენ შესახებ
              </div>
              <div className="flex-1 max-sm:mb-1 w-full font-light text-[#333333] text-[16px] text-justify">
                ჩვენი გუნდი არის პროფესიონალების გაერთიანება, რომლის მიზანია
                შექმნას თანამედროვე და ინოვაციური პროდუქტი, რომელიც პასუხობს
                მომხმარებლის საჭიროებებს. ჩვენთვის მნიშვნელოვანია ხარისხი, ნდობა
                და გრძელვადიანი ურთიერთობები.
              </div>
              <div className="hidden lg:flex flex-1 max-sm:mb-1 w-full font-light text-[#333333] text-[16px] text-justify">
                ჩვენი ხედვაა ვიყოთ ლიდერი ჩვენს სფეროში, წარმოვაჩინოთ კულტურა და
                ხელოვნება თანამედროვე ტექნოლოგიების მეშვეობით. ჩვენს გუნდს
                გამოარჩევს კრეატიულობა, ყურადღება დეტალებზე და მომხმარებელზე
                ორიენტირებული მიდგომა.
              </div>
              <div className="hidden lg:flex flex-1 max-sm:mb-1 w-full font-light text-[#333333] text-[16px] text-justify">
                თუ გსურთ მეტი გაიგოთ ჩვენს პროექტებზე, გთხოვთ დაგვიკავშირდეთ
                ნებისმიერ დროს. ერთად შევქმნათ რაღაც განსაკუთრებული!
              </div>
              <Link to="/contact">
                <button className="hidden lg:flex justify-center items-center bg-primary-blue hover:bg-primary-red mt-[30px] py-3 rounded-lg w-full max-w-[176px] font-semibold text-[#FFFAFA] text-[16px] transition duration-200 cursor-pointer">
                  დაგვიკავშირდი
                </button>
              </Link>
            </div>

            <div className="hidden lg:flex justify-center items-center min-w-[432px] h-auto">
              <img
                src={AboutUs2}
                alt="ჩვენს შესახებ"
                className="w-[432px] h-[353px]"
              />
            </div>
          </div>

          <div className="lg:hidden mx-auto w-full max-w-[400px]">
            <img src={AboutUs2} alt="ჩვენს შესახებ" />
          </div>
          <div className="lg:hidden flex-1 max-sm:mb-1 w-full font-light text-[#333333] text-[16px] text-justify">
            თუ გსურთ მეტი გაიგოთ ჩვენს პროექტებზე, გთხოვთ დაგვიკავშირდეთ
            ნებისმიერ დროს. ერთად შევქმნათ რაღაც განსაკუთრებული!
          </div>
        </div>
        <Link to="/contact">
          <button className="lg:hidden bg-primary-blue active:bg-primary-red py-3 rounded-lg w-full max-w-[342px] font-semibold text-[#FFFAFA] text-[16px]">
            დაგვიკავშირდი
          </button>
        </Link>
      </div>
    </div>
  );
};
