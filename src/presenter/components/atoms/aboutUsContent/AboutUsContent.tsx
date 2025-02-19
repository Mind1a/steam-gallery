import { AboutUs, AboutUs2 } from '../../../assets';

export const AboutUsContent = () => {
  return (
        <div className="flex-1 flex flex-col ">
            <div className="relative mx-auto w-full max-w-[1442px] overflow-hidden slider-padding">
                <img src={AboutUs} alt="About Us Background" />
            </div>
            <div className='px-6 py-8 flex-1 flex flex-col justify-center items-center gap-6 lg:px-12 max-w-[1442px] '>
              <div className='flex flex-col gap-4'>
                <p className="text-font-primary mb-4 max-sm:mb-1 w-full text-left text-2xl font-light lg:hidden">
                  ჩვენ შესახებ
                </p>
                <div className='flex gap-4'>
                   <div className='flex flex-col justify-start gap-3'>
                      <div className="text-font-primary mb-4 max-sm:mb-1 w-full text-left text-2xl font-light lg:flex hidden">
                           ჩვენ შესახებ
                      </div>
                      <div className="text-[#333333] max-sm:mb-1 w-full text-[16px] font-light flex-1 text-justify">
                          ჩვენი გუნდი არის პროფესიონალების გაერთიანება, რომლის მიზანია შექმნას თანამედროვე და ინოვაციური პროდუქტი,
                          რომელიც პასუხობს მომხმარებლის საჭიროებებს. ჩვენთვის მნიშვნელოვანია ხარისხი, ნდობა და გრძელვადიანი ურთიერთობები.
                      </div>
                      <div className="text-[#333333] max-sm:mb-1 w-full text-[16px] font-light flex-1 text-justify hidden lg:flex">
                          ჩვენი ხედვაა ვიყოთ ლიდერი ჩვენს სფეროში, წარმოვაჩინოთ კულტურა და ხელოვნება თანამედროვე ტექნოლოგიების მეშვეობით.
                          ჩვენს გუნდს გამოარჩევს კრეატიულობა, ყურადღება დეტალებზე და მომხმარებელზე ორიენტირებული მიდგომა.
                      </div>
                      <div className="text-[#333333] max-sm:mb-1 w-full text-[16px] font-light flex-1 text-justify hidden lg:flex">
                          თუ გსურთ მეტი გაიგოთ ჩვენს პროექტებზე, გთხოვთ დაგვიკავშირდეთ ნებისმიერ დროს. ერთად შევქმნათ რაღაც განსაკუთრებული!
                      </div>
                      <button className='bg-primary-blue hover:bg-primary-red transition duration-200 mt-[30px] py-3 max-w-[176px] w-full text-[#FFFAFA] text-[16px] font-semibold rounded-lg hidden lg:flex items-center justify-center cursor-pointer'>დაგვიკავშირდი</button>

                    </div>

                   <div className='min-w-[432px] h-auto lg:flex hidden justify-center items-center'>
                    <img src={AboutUs2} alt="ჩვენს შესახებ" className='w-[432px] h-[353px]'/>
                   </div>

                </div>

                <div className='max-w-[400px] w-full mx-auto lg:hidden'>
                   <img src={AboutUs2} alt="ჩვენს შესახებ" />
                </div>
                <div className="text-[#333333] max-sm:mb-1 w-full text-[16px] font-light flex-1 text-justify lg:hidden">
                  თუ გსურთ მეტი გაიგოთ ჩვენს პროექტებზე, გთხოვთ დაგვიკავშირდეთ ნებისმიერ დროს. ერთად შევქმნათ რაღაც განსაკუთრებული!
                </div>
              </div>
              <button className='bg-primary-blue active:bg-primary-red py-3 max-w-[342px] w-full text-[#FFFAFA] text-[16px] font-semibold rounded-lg lg:hidden'>დაგვიკავშირდი</button>
            </div>
          </div>
  )
}
