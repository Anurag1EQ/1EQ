import './BenefitsSection.css';
import { Pill } from '../Pill/Pill';

export const BenefitsSection = () => (
    <section className="w-full">
        <div className="global-width global-border-page mx-auto px-6 py-[60px]">
            <div className="text-center mb-[60px]">
                <Pill color="var(--color-success)">Why 1EQ</Pill>
                <h2 className="text-5xl font-bold text-[var(--theme-text-dark)] mt-6 ">
                    We're not a generic dev shop
                </h2>
            </div>

            <div className="grid-3 gap-6">
                {[
                    { icon: '🎓', title: 'EdTech DNA', desc: "We understand pedagogy, learning outcomes, and what makes education stick." },
                    { icon: '👥', title: 'In-house Team', desc: '20-person tech team. No outsourcing. Direct communication with builders.' },
                    { icon: '♿', title: 'Accessibility First', desc: 'Multi-language, low-bandwidth, sign language — we build for everyone.' },
                    { icon: '🎯', title: 'Mission Aligned', desc: "We partner with orgs that believe education shouldn't depend on pin code." },
                    { icon: '⚡', title: 'Battle-tested Tech', desc: "Our products serve real users daily. We build what works, not what demos well." },
                    { icon: '🤝', title: 'Long-term Partners', desc: "We don't disappear after delivery. We grow with you." }
                ].map(item => (
                    <div
                        key={item.title}
                        className=" bg-[var(--bg-card)] rounded-[5px] p-8 shadow-md"
                    >
                        <div className="w-14 h-14 rounded-[14px] bg-[var(--color-bg-hover)] flex items-center justify-center text-2xl mb-5">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-[var(--theme-text-dark)] mb-2">{item.title}</h4>
                        <p className="text-sm text-[var(--theme-text-medium)] leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
