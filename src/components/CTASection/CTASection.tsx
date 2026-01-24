import './CTASection.css';

interface CTASectionProps {
    setActivePage: (page: string) => void;
}

export const CTASection = ({ setActivePage }: CTASectionProps) => (
    <section className="py-[120px] px-12 bg-gradient-to-b from-[var(--color-bg-dark-alt)] to-[var(--color-bg-dark)] font-sans relative overflow-hidden">
        {/* Background gradient */}
        <div
            className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, var(--color-primary)15 0%, transparent 70%)' }}
        />

        <div className="max-w-[800px] mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/25 px-4 py-2 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-light)]" />
                <span className="text-[13px] font-medium text-[var(--color-text-light)]">Get Started</span>
            </div>
            <h2 className="text-[56px] font-medium text-[var(--color-text-light)] mt-6 mb-6 font-serif">
                Ready to build something that matters?
            </h2>
            <p className="text-lg text-[var(--color-text-light-muted)] mb-10">
                We partner with organizations that share our mission to make education accessible for all.
            </p>
            <div className="flex gap-4 justify-center">
                <button
                    onClick={() => setActivePage('contact')}
                    className="bg-[var(--color-text-light)] text-[var(--color-text)] border-none px-8 py-4 rounded-lg text-base font-semibold cursor-pointer"
                >
                    Get in Touch
                </button>
                <button
                    onClick={() => setActivePage('about')}
                    className="bg-transparent text-[var(--color-text-light)] border border-[var(--color-border-dark)] px-8 py-4 rounded-lg text-base font-medium cursor-pointer"
                >
                    About Us
                </button>
            </div>
        </div>
    </section>
);
