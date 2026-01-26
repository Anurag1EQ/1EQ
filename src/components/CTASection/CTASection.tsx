import './CTASection.css';
import { Link } from 'react-router-dom';

export const CTASection = () => (
    <section className=" font-sans relative overflow-hidden">
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none" />

        <div className="global-width global-border-page mx-auto text-center w-full px-6 flex flex-col min-h-[600px] justify-center items-center  relative">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/25 px-4 py-2 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-text-medium)]" />
                <span className="text-[13px] font-medium text-[var(--theme-text-medium)]">Get Started</span>
            </div>
            <h2 className="text-[56px] font-medium text-[var(--theme-text-dark)] mt-6 mb-6 ">
                Ready to build something that matters?
            </h2>
            <p className="text-lg text-[var(--theme-text-medium))] mb-10">
                We partner with organizations that share our mission to make education accessible for all.
            </p>
            <div className="flex gap-4 justify-center">
                <Link to="/contact" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>Get in touch</Link>
                <Link to="/about" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>About Us</Link>

            </div>
        </div>
    </section>
);
