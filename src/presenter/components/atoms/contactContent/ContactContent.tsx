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
    <div className="flex flex-1 flex-col">
      <div className="slider-padding relative mx-auto w-full max-w-[1442px] overflow-hidden">
        <img src={AboutUs} alt="About Us Background" />
      </div>
      <div className="flex max-w-[1442px] flex-1 flex-col items-center justify-center gap-6 px-6 py-8 lg:px-12">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex min-h-[366px] flex-col justify-start gap-3">
              <div className="text-font-primary mb-4 w-full text-left text-2xl font-light max-sm:mb-1">
                კონტაქტი
              </div>
              <div className="w-full flex-1 text-justify text-[16px] font-light text-[#333333] max-sm:mb-1">
                გაქვთ შეკითხვები ან გჭირდებათ დახმარება? ჩვენ მზად ვართ
                დაგეხმაროთ! დაგვიკავშირდით ნებისმიერ დროს ქვემოთ მოცემული
                საკონტაქტო საშუალებებით:
              </div>
              <div className="mx-auto w-full max-w-[400px] lg:hidden">
                <img src={AboutUs2} alt="ჩვენს შესახებ" />
              </div>
              <div className="flex w-full flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <Link
                    to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi"
                    target="_blank"
                    className="flex gap-4"
                  >
                    <img src={Location} alt="Location icon" />
                    <p className="text-primary-blue text-[18px] font-semibold">
                      თბილისი, ქაქუცა ჩოლოყაშვილის ქუჩა ⅗
                    </p>
                  </Link>
                  <Link
                    to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi"
                    target="_blank"
                    className="flex gap-4"
                  >
                    <img src={Call} alt="Call icon" />
                    <p className="text-primary-blue text-[18px] font-semibold">
                      +9999999999999
                    </p>
                  </Link>
                  <Link
                    to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi"
                    target="_blank"
                    className="flex gap-4"
                  >
                    <img src={Email} alt="Email icon" />
                    <p className="text-primary-blue text-[18px] font-semibold">
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
                      className="hover:text-primary-red hover:fill-current"
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
            <div className="hidden h-auto min-w-[432px] items-center justify-center lg:flex">
              <img
                src={AboutUs2}
                alt="ჩვენს შესახებ"
                className="h-[353px] w-[432px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
