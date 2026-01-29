import './Technology.css';
import { TechonologyHero } from '../../components/Hero/Hero';
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

export const TechnologyPage = () => {
    return (
        <>
            <TechonologyHero />
            <section className="min-h-screen bg-white global-width py-10 global-border-page mx-auto global-padding global-padding-mobile ">

                {/* Tech Stack Section */}
                <div className="w-full mx-auto mb-10 py-7">
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">Our Tech Stack</h2>
                    <p className="md-text-51 custom-h2  max-w-[1000px] mx-auto text-[var(--theme-text-dark)] font-[400] font-lt-remark   mb-4 text-center">
                        We choose technologies that are reliable, scalable, and have strong community support.
                    </p>

                    {/* Languages */}
                    <div className="mb-10 mt-10">
                        <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-3">Languages</h3>
                        <div className="flex gap-3 flex-wrap">
                            {[
                                { name: 'Python', icon: <FaPython /> },
                                { name: 'JavaScript', icon: <IoLogoJavascript /> },
                                { name: 'TypeScript', icon: <SiTypescript /> },
                                { name: 'Java', icon: <FaJava /> },
                                { name: 'Kotlin', icon: <SiKotlin /> },
                                { name: 'Swift', icon: <FaSwift /> }
                            ].map(tech => (
                                <span key={tech.name} className="px-4 py-2 bg-[var(--bg-card)] rounded-full text-[14px] text-[var(--theme-text-medium)] flex items-center gap-2">
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="mb-10">
                        <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-3">Frontend</h3>
                        <div className="flex gap-3 flex-wrap">
                            {[
                                { name: 'React', icon: <FaReact /> },
                                { name: 'Angular', icon: <FaAngular /> },
                                { name: 'React Native', icon: <TbBrandReactNative /> },
                                { name: 'Next.js', icon: <SiNextdotjs /> },
                                { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
                                { name: 'Redux', icon: <TbBrandRedux /> }
                            ].map(tech => (
                                <span key={tech.name} className="px-4 py-2 bg-[var(--bg-card)] rounded-full text-[14px] text-[var(--theme-text-medium)] flex items-center gap-2">
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="mb-10">
                        <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-3">Backend</h3>
                        <div className="flex gap-3 flex-wrap">
                            {[
                                { name: 'Node.js', icon: <FaNode /> },
                                { name: 'Spring Boot', icon: <SiSpringboot /> },
                                { name: 'Django', icon: <DiDjango /> },
                                { name: 'FastAPI', icon: <SiFastapi /> },
                                { name: 'Express.js', icon: <SiExpress /> }
                            ].map(tech => (
                                <span key={tech.name} className="px-4 py-2 bg-[var(--bg-card)] rounded-full text-[14px] text-[var(--theme-text-medium)] flex items-center gap-2">
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="mb-10">
                        <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-3">Databases</h3>
                        <div className="flex gap-3 flex-wrap">
                            {[
                                { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
                                { name: 'MySQL', icon: <SiMysql /> },
                                { name: 'MongoDB', icon: <SiMongodb /> },
                                { name: 'Redis', icon: <DiRedis /> },
                                { name: 'Firebase', icon: <IoLogoFirebase /> }
                            ].map(tech => (
                                <span key={tech.name} className="px-4 py-2 bg-[var(--bg-card)] rounded-full text-[14px] text-[var(--theme-text-medium)] flex items-center gap-2">
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="mb-10">
                        <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-3">Cloud & DevOps</h3>
                        <div className="flex gap-3 flex-wrap">
                            {[
                                { name: 'AWS', icon: <FaAws /> },
                                { name: 'Google Cloud', icon: <SiGooglecloud /> },
                                { name: 'Docker', icon: <FaDocker /> },
                                { name: 'GitHub', icon: <IoLogoGithub /> }
                            ].map(tech => (
                                <span key={tech.name} className="px-4 py-2 bg-[var(--bg-card)] rounded-full text-[14px] text-[var(--theme-text-medium)] flex items-center gap-2">
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* What We Build */}
                <div className="w-full mx-auto mt-10">
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">What We Build</h2>
                    <p className="md-text-51 custom-h2  font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center   ">
                        End-to-end product development across all major platforms.
                    </p>

                    <div className="grid-4 gap-3">
                        {[
                            { icon: '/images/mobile.svg', title: 'Mobile Apps', desc: 'Native iOS & Android, React Native cross-platform', platforms: ['iOS', 'Android', 'Cross-platform'] },
                            { icon: '/images/globe.svg', title: 'Web Applications', desc: 'Responsive SPAs, PWAs, and complex dashboards', platforms: ['React', 'Next.js', 'PWA'] },
                            { icon: '/images/settings.svg', title: 'Backend & APIs', desc: 'RESTful APIs, GraphQL, microservices architecture', platforms: ['REST', 'GraphQL', 'WebSockets'] },
                            { icon: '/images/robot.svg', title: 'AI/ML Solutions', desc: 'Custom ML models, NLP, recommendation systems', platforms: ['TensorFlow', 'OpenAI'] }
                        ].map(item => (
                            <div key={item.title} className="p-4 ">
                                <div className="w-[30px] mb-3"><img src={item.icon} className='h-full w-full object-contain' alt="" /></div>
                                <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{item.title}</h4>
                                <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.5] mb-3">{item.desc}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {item.platforms.map(p => (
                                        <span key={p} className="px-3 py-1 bg-[var(--bg-card)] rounded-full text-[12px] text-[var(--theme-text-medium)] font-[400]">{p}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Expertise */}
                <div className="w-full mx-auto mt-16">
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">Our Expertise</h2>
                    <p className="md-text-51 custom-h2  max-w-[1000px] mx-auto font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center   ">
                        Beyond standard development, we specialize in solving India-specific challenges.
                    </p>

                    <div className="grid-2 gap-4">
                        {[
                            {
                                icon: '/images/wheelchair-person.svg',
                                title: 'Accessibility',
                                desc: 'Indian Sign Language integration, screen reader optimization, WCAG compliance. We build for users with diverse abilities.',
                                stats: '16 Indian languages supported'
                            },
                            {
                                icon: '/images/globe.svg',
                                title: 'Multi-language Support',
                                desc: 'Full localization for Indian languages including RTL support for Urdu. Unicode-first architecture.',
                                stats: 'Hindi, Tamil, Telugu, Bengali + 12 more'
                            },
                            {
                                icon: '/images/offline.svg',
                                title: 'Offline-First Architecture',
                                desc: 'Apps that work without internet. Smart sync, local caching, and bandwidth optimization for Tier 2/3 cities.',
                                stats: 'Works on 2G networks'
                            },
                            {
                                icon: '/images/flash-icon.svg',
                                title: 'Performance Optimization',
                                desc: 'Sub-3 second load times on budget devices. Optimized for low-RAM Android phones that most Indian students use.',
                                stats: 'Optimized for ₹5,000 phones'
                            }
                        ].map(item => (
                            <div key={item.title} className="bg-[var(--bg-card)] p-7 rounded-[5px]">
                                <div className="w-[30px] mb-3"><img src={item.icon} className='h-full w-full object-contain' alt="" /></div>
                                <h4 className="text-[17px] font-[500] text-[var(--theme-text-dark)] mb-2">{item.title}</h4>
                                <p className="text-[15px] text-[var(--theme-text-medium)] leading-[1.6] mb-3">{item.desc}</p>
                                <span className="inline-block px-3 py-1.5 bg-white rounded-full text-[13px] text-[var(--theme-text-medium)] font-[400]">{item.stats}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Engineering Principles */}
                <div className="w-full mx-auto mt-16">
                    <h2 className="text-[19px] font-[400] text-[var(--theme-text-dark)] mb-6 text-center">How We Engineer</h2>
                    <p className="md-text-51 custom-h2 max-w-[800px] mx-auto font-lt-remark text-[var(--theme-text-dark)] font-[400] mb-10 text-center   ">
                        Our engineering culture and principles that guide how we build.
                    </p>

                    <div className="grid-3 gap-4 mb-10">
                        {[
                            { icon: '/images/lock.svg', title: 'Security First', desc: 'End-to-end encryption, regular audits, OWASP compliance' },
                            { icon: '/images/bar-chart.svg', title: 'Data-Driven', desc: 'Analytics built-in from day one. We measure what matters.' },
                            { icon: '/images/test-tube.svg', title: 'Test Coverage', desc: '80%+ test coverage. Automated CI/CD pipelines.' },
                            { icon: '/images/book-open.svg', title: 'Documentation', desc: 'Comprehensive docs for every project we deliver.' },
                            { icon: '/images/repeat.svg', title: 'Agile Sprints', desc: '2-week sprints with demos. You see progress constantly.' },
                            { icon: '/images/shield.svg', title: 'Code Reviews', desc: 'Every PR is reviewed. Quality is non-negotiable.' }
                        ].map(item => (
                            <div key={item.title} className="p-6 rounded-2xl flex flex-col items-center">
                                <div className="w-[30px] mb-3 "><img src={item.icon} className='h-full w-full object-contain' alt="" /></div>
                                <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{item.title}</h4>
                                <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.5] text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    {/* <div className="bg-[var(--bg-card)] rounded-[5px] py-8 p-5 mt-8 text-center">
                        <h2 className="text-[40px] text-slate-900 mb-4 font-lt-remark">
                            Have a project in mind?
                        </h2>
                        <p className="text-[16px] text-[var(--theme-text-medium)] font-[400] mb-8 max-w-[495px] mx-auto">
                            Let's discuss how our tech expertise can help you build something impactful.
                        </p>
                        <button className="px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]">
                            Start a Conversation →
                        </button>
                    </div> */}
                </div>
            </section>
        </>
    );
};
