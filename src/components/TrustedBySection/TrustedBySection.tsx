import './TrustedBySection.css';

export const TrustedBySection = () => (
    <section className="py-20 px-12 bg-[var(--color-bg)] font-sans">
        <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-sm text-[var(--color-text-dim)] uppercase tracking-wide mb-8">
                Trusted by educators and institutions across India
            </p>
            <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
                {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map((partner) => (
                    <div
                        key={partner}
                        className="px-8 py-4 bg-[var(--color-bg-card)] rounded-lg text-sm font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                        {partner} Logo
                    </div>
                ))}
            </div>
        </div>
    </section>
);
