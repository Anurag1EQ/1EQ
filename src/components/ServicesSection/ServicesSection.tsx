import './ServicesSection.css';

import { Link } from 'react-router-dom';

export const ServicesSection = () => (
    <section className=" w-full   ">
        <div className="global-width global-padding  py-10 global-border-page w-full mx-auto text-center ">
             
            
             <div className="text-center mb-4 sm:mb-8 md:mb-[60px] flex flex-col gap-3 sm:gap-[18px] md:gap-[24px]">
                <p className='text-sm sm:text-base md:text-lg uppercase font-semibold text-[var(--theme-black)] tracking-wide'>
                  Servicess
                </p>
                <h2 className="custom-h2 text-2xl sm:text-3xl md:text-[51px] font-normal font-lt-remark text-center text-[var(--theme-black)] ">
                    How we can help
                </h2>
            </div>
            

            
            <p className="text-[16px] text-[var(--theme-text-medium)] mb-10 max-w-[600px] mx-auto">
                Custom development, white-label platforms, tech consulting, and accessibility solutions all built by our in-house team.
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-12">
                {['Custom Dev', 'White-label LMS', 'Tech Consulting', 'Accessibility'].map(tag => (
                    <span key={tag} className="px-5 py-2.5 bg-[var(--bg-card)] rounded-full text-sm text-[var(--theme-text-medium)] ">{tag}</span>
                ))}
            </div>

            <Link to="/services" className='flex m-auto justify-center items-center w-max px-[12px]  sm:px-[14px] md:px-[18px] py-[6px]  sm:py-[8px] md:py-[12px] hover:bg-[var(--border-medium)] duration-300   font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'> View All Services →</Link>

        </div>
    </section>
);
