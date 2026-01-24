import './ImpactSection.css';

export const ImpactSection = () => (
    <section className="py-20 px-12 bg-[var(--color-bg)] font-sans">
        <div className="max-w-[1000px] mx-auto">
            <div className="bg-gradient-to-br from-[var(--color-bg-dark)] to-[var(--color-bg-dark-alt)] rounded-3xl p-[60px] grid grid-cols-4 gap-8 text-center">
                {[
                    { value: '50,000+', label: 'Learners served' },
                    { value: '1M+', label: 'Questions answered' },
                    { value: '28', label: 'States reached' },
                    { value: '18', label: 'Languages supported' }
                ].map(stat => (
                    <div key={stat.label}>
                        <div className="text-[42px] font-semibold text-[var(--color-text-light)] font-serif mb-2">{stat.value}</div>
                        <div className="text-sm text-[var(--color-text-light-muted)]">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
