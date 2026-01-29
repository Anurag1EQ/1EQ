import './Services.css';
import { ServicesHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';
 

export const ServicesPage = () => {
    return (
        <>
            <ServicesHero />
            <section className="min-h-screen bg-white global-width py-10 global-border-page mx-auto global-padding-mobile global-padding ">

                {/* Non-Tech Founders Section */}
                <div className="w-full mx-auto mb-10 py-7">
                    <div className="bg-[var(--bg-card)]  w-full rounded-[5px] p-7 mb-10 global-padding-mobile">
                        <span className="inline-block bg-[var(--bg-card-light)] text-[var(--theme-text-medium)]  py-1.5 rounded-md text-[12px] font-[400] mb-4">FREE ADVISORY</span>

                        <h2 className="text-[30px] font-[400] font-lt-remark text-[var(--theme-text-dark)] mb-4 leading-[1.3]">Non-tech founder? So is ours.</h2>

                        <p className="text-[15px] text-[var(--theme-text-medium)] leading-[1.6] mb-3">
                            We built a 20+ person tech team, shipped 4 live products, and delivered platforms for multiple clients, all without a technical co-founder.
                        </p>

                        <p className="text-[15px] text-[var(--theme-text-medium)] leading-[1.6] mb-6">
                            It wasn't easy. We made mistakes, overpaid for bad advice, hired wrong, and learned the hard way what actually matters when building tech products. Now we're offering that experience to you for free.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-[16px] font-[500] text-[var(--theme-text-dark)] mb-3">What we can help with:</h3>
                            <div className="grid-2 gap-3">
                                {[
                                    'Evaluating whether you need a technical co-founder, an agency, or an in-house team',
                                    'Scoping your MVP without overbuilding (or underbuilding)',
                                    'Understanding what developers actually do, and what to look for when hiring',
                                    'Avoiding common traps that burn non-tech founders'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="text-[var(--theme-text-dark)] text-[14px] leading-[1.4]">✓</span>
                                        <span className="text-[14px] text-[var(--theme-text-medium)] leading-[1.6]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-column flex items-center  md:justify-start justify-center gap-4 p-5 bg-white rounded-[5px]">
                            <div className='   '>
                                <div className="text-[13px] text-[var(--theme-text-medium)] mb-1">The offer</div>
                                <div className="text-[16px] text-[var(--theme-text-dark)] font-[500]">30-minute call. No pitch, no strings.</div>
                            </div>
                            <div className='  '> 

                            <Link target='_blank' to="https://calendly.com/jt-1eq/30min" className="px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px] whitespace-nowrap">Book a Free Call</Link>
                            </div>
                        </div>
                    </div>

                    {/* Paid Services */}
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">How we can help</h2>
                    <p className=" font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center md-text-51 custom-h2">
                        Expert services for your product journey
                    </p>

                    <div className="grid-2 gap-4 mb-16">
                        {[
                            { icon: '/images/laptop.svg', title: 'Custom Development', desc: 'End-to-end product development for EdTech and social impact organizations.' },
                            { icon: '/images/tag.svg', title: 'White-label Solutions', desc: 'Launch your own branded learning platform using our battle-tested technology.' },
                            { icon: '/images/compass.svg', title: 'Tech Consulting', desc: 'Strategic guidance, architecture reviews, and team augmentation.' },
                            { icon: '/images/wheelchair-person.svg', title: 'Accessibility Solutions', desc: 'Sign language, multi-language, and low-bandwidth optimization.' }
                        ].map(item => (
                            <div key={item.title} className=" rounded-[5px] p-7">
                                <div className="w-[30px] mb-3"><img src={item.icon} className='h-full w-full object-contain' alt="" /></div>
                                <h4 className="text-[17px] font-[500] text-[var(--theme-text-dark)] mb-2">{item.title}</h4>
                                <p className="text-[15px] text-[var(--theme-text-medium)] leading-[1.6]">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Portfolio */}
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">What We've Built</h2>
                    <p className="md-text-51 custom-h2 font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center  ">
                        Real products, real impact
                    </p>

                    <div className="grid-2 gap-4 mb-16">
                        {[
                            { name: 'MarkMyPresence', cat: 'Attendance', desc: 'Smart attendance tracking for educational institutions.' },
                            { name: 'Deaf Helpline App', cat: 'Accessibility', desc: 'Emergency helpline app for the deaf community.' },
                            { name: 'RunKranti', cat: 'Fitness', desc: 'Community-driven fitness platform for runners.' },
                            { name: '1MathTrix', cat: 'EdTech', desc: 'Gamified mathematics learning app.' }
                        ].map(item => (
                            <div key={item.name} className="bg-[var(--bg-card)] rounded-[5px] p-7">
                                <span className="inline-block border border-[#cfcfcf] text-[var(--theme-text-medium)] px-3 py-1 rounded-md text-[12px] font-[400] mb-3">{item.cat}</span>
                                <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-2">{item.name}</h4>
                                <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.6]">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Process Section */}
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">How we build with you</h2>
                    <p className="md-text-51 custom-h2 font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center  ">
                        Our proven development process
                    </p>

                    <div className="grid-4 gap-3 mb-10">
                        {[
                            { step: '01', label: 'Discovery', desc: 'We understand your mission, users, and constraints. No assumptions just deep listening and research.', icon: '/images/search.svg' },
                            { step: '02', label: 'Design', desc: 'We architect solutions that fit your needs, timeline, and budget. User-centered, accessible-first.', icon: '/images/pencil.svg' },
                            { step: '03', label: 'Develop', desc: 'Our in-house team builds, tests, and iterates with you in the loop. No outsourcing, no surprises.', icon: '/images/flash-icon.svg' },
                            { step: '04', label: 'Deploy', desc: "We launch, monitor, and support. We don't disappear after delivery we're in it for the long haul.", icon: '/images/rocket.svg' }
                        ].map(item => (
                            <div key={item.step} className="p-6 rounded-2xl flex flex-col items-center">
                                <div className="w-[30px] mb-3"><img src={item.icon} className='h-full w-full object-contain' alt="" /></div>
                                <div className="text-[14px] text-[var(--theme-text-medium)] font-[400] mb-1">{item.step}</div>
                                <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{item.label}</h4>
                                <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.5] text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    {/* <div className="bg-[var(--bg-card)] rounded-[5px] py-8 p-5 mt-8 text-center">
                        <h2 className="text-[40px] text-slate-900 mb-4 font-lt-remark">
                            Ready to build something?
                        </h2>
                        <p className="text-[16px] text-[var(--theme-text-medium)] font-[400] mb-8 max-w-[495px] mx-auto">
                            Let's talk about your project. No pressure, just a conversation.
                        </p>
                        <Link to="/contact" className="px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]">
                            Start a Conversation →
                        </Link>
                    </div> */}
                </div>
            </section>
        </>
    );
};
