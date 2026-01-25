import './Technology.css';
import { TechonologyHero } from '../../components/Hero/Hero';

export const TechnologyPage = () => {
    return (
        <>
            <TechonologyHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">

                {/* Tech Stack Section */}
                <div className="content-padding border-b border-slate-200">
                    <div className="max-w-[1000px] mx-auto">
                        <h2 className="text-[32px] font-semibold text-slate-900 mb-4 font-['Playfair_Display']">Our Tech Stack</h2>
                        <p className="text-[17px] text-slate-600 mb-12 max-w-[600px]">
                            We choose technologies that are reliable, scalable, and have strong community support.
                        </p>

                        {/* Languages */}
                        <div className="mb-12">
                            <h3 className="text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wide">Languages</h3>
                            <div className="flex gap-4 flex-wrap">
                                {[
                                    { name: 'Python', icon: '🐍', color: '#3776AB' },
                                    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
                                    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
                                    { name: 'Java', icon: '☕', color: '#ED8B00' },
                                    { name: 'Kotlin', icon: '🎯', color: '#7F52FF' },
                                    { name: 'Swift', icon: '🍎', color: '#FA7343' }
                                ].map(tech => (
                                    <div key={tech.name} className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 rounded-xl border border-slate-200">
                                        <span className="text-xl">{tech.icon}</span>
                                        <span className="text-[15px] font-medium text-slate-900">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Frontend */}
                        <div className="mb-12">
                            <h3 className="text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wide">Frontend</h3>
                            <div className="flex gap-4 flex-wrap">
                                {[
                                    { name: 'React', icon: '⚛️', color: '#61DAFB' },
                                    { name: 'React Native', icon: '📱', color: '#61DAFB' },
                                    { name: 'Next.js', icon: '▲', color: '#000000' },
                                    { name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4' },
                                    { name: 'Redux', icon: '🔄', color: '#764ABC' }
                                ].map(tech => (
                                    <div key={tech.name} className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 rounded-xl border border-slate-200">
                                        <span className="text-xl">{tech.icon}</span>
                                        <span className="text-[15px] font-medium text-slate-900">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="mb-12">
                            <h3 className="text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wide">Backend</h3>
                            <div className="flex gap-4 flex-wrap">
                                {[
                                    { name: 'Node.js', icon: '🟢', color: '#339933' },
                                    { name: 'Spring Boot', icon: '🍃', color: '#6DB33F' },
                                    { name: 'Django', icon: '🎸', color: '#092E20' },
                                    { name: 'FastAPI', icon: '⚡', color: '#009688' },
                                    { name: 'Express.js', icon: '🚂', color: '#000000' }
                                ].map(tech => (
                                    <div key={tech.name} className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 rounded-xl border border-slate-200">
                                        <span className="text-xl">{tech.icon}</span>
                                        <span className="text-[15px] font-medium text-slate-900">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="mb-12">
                            <h3 className="text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wide">Databases</h3>
                            <div className="flex gap-4 flex-wrap">
                                {[
                                    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
                                    { name: 'MySQL', icon: '🐬', color: '#4479A1' },
                                    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
                                    { name: 'Redis', icon: '🔴', color: '#DC382D' },
                                    { name: 'Firebase', icon: '🔥', color: '#FFCA28' }
                                ].map(tech => (
                                    <div key={tech.name} className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 rounded-xl border border-slate-200">
                                        <span className="text-xl">{tech.icon}</span>
                                        <span className="text-[15px] font-medium text-slate-900">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cloud & DevOps */}
                        <div className="mb-0">
                            <h3 className="text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wide">Cloud & DevOps</h3>
                            <div className="flex gap-4 flex-wrap">
                                {[
                                    { name: 'AWS', icon: '☁️', color: '#FF9900' },
                                    { name: 'Google Cloud', icon: '🌐', color: '#4285F4' },
                                    { name: 'Vercel', icon: '▲', color: '#000000' },
                                    { name: 'Docker', icon: '🐳', color: '#2496ED' },
                                    { name: 'GitHub Actions', icon: '⚙️', color: '#2088FF' }
                                ].map(tech => (
                                    <div key={tech.name} className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 rounded-xl border border-slate-200">
                                        <span className="text-xl">{tech.icon}</span>
                                        <span className="text-[15px] font-medium text-slate-900">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Build */}
                <div className="content-padding bg-slate-50 border-b border-slate-200">
                    <div className="max-w-[1000px] mx-auto">
                        <h2 className="text-[32px] font-semibold text-slate-900 mb-4 font-['Playfair_Display']">What We Build</h2>
                        <p className="text-[17px] text-slate-600 mb-12 max-w-[600px]">
                            End-to-end product development across all major platforms.
                        </p>

                        <div className="grid-4 gap-6">
                            {[
                                { icon: '📱', title: 'Mobile Apps', desc: 'Native iOS & Android, React Native cross-platform', platforms: ['iOS', 'Android', 'Cross-platform'] },
                                { icon: '🌐', title: 'Web Applications', desc: 'Responsive SPAs, PWAs, and complex dashboards', platforms: ['React', 'Next.js', 'PWA'] },
                                { icon: '⚙️', title: 'Backend & APIs', desc: 'RESTful APIs, GraphQL, microservices architecture', platforms: ['REST', 'GraphQL', 'WebSockets'] },
                                { icon: '🤖', title: 'AI/ML Solutions', desc: 'Custom ML models, NLP, recommendation systems', platforms: ['TensorFlow', 'OpenAI', 'Custom ML'] }
                            ].map(item => (
                                <div key={item.title} className="bg-white rounded-[20px] p-8 border border-slate-200">
                                    <div className="text-[40px] mb-5">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-[1.6] mb-4">{item.desc}</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {item.platforms.map(p => (
                                            <span key={p} className="px-2.5 py-1 bg-slate-50 rounded-full text-xs text-slate-500 border border-slate-200">{p}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Expertise */}
                <div className="content-padding border-b border-slate-200">
                    <div className="max-w-[1000px] mx-auto">
                        <h2 className="text-[32px] font-semibold text-slate-900 mb-4 font-['Playfair_Display']">Our Expertise</h2>
                        <p className="text-[17px] text-slate-600 mb-12 max-w-[600px]">
                            Beyond standard development, we specialize in solving India-specific challenges.
                        </p>

                        <div className="grid-2 gap-6">
                            {[
                                {
                                    icon: '♿',
                                    title: 'Accessibility',
                                    desc: 'Indian Sign Language integration, screen reader optimization, WCAG compliance. We build for users with diverse abilities.',
                                    bgGradient: 'bg-gradient-to-br from-emerald-600/5 to-slate-50',
                                    iconBg: 'bg-emerald-600/10',
                                    border: 'border-emerald-600/20',
                                    badgeBg: 'bg-emerald-600/10',
                                    badgeText: 'text-emerald-600',
                                    stats: '18 Indian languages supported'
                                },
                                {
                                    icon: '🌐',
                                    title: 'Multi-language Support',
                                    desc: 'Full localization for Indian languages including RTL support for Urdu. Unicode-first architecture.',
                                    bgGradient: 'bg-gradient-to-br from-blue-600/5 to-slate-50',
                                    iconBg: 'bg-blue-600/10',
                                    border: 'border-blue-600/20',
                                    badgeBg: 'bg-blue-600/10',
                                    badgeText: 'text-blue-600',
                                    stats: 'Hindi, Tamil, Telugu, Bengali + 14 more'
                                },
                                {
                                    icon: '📴',
                                    title: 'Offline-First Architecture',
                                    desc: 'Apps that work without internet. Smart sync, local caching, and bandwidth optimization for Tier 2/3 cities.',
                                    bgGradient: 'bg-gradient-to-br from-[#E63946]/5 to-slate-50',
                                    iconBg: 'bg-[#E63946]/10',
                                    border: 'border-[#E63946]/20',
                                    badgeBg: 'bg-[#E63946]/10',
                                    badgeText: 'text-[#E63946]',
                                    stats: 'Works on 2G networks'
                                },
                                {
                                    icon: '⚡',
                                    title: 'Performance Optimization',
                                    desc: 'Sub-3 second load times on budget devices. Optimized for low-RAM Android phones that most Indian students use.',
                                    bgGradient: 'bg-gradient-to-br from-purple-600/5 to-slate-50',
                                    iconBg: 'bg-purple-600/10',
                                    border: 'border-purple-600/20',
                                    badgeBg: 'bg-purple-600/10',
                                    badgeText: 'text-purple-600',
                                    stats: 'Optimized for ₹5,000 phones'
                                }
                            ].map(item => (
                                <div key={item.title} className={`${item.bgGradient} rounded-[20px] p-8 border ${item.border}`}>
                                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center text-[28px] mb-5`}>{item.icon}</div>
                                    <h3 className="text-[22px] font-semibold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-[15px] text-slate-600 leading-[1.7] mb-4">{item.desc}</p>
                                    <span className={`inline-block px-3 py-1.5 ${item.badgeBg} rounded-full text-[13px] ${item.badgeText} font-medium`}>{item.stats}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Engineering Principles */}
                <div className="content-padding">
                    <div className="max-w-[1000px] mx-auto">
                        <h2 className="text-[32px] font-semibold text-slate-900 mb-4 font-['Playfair_Display']">How We Engineer</h2>
                        <p className="text-[17px] text-slate-600 mb-12 max-w-[600px]">
                            Our engineering culture and principles that guide how we build.
                        </p>

                        <div className="grid-3 gap-6 mb-10">
                            {[
                                { icon: '🔒', title: 'Security First', desc: 'End-to-end encryption, regular audits, OWASP compliance' },
                                { icon: '📊', title: 'Data-Driven', desc: 'Analytics built-in from day one. We measure what matters.' },
                                { icon: '🧪', title: 'Test Coverage', desc: '80%+ test coverage. Automated CI/CD pipelines.' },
                                { icon: '📖', title: 'Documentation', desc: 'Comprehensive docs for every project we deliver.' },
                                { icon: '🔄', title: 'Agile Sprints', desc: '2-week sprints with demos. You see progress constantly.' },
                                { icon: '🛡️', title: 'Code Reviews', desc: 'Every PR is reviewed. Quality is non-negotiable.' }
                            ].map(item => (
                                <div key={item.title} className="p-7 bg-slate-50 rounded-2xl border border-slate-200">
                                    <div className="text-[32px] mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-[1.6]">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f35] rounded-3xl p-10 text-center">
                            <h3 className="text-[28px] font-semibold text-white mb-3 font-['Playfair_Display']">
                                Have a project in mind?
                            </h3>
                            <p className="text-base text-white/70 mb-6">
                                Let's discuss how our tech expertise can help you build something impactful.
                            </p>
                            <button className="bg-white text-slate-900 border-none px-8 py-4 rounded-lg text-base font-semibold cursor-pointer">
                                Start a Conversation →
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
