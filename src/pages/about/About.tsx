import './About.css';
import { AboutHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

export const AboutPage = () => {
    return (
        <>
            <AboutHero />
            <section className="min-h-screen bg-white global-width py-10 global-border-page mx-auto global-padding">

                {/* Story */}
                <div className="w-full mx-auto mb-10 py-7">
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">Our Story</h2>
                    <p className="text-[51px] max-w-[1000px] mx-auto font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center leading-[1.3]">
                        Building education technology that works for everyone
                    </p>

                    <div className="text-[15px] text-[var(--theme-text-medium)] leading-[1.6] max-w-[800px] mx-auto mb-16">
                        <p className="mb-4">1EQ Edutech started with a simple question: why does education technology work for some and not for others?</p>
                        <p className="mb-4">We found that most EdTech is built for urban, English-speaking, premium-paying users. But India's real learners the ones preparing for government exams in Tier 2 and Tier 3 cities, the ones who can't afford ₹999/month subscriptions were being left behind.</p>
                        <p>So we built differently. Today, 1EQ Edutech creates learning technology that's accessible, affordable, and effective.</p>
                    </div>

                    {/* Leadership Team */}
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">Leadership</h2>
                    <p className="text-[51px] max-w-[800px] mx-auto font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center leading-[1.3]">
                        Meet the team building 1EQ
                    </p>

                    <div className="grid-3 gap-4 mb-16">
                        {[
                            { image: '/images/jt-updated2.jpeg', name: 'Jagadeesh Taluri', role: 'Founder & CEO', desc: 'Jagadeesh Taluri is a founder with a rare blend of vision and execution. With a background in architecture and law, he has built and led multiple  technology platforms, translating complex ideas into scalable, real-world impact.', url: 'https://www.linkedin.com/in/jagadeesh-taluri/' },
                            { image: '/images/dhritiman.webp', name: 'Dhritiman Murti', role: 'Co-founder', desc: 'Leads our in-house tech team. Architect behind 1PYQ and our accessibility-first approach.', url: 'https://www.linkedin.com/in/dhritiman-murti-918646125/' },
                            { image: '/images/richa.jpeg', name: 'Richa Singh', role: 'Co-founder', desc: 'Richa Singh is the Co-founder of 1EQ, responsible for operations, partnerships, and institutional execution. With a legal background and 6+ years of experience, she anchors the strategy, compliance, and day-to-day functioning of the organization.', url: 'https://www.linkedin.com/in/richa-singh-a62973218/' }
                        ].map(person => (
                            <div key={person.name} className="bg-[var(--bg-card)] gap-4 rounded-[5px] p-7 flex flex-col justify-between">
                                <div>
                                    <div className='rounded-full border bg-[var(--bg-card)] mb-3 w-[90px] overflow-hidden shrink-0 aspect-square grayscale'>
                                        <img src={person.image} className='h-full w-full object-cover' alt="" />
                                    </div>
                                    <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1">{person.name}</h4>
                                    <p className="text-[13px] font-[500] text-[var(--theme-text-medium)] font-[400] mb-2">{person.role}</p>
                                    <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.6] ">{person.desc}</p>

                                </div>
                                <Link
                                    target="_blank"
                                    to={person.url}
                                    className="px-[18px] hover:bg-[var(--border-medium)] gap-2 flex items-center justify-center duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px] whitespace-nowrap no-underline">
                                    <FaLinkedin className='text-[25px]' />
                                    Connect On LinkedIn
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Team Stats */}
                    {/* <div className="bg-[var(--bg-card)] rounded-[5px] p-7 mb-10">
                        <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-6 text-center">Our Team</h3>
                        <div className="grid-4 gap-6">
                            {[
                                { value: '20+', label: 'Team members' },
                                { value: '15+', label: 'Engineers' },
                                { value: '3+', label: 'Designers' },
                                { value: '0', label: 'Outsourced' }
                            ].map(stat => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-[40px] font-[400] font-lt-remark text-[var(--theme-text-dark)] mb-1">{stat.value}</div>
                                    <div className="text-[14px] text-[var(--theme-text-medium)]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Company Information */}
                    <div className="p-7 bg-[var(--bg-card)] rounded-[5px] mb-10">
                        <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-4">Company Information</h3>
                        <div className="grid grid-cols-2 gap-3 text-[14px]">
                            <div><span className="text-[var(--theme-text-medium)]">Registered Name:</span> <span className="text-[var(--theme-text-dark)]">1EQ Edutech Private Limited</span></div>
                            <div><span className="text-[var(--theme-text-medium)]">Founded:</span> <span className="text-[var(--theme-text-dark)]">December 2021</span></div>
                            <div><span className="text-[var(--theme-text-medium)]">CIN:</span> <span className="text-[var(--theme-text-dark)]">U72200KA2021PTC156100</span></div>
                            <div><span className="text-[var(--theme-text-medium)]">Headquarters:</span> <span className="text-[var(--theme-text-dark)]">Gurgaon, India</span></div>
                        </div>
                    </div>

                    {/* Join Us CTA */}
                    <div className=" rounded-[5px] py-7 flex items-center justify-between flex-wrap gap-6">
                        <div>
                            <h3 className="text-[24px] font-[400]  text-[var(--theme-text-dark)] mb-2">
                                Want to join our team?
                            </h3>
                            <p className="text-[15px] text-[var(--theme-text-medium)]">
                                We're always looking for passionate people who want to make education accessible.
                            </p>
                        </div>
                        <Link
                            to='/careers'
                            className="px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px] whitespace-nowrap no-underline">
                            View Open Positions →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
