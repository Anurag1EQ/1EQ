import './ImpactSection.css';

export const ImpactSection = () => (
    <section className="">
        <div className="global-width global-border-page mx-auto global-padding global-padding-mobile  py-5 min-h-[400px] flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[var(--theme-black)] to-[var(--theme-black)] rounded-3xl p-[60px] grid grid-cols-4 gap-8 text-center">
                {[
                    { value: '50,000+', label: 'Learners served' },
                    { value: '1M+', label: 'Questions answered' },
                    { value: '28', label: 'States reached' },
                    { value: '18', label: 'Languages supported' }
                ].map(stat => (
                    <div key={stat.label}>
                        <div className="text-[42px] font-semibold text-[var(--color-text-light)] font-lt-remark mb-2">{stat.value}</div>
                        <div className="text-sm text-[var(--theme-text-light)]">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
