import './Hero.css';
import { Link } from 'react-router-dom';
import { LogoMarquee } from '../LogoMarquee/LogoMarquee';
import { Navigation } from '../Navigation/Navigation';

export const HomeHero = () => (
    <section className=' h-screen w-full bg-[#0a1015] global-hero relative'>
        <Navigation />
        <div className='bg-[url(/images/background-img.avif)] mx-auto border-l-[1px] border-r-[1px] border-[var(--border-light)] h-full w-full global-width bg-cover flex flex-col justify-end items-center bg-center bg-no-repeat bg-fixed px-[36px] py-[36px] pt-0'>
            <div className='flex flex-col w-full justify-between items-center gap-[40px]'>
                <div className='flex flex-col gap-[24px] items-center justify-center max-w-[580px]'>
                    <p className='text-[16px] text-[var(--text-light)] text-center'>EdTech Product Studio • Since 2021</p>
                    <p className='text-[63px] text-[var(--text-light)] text-center font-[400] font-lt-remark leading-[1.1]'>Learning technology for <span>underserved India</span></p>
                    <p className='text-[16px] text-[var(--text-medium)] text-center leading-[1.5]'>From our own products to custom platforms — we design, build, and ship EdTech that works.</p>
                    <div className='flex gap-[19px] mt-[12px]'>
                        <Link to="/contact" className='px-[18px] hover:bg-[var(--button-hover)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-dark)] bg-[var(--button-light)] outline-none border-none'>View Products</Link>
                        <Link to="/about" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--button-dark)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>Our Services</Link>
                    </div>
                </div>

                <div className='flex items-center jstify-center gap-5'>
                    <div className='flex items-center justify-center flex-col '>
                        <p className='text-[var(--text-light)] font-[500] text-[30px]'>20+</p>
                        <p className='text-center text-[var(--text-medium)]'>In-house team</p>
                    </div>
                    <div className='flex items-center justify-center flex-col '>
                        <p className='text-[var(--text-light)] font-[500] text-[30px]'>28</p>
                        <p className='text-center text-[var(--text-medium)]'>States reached</p>
                    </div>
                    <div className='flex items-center justify-center flex-col '>
                        <p className='text-[var(--text-light)] font-[500] text-[30px]'>4+</p>
                        <p className='text-center text-[var(--text-medium)]'>Live products</p>
                    </div>
                </div>

                <LogoMarquee />

            </div>
        </div>

    </section>
);

export const ServicesHero = () => (
    <section className='h-[74vh] w-full bg-[#0a1015] component-hero relative'>
        <Navigation />

        <div className='bg-[url(/images/background-img.avif)] mx-auto border-l-[1px] border-r-[1px] border-[var(--border-light)] h-full w-full global-width bg-cover flex flex-col justify-end items-center bg-center bg-no-repeat bg-fixed px-[36px] py-[36px] pt-0'>
            <div className='flex flex-col w-full justify-between items-center gap-[40px]'>
                <div className='flex flex-col gap-[24px] items-center justify-center max-w-[580px]'>
                    <p className='text-[16px] text-[var(--text-light)] text-center'>Our Services</p>
                    <p className='text-[63px] text-[var(--text-light)] text-center font-[400] font-lt-remark leading-[1.1]'>Custom technology for impact</p>
                    <p className='text-[16px] text-[var(--text-medium)] text-center leading-[1.5]'>Technology solutions for organizations building impact.</p>

                </div>
            </div>
        </div>

    </section>

);

export const TechonologyHero = () => (
    <section className='h-[74vh] w-full bg-[#0a1015] component-hero relative'>
        <Navigation />

        <div className='bg-[url(/images/background-img.avif)] mx-auto border-l-[1px] border-r-[1px] border-[var(--border-light)] h-full w-full global-width bg-cover flex flex-col justify-end items-center bg-center bg-no-repeat bg-fixed px-[36px] py-[36px] pt-0'>
            <div className='flex flex-col w-full justify-between items-center gap-[40px]'>
                <div className='flex flex-col gap-[24px] items-center justify-center max-w-[580px]'>
                    <p className='text-[16px] text-[var(--text-light)] text-center'>Technology</p>
                    <p className='text-[63px] text-[var(--text-light)] text-center font-[400] font-lt-remark leading-[1.1]'>Built with modern, battle-tested tech</p>
                    <p className='text-[16px] text-[var(--text-medium)] text-center leading-[1.5]'>Our in-house team of 20+ engineers uses industry-standard technologies to build scalable, accessible, and reliable products.</p>

                </div>
            </div>
        </div>
    </section>
);

