import './ProductsSection.css';
import { Pill } from '../Pill/Pill';
import { Link } from 'react-router-dom';

export const ProductsSection = () => (
    <section className="py-[120px] px-12 bg-[var(--color-bg)] font-sans">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-[60px]">
                <Pill>Our Products</Pill>
                <h2 className="text-5xl font-bold text-[var(--color-text)] mt-6 font-serif">
                    Technology built for how India learns
                </h2>
            </div>

            {/* Featured Product - 1PYQ */}
            <div className="hover-lift bg-[var(--color-bg-card)] rounded-3xl p-12 mb-8 border border-[var(--color-border)] grid grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex gap-3 mb-5">
                        <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3.5 py-1.5 rounded-md text-xs font-semibold">FLAGSHIP</span>
                        <span className="bg-[var(--color-bg-hover)] text-[var(--color-text-muted)] px-3.5 py-1.5 rounded-md text-xs border border-[var(--color-border)]">B2C</span>
                    </div>
                    <h3 className="text-[42px] font-bold text-[var(--color-text)] mb-4 font-serif">1PYQ</h3>
                    <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
                        AI-powered precision learning for competitive exam aspirants. Unlike traditional platforms, 1PYQ identifies knowledge gaps and focuses only on what you need to learn.
                    </p>
                    <div className="flex gap-8 mb-6">
                        {[
                            { label: 'Platforms', value: 'Web, iOS, Android' },
                            { label: 'Pricing', value: '₹0 – ₹500/year' },
                            { label: 'Reach', value: 'All Indian states' }
                        ].map(item => (
                            <div key={item.label}>
                                <div className="text-xs text-[var(--color-text-dim)] mb-1">{item.label}</div>
                                <div className="text-sm text-[var(--color-text)] font-medium">{item.value}</div>
                            </div>
                        ))}
                    </div>
                    <Link to='/products'
                        className="bg-[var(--color-primary)] text-[var(--text-light)] border-none px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer"
                    >
                        Learn More →
                    </Link>
                </div>

                <div className="rounded-2xl p-8 min-h-[320px] flex items-center justify-center border border-[var(--color-border)] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-primary)10 0%, var(--color-bg-hover) 100%)' }}>
                    {/* App mockup placeholder */}
                    <div className="w-[200px] h-[400px] bg-[var(--color-bg)] rounded-[32px] border-8 border-[var(--color-text)] p-2 shadow-2xl relative">
                        {/* Phone notch */}
                        <div className="w-20 h-6 bg-[var(--color-text)] rounded-xl mx-auto mb-4" />
                        {/* App content placeholder */}
                        <div className="p-2">
                            <div className="rounded-xl p-4 mb-3" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #FF6B6B 100%)' }}>
                                <div className="text-xs text-white font-semibold mb-1">1PYQ</div>
                                <div className="text-[10px] text-white/80">AI-Powered Learning</div>
                            </div>
                            {/* Placeholder content lines */}
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-10 bg-[var(--color-bg-card)] rounded-lg mb-2 border border-[var(--color-border)]" />
                            ))}
                        </div>
                        {/* Replace with actual screenshot */}
                        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-[var(--color-text-dim)] text-center w-full">
                            Replace with app screenshot
                        </p>
                    </div>
                </div>
            </div>

            {/* Other Products Preview */}
            <div className="flex justify-center gap-4 flex-wrap mb-8">
                {[
                    { name: '1LMS', color: 'var(--color-accent)' },
                    { name: '1ISL Challenge', color: 'var(--color-success)' },
                    { name: 'Client Projects', color: 'var(--color-purple)' }
                ].map(item => (
                    <span
                        key={item.name}
                        className="px-5 py-2.5 rounded-full text-sm font-medium"
                        style={{
                            background: `${item.color}10`,
                            color: item.color,
                            border: `1px solid ${item.color}30`
                        }}
                    >{item.name}</span>
                ))}
            </div>

            <div className="text-center">
                <Link to='/products' className="bg-transparent text-[var(--color-text)] border border-[var(--color-border)] px-7 py-3.5 rounded-lg text-[15px] font-semibold cursor-pointer" >
                    View All Products →
                </Link>
            </div>
        </div>
    </section>
);
