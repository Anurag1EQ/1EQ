import './CTASection.css';
import { Link } from 'react-router-dom';

export const CTASection = () => (
    <section className=" font-sans relative overflow-hidden">

        <div className="global-width global-border-page global-padding   mx-auto text-center w-full flex flex-col min-h-[600px] justify-center items-center  relative">
<div className="text-center mb-4 sm:mb-8 md:mb-[60px] flex flex-col gap-3 sm:gap-[18px] md:gap-[24px]">
                <p className='text-sm sm:text-base md:text-lg uppercase font-semibold text-[var(--theme-black)] tracking-wide'>
 Get Started
</p>
<h2 className="custom-h2 text-2xl sm:text-3xl md:text-[51px] font-normal font-lt-remark text-center text-[var(--theme-black)] ">
  Ready to build something that matters?
</h2>
           
</div>
            <p className="text-[16px] text-[var(--theme-text-medium))] mb-10">
                We partner with organizations that share our mission to make education accessible for all.
            </p>
            <div className="flex gap-4 justify-center">
                <Link to="/contact" className='flex m-auto justify-center items-center w-max px-[12px]  sm:px-[14px] md:px-[18px] py-[6px]  sm:py-[8px] md:py-[12px] hover:bg-[var(--border-medium)] duration-300  font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>Get in touch</Link>
                <Link to="/about" className='flex m-auto justify-center items-center w-max px-[12px]  sm:px-[14px] md:px-[18px] py-[6px]  sm:py-[8px] md:py-[12px] hover:bg-[var(--border-medium)] duration-300   font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>About Us</Link>

            </div>
        </div>
    </section>
);
