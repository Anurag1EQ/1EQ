import './Careers.css';
import { CareersHero } from '../../components/Hero/Hero';

export const CareersPage = () => {
    return (
        <>
            <CareersHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">

                {/* Why Join Us */}
                <div className="py-20 px-12 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-[1000px] mx-auto">
                        <h2 className="text-[32px] font-semibold text-slate-900 mb-10 text-center font-['Playfair_Display']">Why join 1EQ?</h2>
                        <div className="grid-4 gap-6">
                            {[
                                { icon: '🎯', title: 'Mission-driven', desc: 'Your work directly impacts millions of learners across India' },
                                { icon: '🏠', title: 'Remote-first', desc: 'Work from anywhere in India. We judge output, not hours.' },
                                { icon: '📈', title: 'Growth', desc: 'Small team = big ownership. Grow fast with real responsibility.' },
                                { icon: '🤝', title: 'No politics', desc: 'Flat hierarchy. Your ideas matter more than your title.' }
                            ].map(item => (
                                <div key={item.title} className="text-center">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-[1.6]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Open Positions */}
                <div className="py-20 px-12">
                    <div className="max-w-[800px] mx-auto">
                        <h2 className="text-[32px] font-semibold text-slate-900 mb-4 font-['Playfair_Display']">Open Positions</h2>
                        <p className="text-base text-slate-600 mb-10">
                            Don't see a perfect fit? We're always looking for exceptional people. Send your resume to <span className="text-[#E63946] font-medium">careers@1eq.in</span>
                        </p>

                        {/* Job Listings */}
                        <div className="flex flex-col gap-4 mb-10">
                            {[
                                {
                                    title: 'Senior React Native Developer',
                                    team: 'Engineering',
                                    location: 'Remote (India)',
                                    type: 'Full-time',
                                    description: 'Build and scale our mobile apps used by thousands of students daily. 3+ years React Native experience required.'
                                },
                                {
                                    title: 'Backend Engineer (Node.js)',
                                    team: 'Engineering',
                                    location: 'Remote (India)',
                                    type: 'Full-time',
                                    description: 'Design and build scalable APIs and services. Experience with Node.js, PostgreSQL, and AWS preferred.'
                                },
                                {
                                    title: 'Product Designer',
                                    team: 'Design',
                                    location: 'Remote (India)',
                                    type: 'Full-time',
                                    description: 'Own the design for our products end-to-end. Strong portfolio in mobile/web apps required.'
                                },
                                {
                                    title: 'Content Writer (Hindi/English)',
                                    team: 'Content',
                                    location: 'Remote (India)',
                                    type: 'Full-time',
                                    description: 'Create educational content for competitive exam preparation. Background in UPSC/SSC content preferred.'
                                },
                                {
                                    title: 'QA Engineer',
                                    team: 'Engineering',
                                    location: 'Remote (India)',
                                    type: 'Full-time',
                                    description: 'Ensure quality across our products. Experience with mobile and web testing, automation a plus.'
                                }
                            ].map((job, i) => (
                                <div
                                    key={i}
                                    className="hover-lift bg-slate-50 rounded-2xl py-7 px-8 border border-slate-200 cursor-pointer transition-all"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 mb-2">{job.title}</h3>
                                            <div className="flex gap-4 flex-wrap">
                                                <span className="text-sm text-slate-600">{job.team}</span>
                                                <span className="text-sm text-slate-500">•</span>
                                                <span className="text-sm text-slate-600">{job.location}</span>
                                                <span className="text-sm text-slate-500">•</span>
                                                <span className="text-sm text-emerald-600 font-medium">{job.type}</span>
                                            </div>
                                        </div>
                                        <button className="bg-slate-900 text-white border-none px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer whitespace-nowrap">
                                            Apply →
                                        </button>
                                    </div>
                                    <p className="text-[15px] text-slate-600 leading-[1.6]">{job.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Benefits */}
                        <div className="bg-slate-50 rounded-[20px] p-10 border border-slate-200 mb-10">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-6 font-['Playfair_Display']">Benefits & Perks</h3>
                            <div className="grid-2 gap-4">
                                {[
                                    '💰 Competitive salary',
                                    '🏠 Work from anywhere in India',
                                    '💻 MacBook + equipment allowance',
                                    '📚 Learning & development budget',
                                    '🏥 Health insurance',
                                    '🌴 Flexible time off',
                                    '📱 Free access to all 1EQ products',
                                    '🎉 Annual team retreats'
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="text-[15px] text-slate-900">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hiring Process */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-6 font-['Playfair_Display']">Our Hiring Process</h3>
                            <div className="flex gap-4">
                                {[
                                    { step: '1', title: 'Apply', desc: 'Submit your application' },
                                    { step: '2', title: 'Screen', desc: '15-min intro call' },
                                    { step: '3', title: 'Task', desc: 'Small take-home task' },
                                    { step: '4', title: 'Interview', desc: 'Technical + culture fit' },
                                    { step: '5', title: 'Offer', desc: 'Welcome to the team!' }
                                ].map((item, i) => (
                                    <div key={i} className="flex-1 text-center">
                                        <div className="w-10 h-10 rounded-full bg-[#E63946] text-slate-900 flex items-center justify-center font-semibold text-base mx-auto mb-3">
                                            {item.step}
                                        </div>
                                        <h4 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-[13px] text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f35] rounded-[20px] p-10 text-center">
                            <h3 className="text-[28px] font-semibold text-white mb-3 font-['Playfair_Display']">
                                Don't see a role that fits?
                            </h3>
                            <p className="text-base text-white/70 mb-6">
                                We're always looking for talented people. Send us your resume anyway.
                            </p>
                            <a href="mailto:careers@1eq.in" className="inline-block bg-white text-slate-900 py-3.5 px-7 rounded-lg text-[15px] font-semibold no-underline">
                                Email careers@1eq.in
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
