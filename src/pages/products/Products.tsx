import './Products.css';
import { ProductsHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';

export const ProductsPage = () => {
    return (
        <>
            <ProductsHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">

                {/* Which product section */}
                <div className="content-padding bg-slate-50 border-b border-slate-200">
                    <div className="max-w-[800px] mx-auto">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Which product is right for you?</h2>
                        <div className="grid-3 gap-4">
                            {[
                                { question: "Preparing for competitive exams?", answer: "1PYQ", color: "text-[#E63946]" },
                                { question: "Running a coaching center or school?", answer: "1LMS", color: "text-blue-600" },
                                { question: "Learning or teaching sign language?", answer: "1ISL Challenge", color: "text-emerald-600" }
                            ].map(item => (
                                <div key={item.answer} className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                    <p className="text-sm text-slate-600 mb-3">{item.question}</p>
                                    <p className={`text-lg font-semibold ${item.color}`}>→ {item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Light Content */}
                <div className="content-padding pt-20">
                    <div className="max-w-[1000px] mx-auto">

                        {/* ========== 1PYQ SECTION ========== */}
                        <div id="1pyq" className="mb-25">
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="bg-[#E63946]/10 text-[#E63946] px-3.5 py-1.5 rounded-md text-[13px] font-semibold">B2C</span>
                                <span className="bg-[#E63946]/10 text-[#E63946] px-3.5 py-1.5 rounded-md text-[13px] font-semibold">FLAGSHIP</span>
                            </div>
                            <h2 className="section-title font-semibold text-slate-900 mb-2 font-['Playfair_Display']">1PYQ</h2>
                            <p className="text-[15px] text-slate-500 mb-2 italic">Print. Practice. Personalise Your Questions</p>
                            <p className="text-xl text-[#E63946] font-medium mb-4">AI-powered precision learning for exam aspirants</p>

                            {/* Philosophy Tagline */}
                            <div className="bg-gradient-to-br from-[#E63946]/5 to-slate-50 rounded-xl p-6 px-7 border-l-[3px] border-[#E63946] mb-8 max-w-[600px]">
                                <p className="text-lg text-slate-900 font-medium mb-1 font-['Playfair_Display']">
                                    अहम् शिक्षकः। <span className="text-slate-600 font-normal">— Aham Shikṣakaḥ</span>
                                </p>
                                <p className="text-[15px] text-slate-600 italic">
                                    "I am the teacher." Self-learning isn't the fallback. It's the future.
                                </p>
                            </div>

                            <p className="text-[17px] text-slate-600 leading-[1.8] mb-10 max-w-[700px]">
                                Unlike traditional platforms that restart everyone from scratch, 1PYQ uses AI to identify your specific knowledge gaps and creates a personalized learning path. Stop wasting time on what you already know — focus only on what you need to learn.
                            </p>

                            {/* Features Grid */}
                            <div className="grid-3 mb-10">
                                {[
                                    { icon: '🎯', title: 'AI Gap Analysis', desc: 'Identifies exactly where you need to improve' },
                                    { icon: '🔄', title: 'Spaced Repetition', desc: 'Scientifically-proven retention system' },
                                    { icon: '📊', title: 'Progress Tracking', desc: 'Visual analytics of your preparation' },
                                    { icon: '📴', title: 'Offline Mode', desc: 'Download and learn without internet' },
                                    { icon: '🌐', title: 'Multi-language', desc: 'Available in Hindi and English' },
                                    { icon: '💰', title: 'Affordable', desc: 'Starting at ₹0, capped at ₹500/year' }
                                ].map(feature => (
                                    <div key={feature.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                        <div className="text-[28px] mb-3">{feature.icon}</div>
                                        <h4 className="text-base font-semibold text-slate-900 mb-1.5">{feature.title}</h4>
                                        <p className="text-sm text-slate-600 leading-[1.5]">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Supported Exams */}
                            <div className="bg-slate-50 rounded-2xl p-8 mb-10 border border-slate-200">
                                <h3 className="text-lg font-semibold text-slate-900 mb-5">Supported Exams</h3>
                                <div className="flex gap-3 flex-wrap">
                                    {['UPSC', 'SSC CGL', 'SSC CHSL', 'Banking (IBPS/SBI)', 'Railways', 'State PSC', 'CTET', 'NTA UGC NET'].map(exam => (
                                        <span key={exam} className="px-4 py-2 bg-white rounded-full text-sm text-slate-600 border border-slate-200">{exam}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="bg-slate-50 rounded-[20px] py-8 px-10 mb-10 border border-slate-200">
                                <h3 className="text-lg font-semibold text-slate-900 mb-6">Simple, Affordable Pricing</h3>
                                <div className="grid-3 gap-8 mb-6">
                                    <div className="text-center">
                                        <div className="text-xs text-slate-500 mb-1.5 uppercase tracking-wide">Start Free</div>
                                        <div className="text-4xl font-bold text-slate-900">₹0</div>
                                        <div className="text-sm text-slate-600">Limited access</div>
                                    </div>
                                    <div className="text-center p-4 bg-[#E63946]/5 rounded-xl border border-[#E63946]/20">
                                        <div className="text-xs text-[#E63946] mb-1.5 uppercase tracking-wide font-semibold">Most Popular</div>
                                        <div className="text-4xl font-bold text-slate-900">₹10<span className="text-base font-normal text-slate-600">/mo</span></div>
                                        <div className="text-sm text-slate-600">Unlimited access</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-slate-500 mb-1.5 uppercase tracking-wide">Yearly Cap</div>
                                        <div className="text-4xl font-bold text-slate-900">₹500</div>
                                        <div className="text-sm text-slate-600">Max you'll ever pay</div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 text-center">
                                    Subscribe via the app or website. No hidden fees.
                                </p>
                            </div>

                            {/* Download buttons */}
                            <div className="flex-buttons flex-wrap">
                                <button className="bg-slate-900 text-white border-none px-8 py-4 rounded-lg text-[15px] font-semibold cursor-pointer flex items-center gap-2.5">
                                    <span className="text-xl">▶</span> Google Play
                                </button>
                                <button className="bg-slate-900 text-white border-none px-8 py-4 rounded-lg text-[15px] font-semibold cursor-pointer flex items-center gap-2.5">
                                    <span className="text-xl"></span> App Store
                                </button>
                                <button className="bg-transparent text-slate-900 border border-slate-200 px-8 py-4 rounded-lg text-[15px] font-semibold cursor-pointer">
                                    Try Web Version →
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-12 mt-10 pt-10 border-t border-slate-200">
                                {[
                                    { value: '4.5★', label: 'Play Store Rating' },
                                    { value: '50K+', label: 'Downloads' },
                                    { value: '28', label: 'States' }
                                ].map(stat => (
                                    <div key={stat.label}>
                                        <div className="text-[28px] font-semibold text-slate-900">{stat.value}</div>
                                        <div className="text-sm text-slate-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ========== 1LMS SECTION ========== */}
                        <div id="1lms" className="mb-25">
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="bg-blue-600/10 text-blue-600 px-3.5 py-1.5 rounded-md text-[13px] font-semibold">B2B</span>
                                <span className="bg-blue-600/10 text-blue-600 px-3.5 py-1.5 rounded-md text-[13px] font-semibold">WHITE-LABEL</span>
                            </div>
                            <h2 className="section-title font-semibold text-slate-900 mb-2 font-['Playfair_Display']">1LMS</h2>
                            <p className="text-[15px] text-slate-500 mb-2 italic">One Learning Management System for Bharat</p>
                            <p className="text-xl text-blue-600 font-medium mb-4">Your brand. Our technology.</p>

                            {/* Philosophy Tagline */}
                            <div className="bg-gradient-to-br from-blue-600/5 to-slate-50 rounded-xl p-6 px-7 border-l-[3px] border-blue-600 mb-8 max-w-[500px]">
                                <p className="text-lg text-slate-900 font-medium mb-1 font-['Playfair_Display']">
                                    शिक्षा का सेतु
                                </p>
                                <p className="text-[15px] text-slate-600 italic">
                                    "Bridge to Education" — Education Simplified
                                </p>
                            </div>

                            <p className="text-[17px] text-slate-600 leading-[1.8] mb-10 max-w-[700px]">
                                Launch your own branded learning platform without building from scratch. 1LMS is a white-label solution that gives coaching centers, schools, and educators a professional LMS with your branding — powered by our battle-tested technology.
                            </p>

                            {/* Who it's for */}
                            <div className="grid-4 gap-4 mb-10">
                                {[
                                    { icon: '🏫', label: 'Coaching Centers' },
                                    { icon: '🎓', label: 'Schools & Colleges' },
                                    { icon: '👨‍🏫', label: 'Individual Tutors' },
                                    { icon: '🏢', label: 'EdTech Startups' }
                                ].map(item => (
                                    <div key={item.label} className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200">
                                        <div className="text-[32px] mb-3">{item.icon}</div>
                                        <p className="text-sm font-medium text-slate-900">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Features */}
                            <div className="grid-2 gap-5 mb-10">
                                {[
                                    { title: 'Custom Branding', desc: 'Your logo, colors, and domain. Students see your brand, not ours.' },
                                    { title: 'Content Management', desc: 'Upload videos, PDFs, quizzes. Organize by courses, batches, subjects.' },
                                    { title: 'Live Classes', desc: 'Integrated video conferencing. Schedule and record classes.' },
                                    { title: 'Assessments', desc: 'Create tests, track performance, generate reports automatically.' },
                                    { title: 'Student Management', desc: 'Enrollments, batches, progress tracking, parent communication.' },
                                    { title: 'Payment Integration', desc: 'Collect fees online. Razorpay, PayU, UPI supported.' }
                                ].map(feature => (
                                    <div key={feature.title} className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
                                        <h4 className="text-[17px] font-semibold text-slate-900 mb-2">{feature.title}</h4>
                                        <p className="text-[15px] text-slate-600 leading-[1.6]">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing note */}
                            <div className="bg-gradient-to-br from-blue-600/10 to-slate-50 rounded-2xl p-8 border border-blue-600/20 mb-8">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Pricing</h3>
                                <p className="text-base text-slate-600 mb-5">
                                    Custom pricing based on your student count and requirements. Starts at ₹5,000/month for small coaching centers.
                                </p>
                                <Link to="/contact" className="inline-block bg-blue-600 text-white border-none px-7 py-3.5 rounded-lg text-[15px] font-semibold cursor-pointer">
                                    Get a Quote →
                                </Link>
                            </div>
                        </div>

                        {/* ========== 1ISL SECTION ========== */}
                        <div id="1isl" className="mb-15">
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="bg-emerald-600/10 text-emerald-600 px-3.5 py-1.5 rounded-md text-[13px] font-semibold">SOCIAL IMPACT</span>
                                <span className="bg-emerald-600/10 text-emerald-600 px-3.5 py-1.5 rounded-md text-[13px] font-semibold">FREE</span>
                            </div>
                            <h2 className="section-title font-semibold text-slate-900 mb-2 font-['Playfair_Display']">1ISL Challenge</h2>
                            <p className="text-[15px] text-slate-500 mb-2 italic">One Indian Sign Language Challenge</p>
                            <p className="text-xl text-emerald-600 font-medium mb-4">India's first ISL vocabulary learning app</p>

                            {/* Philosophy Tagline */}
                            <div className="bg-gradient-to-br from-emerald-600/5 to-slate-50 rounded-xl p-6 px-7 border-l-[3px] border-emerald-600 mb-8 max-w-[600px]">
                                <p className="text-lg text-slate-900 font-medium mb-1 font-['Playfair_Display']">
                                    सबकी भाषा, सबके लिए <span className="text-slate-600 font-normal">— Sabki Bhasha, Sabke Liye</span>
                                </p>
                                <p className="text-[15px] text-slate-600 italic">
                                    "Everyone's language, for everyone." — Bridging the deaf and hearing worlds, together.
                                </p>
                            </div>

                            <p className="text-[17px] text-slate-600 leading-[1.8] mb-6 max-w-[700px]">
                                Indian Sign Language is used by over 5 million deaf Indians, yet resources to learn it are scarce. 1ISL Challenge makes sign language learning accessible to everyone — whether you're deaf, a family member, a teacher, or just curious.
                            </p>

                            {/* Languages */}
                            <div className="bg-slate-50 rounded-2xl p-8 mb-10 border border-slate-200">
                                <h3 className="text-lg font-semibold text-slate-900 mb-5">Available in 18 Indian Languages</h3>
                                <div className="flex gap-2.5 flex-wrap">
                                    {['Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese', 'Urdu', 'Maithili', 'Sanskrit', 'Konkani', 'Nepali', 'Manipuri'].map(lang => (
                                        <span key={lang} className="px-3.5 py-1.5 bg-white rounded-full text-[13px] text-slate-600 border border-slate-200">{lang}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="grid-3 gap-5 mb-10">
                                {[
                                    { icon: '🎮', title: 'Gamified Learning', desc: 'Fun challenges and streaks to keep you motivated' },
                                    { icon: '📹', title: 'Video Lessons', desc: 'Clear sign demonstrations by native signers' },
                                    { icon: '🏆', title: 'Leaderboards', desc: 'Compete with friends and learners nationwide' }
                                ].map(feature => (
                                    <div key={feature.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                        <div className="text-[28px] mb-3">{feature.icon}</div>
                                        <h4 className="text-base font-semibold text-slate-900 mb-1.5">{feature.title}</h4>
                                        <p className="text-sm text-slate-600 leading-[1.5]">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Download */}
                            <div className="flex gap-4 items-center">
                                <button className="bg-emerald-600 text-white border-none px-8 py-4 rounded-lg text-[15px] font-semibold cursor-pointer flex items-center gap-2.5">
                                    <span className="text-xl">▶</span> Download on Play Store
                                </button>
                                <span className="text-sm text-slate-500">100% Free • No ads • No in-app purchases</span>
                            </div>

                            {/* Impact stats */}
                            <div className="flex gap-12 mt-10 pt-10 border-t border-slate-200">
                                {[
                                    { value: '10K+', label: 'Downloads' },
                                    { value: '500+', label: 'Signs taught' },
                                    { value: '18', label: 'Languages' }
                                ].map(stat => (
                                    <div key={stat.label}>
                                        <div className="text-[28px] font-semibold text-slate-900">{stat.value}</div>
                                        <div className="text-sm text-slate-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-slate-50 rounded-3xl p-5 mt-8 text-center border border-slate-200">
                            <h2 className="text-[32px] font-semibold text-slate-900 mb-4 font-['Playfair_Display']">
                                Need something custom?
                            </h2>
                            <p className="text-[17px] text-slate-600 mb-8 max-w-[500px] mx-auto">
                                We also build custom EdTech solutions. Check out our services or get in touch.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Link to="/services" className="bg-slate-900 text-white border-none px-7 py-3.5 rounded-lg text-[15px] font-semibold cursor-pointer inline-block">
                                    View Services
                                </Link>
                                <Link to="/contact" className="bg-transparent text-slate-900 border border-slate-200 px-7 py-3.5 rounded-lg text-[15px] font-semibold cursor-pointer inline-block">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
