import { Link } from 'react-router-dom';
import { AboutUs, AboutUs2 } from '../../../assets';

export const AboutUsContent = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="slider-padding relative mx-auto w-full max-w-[1442px] overflow-hidden">
        <img src={AboutUs} alt="About Us Background" />
      </div>
      <div className="flex max-w-[1442px] flex-1 flex-col items-center justify-center gap-6 px-6 py-8 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="text-font-primary mb-4 w-full text-left text-2xl font-light max-sm:mb-1 lg:hidden">
            ჩვენ შესახებ
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col justify-start gap-3">
              <div className="text-font-primary mb-4 hidden w-full text-left text-2xl font-light max-sm:mb-1 lg:flex">
                ჩვენ შესახებ
              </div>
              <div className="w-full flex-1 text-justify text-[16px] font-light text-[#333333] max-sm:mb-1">
                ჩვენი გუნდი არის პროფესიონალების გაერთიანება, რომლის მიზანია
                შექმნას თანამედროვე და ინოვაციური პროდუქტი, რომელიც პასუხობს
                მომხმარებლის საჭიროებებს. ჩვენთვის მნიშვნელოვანია ხარისხი, ნდობა
                და გრძელვადიანი ურთიერთობები.
              </div>
              <div className="hidden w-full flex-1 text-justify text-[16px] font-light text-[#333333] max-sm:mb-1 lg:flex">
                ჩვენი ხედვაა ვიყოთ ლიდერი ჩვენს სფეროში, წარმოვაჩინოთ კულტურა და
                ხელოვნება თანამედროვე ტექნოლოგიების მეშვეობით. ჩვენს გუნდს
                გამოარჩევს კრეატიულობა, ყურადღება დეტალებზე და მომხმარებელზე
                ორიენტირებული მიდგომა.
              </div>
              <div className="hidden w-full flex-1 text-justify text-[16px] font-light text-[#333333] max-sm:mb-1 lg:flex">
                თუ გსურთ მეტი გაიგოთ ჩვენს პროექტებზე, გთხოვთ დაგვიკავშირდეთ
                ნებისმიერ დროს. ერთად შევქმნათ რაღაც განსაკუთრებული!
              </div>
              <Link to="/contact">
                <button className="bg-primary-blue hover:bg-primary-red mt-[30px] hidden w-full max-w-[176px] cursor-pointer items-center justify-center rounded-lg py-3 text-[16px] font-semibold text-[#FFFAFA] transition duration-200 lg:flex">
                  დაგვიკავშირდი
                </button>
              </Link>
            </div>

            <div className="hidden h-auto min-w-[432px] items-center justify-center lg:flex">
              <img
                src={AboutUs2}
                alt="ჩვენს შესახებ"
                className="h-[353px] w-[432px]"
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[400px] lg:hidden">
            <img src={AboutUs2} alt="ჩვენს შესახებ" />
          </div>
          <div className="w-full flex-1 text-justify text-[16px] font-light text-[#333333] max-sm:mb-1 lg:hidden">
            თუ გსურთ მეტი გაიგოთ ჩვენს პროექტებზე, გთხოვთ დაგვიკავშირდეთ
            ნებისმიერ დროს. ერთად შევქმნათ რაღაც განსაკუთრებული!
          </div>
        </div>
        <Link to="/contact">
          <button className="bg-primary-blue active:bg-primary-red w-full max-w-[342px] rounded-lg py-3 text-[16px] font-semibold text-[#FFFAFA] lg:hidden">
            დაგვიკავშირდი
          </button>
        </Link>
      </div>
    </div>
  );
};
