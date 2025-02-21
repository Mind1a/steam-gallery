import { Link } from 'react-router-dom';
import { AboutUs, AboutUs2, Call, Email, Location, FaceBook, Instagram } from '../../../assets';

export const ContactContent = () => {
  return (
        <div className="flex-1 flex flex-col ">
            <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
                <img src={AboutUs} alt="About Us Background" />
            </div>
            <div className='px-6 py-8 flex-1 flex flex-col justify-center items-center gap-6 lg:px-12 max-w-[1442px]'>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                   <div className='flex flex-col justify-start gap-3  min-h-[366px]'>
                      <div className="text-font-primary mb-4 max-sm:mb-1 w-full text-left text-2xl font-light">
                            კონტაქტი
                      </div>
                      <div className="text-[#333333] max-sm:mb-1 w-full text-[16px] font-light flex-1 text-justify">
                            გაქვთ შეკითხვები ან გჭირდებათ დახმარება? ჩვენ მზად ვართ დაგეხმაროთ! დაგვიკავშირდით ნებისმიერ დროს ქვემოთ მოცემული საკონტაქტო საშუალებებით:
                      </div>
                      <div className='max-w-[400px] w-full mx-auto lg:hidden'>
                        <img src={AboutUs2} alt="ჩვენს შესახებ" />
                      </div>
                      <div className='flex flex-col gap-8 w-full'>
                        <div className='flex flex-col gap-4'>
                            <Link to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi" target="_blank"  className="flex gap-4">
                                <img src={Location} alt="Location icon" />
                                <p className='text-primary-blue text-[18px] font-semibold'>თბილისი, Example ქუჩა #123</p>
                            </Link> 
                            <Link to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi" target="_blank"  className="flex gap-4">
                                <img src={Call} alt="Call icon" />
                                <p className='text-primary-blue text-[18px] font-semibold'>+9999999999999</p>
                            </Link>
                            <Link to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi" target="_blank"  className="flex gap-4">
                                <img src={Email} alt="Email icon" />
                                <p className='text-primary-blue text-[18px] font-semibold'>info@example.com</p>
                            </Link>
                        </div>
                        <div className='flex gap-[20px]'>
                            <Link to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi" target="_blank"  className="">
                                <img src={FaceBook} alt="Facebook icon" className="hover:fill-current hover:text-primary-red"/>
                            </Link>
                            <Link to="https://iliauni.edu.ge/en/studentebistvis/iliaunis-kiberlaboratoria-unilabi" target="_blank"  className="">
                                <img src={Instagram} alt="Instagram icon" />
                            </Link>
                        </div>
                      </div>
                    </div>
                    <div className='min-w-[432px] h-auto lg:flex hidden justify-center items-center'>
                        <img src={AboutUs2} alt="ჩვენს შესახებ" className='w-[432px] h-[353px]'/>
                    </div>
                </div>
              </div>
            </div>
          </div>
  )
}
