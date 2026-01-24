import './ServicesSection.css';
import { Pill } from '../Pill/Pill';

interface ServicesSectionProps {
    setActivePage: (page: string) => void;
}

export const ServicesSection = ({ setActivePage }: ServicesSectionProps) => (
    <section className="py-[120px] px-12 bg-[var(--color-bg-card)] font-sans">
        <div className="max-w-[1000px] mx-auto text-center">
            <Pill color="var(--color-purple)">Services</Pill>
            <h2 className="text-5xl font-bold text-[var(--color-text)] mt-6 mb-5 font-serif">
                How we can help
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-[600px] mx-auto">
                Custom development, white-label platforms, tech consulting, and accessibility solutions — all built by our in-house team.
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-12">
                {['Custom Dev', 'White-label LMS', 'Tech Consulting', 'Accessibility'].map(tag => (
                    <span key={tag} className="px-5 py-2.5 bg-[var(--color-bg)] rounded-full text-sm text-[var(--color-text-muted)] border border-[var(--color-border)]">{tag}</span>
                ))}
            </div>

            <button
                onClick={() => setActivePage('services')}
                className="bg-[var(--color-text)] text-[var(--color-text-light)] border-none px-8 py-4 rounded-lg text-[15px] font-semibold cursor-pointer"
            >
                View All Services →
            </button>
        </div>
    </section>
);
