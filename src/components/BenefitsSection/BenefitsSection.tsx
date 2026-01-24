import './BenefitsSection.css';
import { Pill } from '../Pill/Pill';

export const BenefitsSection = () => (
    <section className="py-[120px] px-12 bg-[var(--color-bg)] font-sans">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-[60px]">
                <Pill color="var(--color-success)">Why 1EQ</Pill>
                <h2 className="text-5xl font-bold text-[var(--color-text)] mt-6 font-serif">
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
                        className="hover-lift bg-[var(--color-bg-card)] rounded-[20px] p-8 border border-[var(--color-border)]"
                    >
                        <div className="w-14 h-14 rounded-[14px] bg-[var(--color-bg-hover)] flex items-center justify-center text-2xl mb-5">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-[var(--color-text)] mb-2">{item.title}</h4>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
