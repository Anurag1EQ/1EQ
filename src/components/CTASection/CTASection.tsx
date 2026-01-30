import './CTASection.css';
import { Link } from 'react-router-dom';

export const CTASection = () => (
    <section className=" font-sans relative overflow-hidden">

        <div className="global-width global-border-page global-padding global-padding-mobile  mx-auto text-center w-full px-6 flex flex-col min-h-[600px] justify-center items-center  relative">

<div className='flex flex-col gap-[24px]'>

            <p className='text-[16px] uppercase font-[600] text-[var(--theme-black)] tracking-[0.05em]'>Get Started</p>
            <h2 className="text-[51px] font-[400] font-lt-remark text-center text-[var(--thene-black)] mt-6 ">
                Ready to build something that matters?
            </h2>
</div>
            <p className="text-[16px] text-[var(--theme-text-medium))] mb-10">
                We partner with organizations that share our mission to make education accessible for all.
            </p>
            <div className="flex gap-4 justify-center">
                <Link to="/contact" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>Get in touch</Link>
                <Link to="/about" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>About Us</Link>

            </div>
        </div>
    </section>
);
