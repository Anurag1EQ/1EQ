import './Careers.css';
import { CareersHero } from '../../components/Hero/Hero';

export const CareersPage = () => {
    return (
        <>
            <CareersHero />
            <section className="min-h-screen bg-white global-width py-10 global-border-page mx-auto global-padding global-padding-mobile ">

                {/* Why Join Us */}
                <div className="w-full mx-auto mb-10 py-7">
                    <h2 className="text-[16px] leading-[1.4] font-[600] text-[var(--theme-text-dark)]  text-center">Why join 1EQ?</h2>
                    <p className="custom-h2 md-text-51  max-w-[900px] mx-auto font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center    ">
                        Build products that millions of students use
                    </p>

                    <div className="grid-4 gap-3 mb-16">
                        {[
                            { icon: '/images/target-lock.svg', title: 'Mission-driven', desc: 'Your work directly impacts millions of learners across India' },
                            { icon: '/images/house.svg', title: 'Remote-first', desc: 'Work from anywhere in India. We judge output, not hours.' },
                            { icon: '/images/bar-chart.svg', title: 'Growth', desc: 'Small team = big ownership. Grow fast with real responsibility.' },
                            { icon: '/images/handshake.svg', title: 'No politics', desc: 'Flat hierarchy. Your ideas matter more than your title.' }
                        ].map(item => (
                            <div key={item.title} className="p-6 rounded-2xl flex flex-col items-center">
                                <div className="w-[30px] mb-3"><img src={item.icon} className='h-full w-full object-contain' alt="" /></div>
                                <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{item.title}</h4>
                                <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.5] text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Open Positions */}
                    <h2 className="text-[16px] leading-[1.4] font-[600]font-[400] text-[var(--theme-text-dark)]   text-center">Open Positions</h2>
                    <p className="custom-h2 md-text-51  max-w-[900px] mx-auto font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-6 text-center     ">
                        Join our team
                    </p>
                    <p className="text-[15px] text-[var(--theme-text-medium)] mb-10 text-center max-w-[700px] mx-auto">
                        Don't see a perfect fit? We're always looking for exceptional people. Send your resume to <span className="text-[var(--theme-text-dark)] font-[500]">hr@1eq.in</span>
                    </p>

                    {/* Job Listings */}
                    <div className="flex flex-col gap-4 mb-16 max-w-[900px] mx-auto">
                        {(() => {
                            const jobListings: Array<{
                                title: string;
                                team: string;
                                location: string;
                                type: string;
                                description: string;
                            }> = [
                                    // {
                                    //     title: 'Senior React Native Developer',
                                    //     team: 'Engineering',
                                    //     location: 'Remote (India)',
                                    //     type: 'Full-time',
                                    //     description: 'Build and scale our mobile apps used by thousands of students daily. 3+ years React Native experience required.'
                                    // },
                                    // {
                                    //     title: 'Backend Engineer (Node.js)',
                                    //     team: 'Engineering',
                                    //     location: 'Remote (India)',
                                    //     type: 'Full-time',
                                    //     description: 'Design and build scalable APIs and services. Experience with Node.js, PostgreSQL, and AWS preferred.'
                                    // },
                                    // {
                                    //     title: 'Product Designer',
                                    //     team: 'Design',
                                    //     location: 'Remote (India)',
                                    //     type: 'Full-time',
                                    //     description: 'Own the design for our products end-to-end. Strong portfolio in mobile/web apps required.'
                                    // },
                                    // {
                                    //     title: 'Content Writer (Hindi/English)',
                                    //     team: 'Content',
                                    //     location: 'Remote (India)',
                                    //     type: 'Full-time',
                                    //     description: 'Create educational content for competitive exam preparation. Background in UPSC/SSC content preferred.'
                                    // },
                                    // {
                                    //     title: 'QA Engineer',
                                    //     team: 'Engineering',
                                    //     location: 'Remote (India)',
                                    //     type: 'Full-time',
                                    //     description: 'Ensure quality across our products. Experience with mobile and web testing, automation a plus.'
                                    // }
                                ];

                            if (jobListings.length === 0) {
                                return (
                                    <div className="bg-[var(--bg-card)] rounded-[5px] py-12 px-7 text-center">
                                        <h3 className="text-[20px] font-[500] text-[var(--theme-text-dark)] mb-2">No openings currently</h3>
                                        <p className="text-[15px] text-[var(--theme-text-medium)] leading-[1.6]">
                                            Please stay connected. We&apos;re always looking for exceptional talent.
                                        </p>
                                    </div>
                                );
                            }

                            return jobListings.map((job, i) => (
                                <div
                                    key={i}
                                    className="bg-[var(--bg-card)] rounded-[5px] py-6 px-7 cursor-pointer transition-all"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-2">{job.title}</h3>
                                            <div className="flex gap-3 flex-wrap">
                                                <span className="text-[13px] text-[var(--theme-text-medium)]">{job.team}</span>
                                                <span className="text-[13px] text-[var(--theme-text-medium)]">•</span>
                                                <span className="text-[13px] text-[var(--theme-text-medium)]">{job.location}</span>
                                                <span className="text-[13px] text-[var(--theme-text-medium)]">•</span>
                                                <span className="text-[13px] text-[var(--theme-text-dark)] font-[500]">{job.type}</span>
                                            </div>
                                        </div>
                                        <button className="px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[10px] font-[500] cursor-pointer text-[14px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px] whitespace-nowrap">
                                            Apply →
                                        </button>
                                    </div>
                                    <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.6]">{job.description}</p>
                                </div>
                            ));
                        })()}
                    </div>

                    {/* Hiring Process */}
                    <div className="mb-10 max-w-[600px] mx-auto">
                        <h2 className="text-[16px] leading-[1.4] font-[600] text-[var(--theme-text-dark)]   text-center">Our Hiring Process</h2>
                        <p className="custom-h2 md-text-51  max-w-[800px] mx-auto font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center   ">
                            How we hire
                        </p>

                        <div className="flex flex-col gap-0">
                            {[
                                { step: '01', title: 'Apply', desc: 'Submit your application through our portal or send your resume to hr@1eq.in' },
                                { step: '02', title: 'Screen', desc: 'Quick 15-minute intro call to understand your background and expectations' },
                                { step: '03', title: 'Task', desc: 'Small take-home assignment to see your skills in action' },
                                { step: '04', title: 'Interview', desc: 'In-depth conversation covering technical skills and culture fit' },
                                { step: '05', title: 'Offer', desc: 'Welcome to the team! We will get you onboarded and set up for success' }
                            ].map((item, i, arr) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-[50px] h-[50px] rounded-full bg-[var(--bg-card)] text-[var(--theme-text-dark)] flex items-center justify-center font-[500] text-[16px] shrink-0">
                                            {item.step}
                                        </div>
                                        {i < arr.length - 1 && (
                                            <div className="w-[2px] h-[80px] bg-[var(--bg-card)] my-2"></div>
                                        )}
                                    </div>
                                    <div className={`pb-8 ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                                        <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{item.title}</h4>
                                        <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.6]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    {/* <div className="bg-[var(--bg-card)] rounded-[5px] py-7 p-7 text-center max-w-[900px] mx-auto">
                        <h3 className="text-[24px] font-[400] font-lt-remark text-[var(--theme-text-dark)] mb-3">
                            Don't see a role that fits?
                        </h3>
                        <p className="text-[15px] text-[var(--theme-text-medium)] mb-6">
                            We're always looking for talented people. Send us your resume anyway.
                        </p>
                        <a href="mailto:careers@1eq.in" className="inline-block px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px] no-underline">
                            Email careers@1eq.in
                        </a>
                    </div> */}
                </div>
            </section>
        </>
    );
};