export const BlogHero = () => (
    <section className='h-[74vh] w-full bg-[#0a1015] component-hero relative'>
        <Navigation />

        <div className='bg-[url(/images/background-img.avif)] mx-auto border-l-[1px] border-r-[1px] border-[var(--border-light)] h-full w-full global-width bg-cover flex flex-col justify-end items-center bg-center bg-no-repeat bg-fixed px-[36px] py-[36px] pt-0'>
            <div className='flex flex-col w-full justify-between items-center gap-[40px]'>
                <div className='flex flex-col gap-[24px] items-center justify-center max-w-[580px]'>
                    <p className='text-[16px] text-[var(--text-light)] text-center'>Blog & Resources</p>
                    <p className='text-[63px] text-[var(--text-light)] text-center font-[400] font-lt-remark leading-[1.1]'>Insights & Resources</p>
                    <p className='text-[16px] text-[var(--text-medium)] text-center leading-[1.5]'>Thoughts on EdTech, accessibility, and building technology for underserved India.</p>

                </div>
            </div>
        </div>
    </section>

);

export const AboutHero = () => (
    <section className='h-[74vh] w-full bg-[#0a1015] component-hero relative'>
        <Navigation />

        <div className='bg-[url(/images/background-img.avif)] mx-auto border-l-[1px] border-r-[1px] border-[var(--border-light)] h-full w-full global-width bg-cover flex flex-col justify-end items-center bg-center bg-no-repeat bg-fixed px-[36px] py-[36px] pt-0'>
            <div className='flex flex-col w-full justify-between items-center gap-[40px]'>
                <div className='flex flex-col gap-[24px] items-center justify-center max-w-[580px]'>
                    <p className='text-[16px] text-[var(--text-light)] text-center'>About Us</p>
                    <p className='text-[63px] text-[var(--text-light)] text-center font-[400] font-lt-remark leading-[1.1]'>Building technology for how India learns</p>
                    <p className='text-[16px] text-[var(--text-medium)] text-center leading-[1.5]'>Since 2021, we've been making education accessible.</p>

                </div>
            </div>
        </div>
    </section>

);

export const CareersHero = () => (
    <section className='h-[74vh] w-full bg-[#0a1015] component-hero relative'>
        <Navigation />

        <div className='bg-[url(/images/background-img.avif)] mx-auto border-l-[1px] border-r-[1px] border-[var(--border-light)] h-full w-full global-width bg-cover flex flex-col justify-end items-center bg-center bg-no-repeat bg-fixed px-[36px] py-[36px] pt-0'>
            <div className='flex flex-col w-full justify-between items-center gap-[40px]'>
                <div className='flex flex-col gap-[24px] items-center justify-center max-w-[580px]'>
                    <p className='text-[16px] text-[var(--text-light)] text-center'>We're Hiring</p>
                    <p className='text-[63px] text-[var(--text-light)] text-center font-[400] font-lt-remark leading-[1.1]'>Build technology that matters</p>
                    <p className='text-[16px] text-[var(--text-medium)] text-center leading-[1.5]'>Join a team that's making education accessible for millions of Indians. We're looking for people who care about impact, not just code.</p>

                </div>
            </div>
        </div>
    </section>

);

export const ContactHero = () => (
    <section className='h-[74vh] w-full bg-[#0a1015] component-hero relative'>
        <Navigation />

        <div className='bg-[url(/images/background-img.avif)] mx-auto border-l-[1px] border-r-[1px] border-[var(--border-light)] h-full w-full global-width bg-cover flex flex-col justify-end items-center bg-center bg-no-repeat bg-fixed px-[36px] py-[36px] pt-0'>
            <div className='flex flex-col w-full justify-between items-center gap-[40px]'>
                <div className='flex flex-col gap-[24px] items-center justify-center max-w-[580px]'>
                    <p className='text-[16px] text-[var(--text-light)] text-center'>Contact</p>
                    <p className='text-[63px] text-[var(--text-light)] text-center font-[400] font-lt-remark leading-[1.1]'>Get in Touch</p>
                    <p className='text-[16px] text-[var(--text-medium)] text-center leading-[1.5]'>Have a question or partnership idea? We'd love to hear from you.</p>

                </div>
            </div>
        </div>
    </section>

);
