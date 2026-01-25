import './Services.css';
import { ServicesHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
    return (
        <>
            <ServicesHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">
                {/* Light Content */}
                <div className="py-10 px-12 pb-20">
                    <div className="max-w-[1000px] mx-auto">

                        {/* Non-Tech Founders Section */}
                        <div className="bg-gradient-to-br from-purple-600/10 to-slate-50 rounded-3xl p-10 border border-purple-600/20 mb-10">
                            <span className="inline-block bg-purple-600/20 text-purple-600 px-3.5 py-1.5 rounded-md text-[13px] font-semibold mb-6">FREE ADVISORY</span>

                            <h2 className="text-4xl font-bold text-slate-900 mb-5 font-['Playfair_Display']">Non-tech founder? So is ours.</h2>

                            <p className="text-[17px] text-slate-600 leading-[1.8] mb-4 max-w-[700px]">
                                We built a 20+ person tech team, shipped 4 live products, and delivered platforms for multiple clients — all without a technical co-founder.
                            </p>

                            <p className="text-[17px] text-slate-600 leading-[1.8] mb-8 max-w-[700px]">
                                It wasn't easy. We made mistakes, overpaid for bad advice, hired wrong, and learned the hard way what actually matters when building tech products. Now we're offering that experience to you — free.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-base font-semibold text-slate-900 mb-4">What we can help with:</h3>
                                <div className="grid grid-cols-2 gap-3 max-w-[700px]">
                                    {[
                                        'Evaluating whether you need a technical co-founder, an agency, or an in-house team',
                                        'Scoping your MVP without overbuilding (or underbuilding)',
                                        'Understanding what developers actually do — and what to look for when hiring',
                                        'Avoiding common traps that burn non-tech founders'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <span className="text-purple-600 text-lg leading-[1.4]">✓</span>
                                            <span className="text-[15px] text-slate-600 leading-[1.6]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 bg-white rounded-xl max-w-[500px]">
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">The offer</div>
                                    <div className="text-lg text-slate-900 font-semibold">30-minute call. No pitch, no strings.</div>
                                </div>
                                <button className="bg-purple-600 text-white border-none px-7 py-3.5 rounded-lg text-[15px] font-semibold cursor-pointer whitespace-nowrap">Book a Free Call</button>
                            </div>
                        </div>

                        {/* Paid Services */}
                        <h2 className="text-[32px] font-bold text-slate-900 mb-8 font-['Playfair_Display']">How we can help</h2>

                        <div className="grid-2 gap-6 mb-10">
                            {[
                                { icon: '💻', title: 'Custom Development', desc: 'End-to-end product development for EdTech and social impact organizations.', color: 'bg-[#E63946]/10' },
                                { icon: '🏷️', title: 'White-label Solutions', desc: 'Launch your own branded learning platform using our battle-tested technology.', color: 'bg-blue-600/10' },
                                { icon: '🧭', title: 'Tech Consulting', desc: 'Strategic guidance, architecture reviews, and team augmentation.', color: 'bg-emerald-600/10' },
                                { icon: '♿', title: 'Accessibility Solutions', desc: 'Sign language, multi-language, and low-bandwidth optimization.', color: 'bg-purple-600/10' }
                            ].map(item => (
                                <div key={item.title} className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
                                    <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-[28px] mb-6`}>{item.icon}</div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-3 font-['Playfair_Display']">{item.title}</h2>
                                    <p className="text-base text-slate-600 leading-[1.7]">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Portfolio */}
                        <h2 className="text-[32px] font-bold text-slate-900 mb-8 font-['Playfair_Display']">What We've Built</h2>
                        <div className="grid-2 gap-6 mb-10">
                            {[
                                { name: 'MarkMyPresence', cat: 'Attendance', desc: 'Smart attendance tracking for educational institutions.', color: 'bg-[#E63946]/10 text-[#E63946]' },
                                { name: 'Deaf Helpline App', cat: 'Accessibility', desc: 'Emergency helpline app for the deaf community.', color: 'bg-emerald-600/10 text-emerald-600' },
                                { name: 'RunKranti', cat: 'Fitness', desc: 'Community-driven fitness platform for runners.', color: 'bg-blue-600/10 text-blue-600' },
                                { name: '1MathTrix', cat: 'EdTech', desc: 'Gamified mathematics learning app.', color: 'bg-purple-600/10 text-purple-600' }
                            ].map(item => (
                                <div key={item.name} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                                    <span className={`inline-block ${item.color} px-3 py-1.5 rounded-md text-xs font-semibold mb-4`}>{item.cat}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['Playfair_Display']">{item.name}</h3>
                                    <p className="text-[15px] text-slate-600 leading-[1.6]">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Process Section */}
                        <h2 className="text-[32px] font-bold text-slate-900 mb-8 font-['Playfair_Display']">How we build with you</h2>
                        <div className="grid-4 gap-5 mb-10">
                            {[
                                { step: '01', label: 'Discovery', desc: 'We understand your mission, users, and constraints. No assumptions — just deep listening and research.', icon: '🔍' },
                                { step: '02', label: 'Design', desc: 'We architect solutions that fit your needs, timeline, and budget. User-centered, accessible-first.', icon: '✏️' },
                                { step: '03', label: 'Develop', desc: 'Our in-house team builds, tests, and iterates with you in the loop. No outsourcing, no surprises.', icon: '⚡' },
                                { step: '04', label: 'Deploy', desc: "We launch, monitor, and support. We don't disappear after delivery — we're in it for the long haul.", icon: '🚀' }
                            ].map(item => (
                                <div key={item.step} className="bg-slate-50 rounded-[20px] p-8 border border-slate-200">
                                    <div className="text-[32px] mb-4">{item.icon}</div>
                                    <div className="text-[13px] text-purple-600 font-semibold mb-2">{item.step}</div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.label}</h3>
                                    <p className="text-sm text-slate-600 leading-[1.6]">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f35] rounded-3xl p-10 text-center">
                            <h2 className="text-[32px] font-semibold text-white mb-4 font-['Playfair_Display']">
                                Ready to build something?
                            </h2>
                            <p className="text-[17px] text-white/70 mb-8 max-w-[500px] mx-auto">
                                Let's talk about your project. No pressure, just a conversation.
                            </p>
                            <Link to="/contact" className="inline-block bg-white text-slate-900 border-none px-8 py-4 rounded-lg text-[15px] font-semibold cursor-pointer">
                                Start a Conversation →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
