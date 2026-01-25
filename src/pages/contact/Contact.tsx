import './Contact.css';
import { ContactHero } from '../../components/Hero/Hero';

export const ContactPage = () => {
    return (
        <>
            <ContactHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">

                {/* Light Content */}
                <div className="content-padding">
                    <div className="max-w-[900px] mx-auto">
                        <div className="grid-2 gap-12 items-start">

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-8 font-['Playfair_Display']">Contact Information</h2>

                                <div className="mb-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                                        <div>
                                            <h4 className="text-base font-semibold text-slate-900 mb-1">Email</h4>
                                            <a href="mailto:hello@1eq.in" className="text-[15px] text-[#E63946] no-underline">hello@1eq.in</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-xl flex-shrink-0">💼</div>
                                        <div>
                                            <h4 className="text-base font-semibold text-slate-900 mb-1">Partnerships</h4>
                                            <a href="mailto:partnerships@1eq.in" className="text-[15px] text-blue-600 no-underline">partnerships@1eq.in</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-600/10 flex items-center justify-center text-xl flex-shrink-0">💻</div>
                                        <div>
                                            <h4 className="text-base font-semibold text-slate-900 mb-1">Careers</h4>
                                            <a href="mailto:careers@1eq.in" className="text-[15px] text-emerald-600 no-underline">careers@1eq.in</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                                        <div>
                                            <h4 className="text-base font-semibold text-slate-900 mb-1">Office</h4>
                                            <p className="text-[15px] text-slate-600 leading-[1.6]">907, OCUS Quantum<br />Sector 51, Gurgaon<br />Haryana, India</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-6 border-t border-slate-200">
                                    <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">Follow Us</h4>
                                    <div className="flex gap-3">
                                        {[
                                            { name: 'LinkedIn', icon: 'in', url: '#' },
                                            { name: 'Twitter', icon: '𝕏', url: '#' },
                                            { name: 'Instagram', icon: '◯', url: '#' },
                                            { name: 'YouTube', icon: '▶', url: '#' }
                                        ].map(social => (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                className="w-10 h-10 rounded-[10px] bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 no-underline text-sm font-semibold hover:bg-slate-100 transition-colors"
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-slate-50 p-10 rounded-[20px] border border-slate-200">
                                <h3 className="text-xl font-semibold text-slate-900 mb-6">Send us a message</h3>
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-slate-900 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3.5 py-3.5 bg-white border border-slate-200 rounded-lg text-[15px] text-slate-900 box-border"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-3.5 py-3.5 bg-white border border-slate-200 rounded-lg text-[15px] text-slate-900 box-border"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-slate-900 mb-2">Subject</label>
                                    <select className="w-full px-3.5 py-3.5 bg-white border border-slate-200 rounded-lg text-[15px] text-slate-900 box-border">
                                        <option>General Inquiry</option>
                                        <option>Partnership</option>
                                        <option>Custom Development</option>
                                        <option>Product Support</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                                    <textarea
                                        className="w-full px-3.5 py-3.5 bg-white border border-slate-200 rounded-lg text-[15px] text-slate-900 box-border min-h-[120px] resize-y"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button className="w-full bg-slate-900 text-white border-none py-4 rounded-lg text-base font-semibold cursor-pointer hover:bg-slate-800 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
