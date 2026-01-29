import './ServicesSection.css';

import { Link } from 'react-router-dom';

export const ServicesSection = () => (
    <section className=" w-full   ">
        <div className="global-width global-padding-mobile  flex flex-col justify-center items-center w-full h-full min-h-[600px] global-border-page  mx-auto text-center ">
            <p className='text-[16px] uppercase font-[600] text-[var(--theme-black)] tracking-[0.05em]'>Services</p>
            <h2 className="custom-h2 md-text-51  font-[400] font-lt-remark text-center text-[var(--thene-black)] mt-6 mb-5 ">
                How we can help
            </h2>
            <p className="text-[16px] text-[var(--theme-text-medium)] mb-10 max-w-[600px] mx-auto">
                Custom development, white-label platforms, tech consulting, and accessibility solutions all built by our in-house team.
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-12">
                {['Custom Dev', 'White-label LMS', 'Tech Consulting', 'Accessibility'].map(tag => (
                    <span key={tag} className="px-5 py-2.5 bg-[var(--bg-card)] rounded-full text-sm text-[var(--theme-text-medium)] ">{tag}</span>
                ))}
            </div>

            <Link to="/services" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'> View All Services →</Link>

        </div>
    </section>
);
