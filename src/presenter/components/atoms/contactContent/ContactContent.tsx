import { Link } from 'react-router-dom';
import {
  AboutUs,
  AboutUs2,
  Call,
  Email,
  Location,
  FaceBook,
  Instagram,
} from '../../../assets';

export const ContactContent = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
        <img src={AboutUs} alt="About Us Background" />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-6 px-6 lg:px-12 py-8 max-w-[1442px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col justify-start gap-3 min-h-[366px]">
              <div className="mb-4 max-sm:mb-1 w-full text-font-primary font-light text-2xl text-left">
                კონტაქტი
              </div>
              <div className="flex-1 max-sm:mb-1 w-full font-light text-[#333333] text-[16px] text-justify">
                გაქვთ შეკითხვები ან გჭირდებათ დახმარება? ჩვენ მზად ვართ
                დაგეხმაროთ! დაგვიკავშირდით ნებისმიერ დროს ქვემოთ მოცემული
                საკონტაქტო საშუალებებით:
              </div>
              <div className="lg:hidden mx-auto w-full max-w-[400px]">
                <img src={AboutUs2} alt="ჩვენს შესახებ" />
              </div>
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-4">
                  <Link
                    to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi"
                    target="_blank"
                    className="flex gap-4"
                  >
                    <img src={Location} alt="Location icon" />
                    <p className="font-semibold text-[18px] text-primary-blue">
                      თბილისი, ქაქუცა ჩოლოყაშვილის ქუჩა ⅗
                    </p>
                  </Link>
                  <Link
                    to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi"
                    target="_blank"
                    className="flex gap-4"
                  >
                    <img src={Call} alt="Call icon" />
                    <p className="font-semibold text-[18px] text-primary-blue">
                      +9999999999999
                    </p>
                  </Link>
                  <Link
                    to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi"
                    target="_blank"
                    className="flex gap-4"
                  >
                    <img src={Email} alt="Email icon" />
                    <p className="font-semibold text-[18px] text-primary-blue">
                      infounilab@iliauni.edu.ge
                    </p>
                  </Link>
                </div>
                <div className="flex gap-[20px]">
                  <Link
                    to="https://www.facebook.com/UniLabEdu"
                    target="_blank"
                    className=""
                  >
                    <img
                      src={FaceBook}
                      alt="Facebook icon"
                      className="hover:fill-current hover:text-primary-red"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/unilab_edu?igsh=ZmY4bGZjYmVzMDhp"
                    target="_blank"
                    className=""
                  >
                    <img src={Instagram} alt="Instagram icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center min-w-[432px] h-auto">
              <img
                src={AboutUs2}
                alt="ჩვენს შესახებ"
                className="w-[432px] h-[353px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
