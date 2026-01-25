import './About.css';
import { AboutHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
    return (
        <>
            <AboutHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">

                {/* Light Content */}
                <div className="py-10 px-12 pb-20">
                    <div className="max-w-[900px] mx-auto">
                        {/* Story */}
                        <div className="text-[17px] text-slate-600 leading-[1.9] max-w-[700px] mb-20">
                            <p className="mb-6">1EQ Edutech started with a simple question: why does education technology work for some and not for others?</p>
                            <p className="mb-6">We found that most EdTech is built for urban, English-speaking, premium-paying users. But India's real learners — the ones preparing for government exams in Tier 2 and Tier 3 cities, the ones who can't afford ₹999/month subscriptions — were being left behind.</p>
                            <p>So we built differently. Today, 1EQ Edutech creates learning technology that's accessible, affordable, and effective.</p>
                        </div>

                        {/* Leadership Team */}
                        <h2 className="text-[32px] font-semibold text-slate-900 mb-10 font-['Playfair_Display']">Leadership</h2>
                        <div className="grid-3 gap-6 mb-20">
                            {[
                                { name: 'Founder Name', role: 'Founder & CEO', desc: 'Non-tech founder who built a 20+ person tech team from scratch. Passionate about making education accessible.' },
                                { name: 'Co-founder Name', role: 'Co-founder & COO', desc: 'Operations and partnerships. Ensures our products reach the learners who need them most.' },
                                { name: 'Tech Lead Name', role: 'Head of Engineering', desc: 'Leads our in-house tech team. Architect behind 1PYQ and our accessibility-first approach.' }
                            ].map(person => (
                                <div key={person.name} className="bg-slate-50 rounded-[20px] p-8 border border-slate-200">
                                    <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#E63946]/20 to-blue-600/20 mb-5 flex items-center justify-center text-[28px] text-[#E63946]">
                                        {person.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{person.name}</h3>
                                    <p className="text-sm text-[#E63946] font-medium mb-3">{person.role}</p>
                                    <p className="text-sm text-slate-600 leading-[1.6]">{person.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Team Stats */}
                        <div className="bg-slate-50 rounded-[20px] p-10 border border-slate-200 mb-10">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-8 font-['Playfair_Display']">Our Team</h3>
                            <div className="grid-4 gap-8">
                                {[
                                    { value: '20+', label: 'Team members' },
                                    { value: '15+', label: 'Engineers' },
                                    { value: '3+', label: 'Designers' },
                                    { value: '0', label: 'Outsourced' }
                                ].map(stat => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-4xl font-semibold text-slate-900 font-['Playfair_Display'] mb-2">{stat.value}</div>
                                        <div className="text-sm text-slate-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Company Information */}
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 mb-10">
                            <h3 className="text-xl font-semibold text-slate-900 mb-5">Company Information</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><span className="text-slate-500">Registered Name:</span> <span className="text-slate-900">1EQ Edutech Private Limited</span></div>
                                <div><span className="text-slate-500">Founded:</span> <span className="text-slate-900">December 2021</span></div>
                                <div><span className="text-slate-500">CIN:</span> <span className="text-slate-900">U72200KA2021PTC156100</span></div>
                                <div><span className="text-slate-500">Headquarters:</span> <span className="text-slate-900">Gurgaon, India</span></div>
                            </div>
                        </div>

                        {/* Join Us CTA */}
                        <div className="bg-gradient-to-br from-emerald-600/10 to-slate-50 rounded-[20px] p-10 border border-emerald-600/20 flex items-center justify-between flex-wrap gap-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-2 font-['Playfair_Display']">
                                    Want to join our team?
                                </h3>
                                <p className="text-base text-slate-600">
                                    We're always looking for passionate people who want to make education accessible.
                                </p>
                            </div>
                            <Link
                                to='/careers'
                                className="bg-emerald-600 text-white border-none px-8 py-4 rounded-lg text-base font-semibold cursor-pointer whitespace-nowrap no-underline">
                                View Open Positions →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
