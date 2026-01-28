import './ProductsSection.css';
import { Link } from 'react-router-dom';

export const ProductsSection = () => (
    <section className="  bg-[var(--color-bg)] ">
        <div className="global-width global-padding py-10 global-border-page w-full mx-auto">
            <div className="text-center mb-[60px]">
                <p className='text-[16px] uppercase font-[600] text-[var(--theme-black)] tracking-[0.05em]'>Our Products</p>
                <h2 className="text-[51px] font-[400] font-lt-remark text-center text-[var(--thene-black)] mt-6 ">
                    Technology built for how India learns
                </h2>
            </div>

            {/* Featured Product - 1PYQ */}
            <div className=" mb-8 flex bg-[var(--bg-card)]">

                <div className='  w-1/2  p-8 flex flex-col justify-center '>
                    <div className="flex gap-3 mb-5 items-center">
                        <span className="text-[var(--theme-black)] text-xs font-semibold">FLAGSHIP</span>
                        <span className="bg-[var(--color-bg-hover)] text-[var(--color-text-muted)] px-3.5 py-1.5 rounded-md text-xs border border-[var(--color-border)]">B2C</span>
                    </div>
                    <span className='flex itmes-center justify-center w-[100px] mb-4'>
                        <svg width="100%" height="100%" viewBox="0 0 569 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.13 165.83V42.0901H-9.65595e-06L5.51999 4.83007H77.28V165.83H30.13ZM94.397 165.83V4.83007H189.387C208.86 4.83007 223.887 10.1967 234.467 20.9301C244.74 31.3567 249.877 46.0001 249.877 64.8601C249.877 85.1001 243.82 100.587 231.707 111.32C220.36 121.287 205.027 126.27 185.707 126.27H142.697V165.83H94.397ZM142.697 88.3201H180.877C195.137 88.3201 202.267 80.8834 202.267 66.0101C202.267 51.1367 194.984 43.7001 180.417 43.7001H142.697V88.3201ZM292.661 165.83V114.31L222.051 4.83007H276.331L316.121 69.0001H318.421L358.671 4.83007H411.571L341.191 114.08V165.83H292.661ZM538.78 23.0001C555.34 38.3334 563.62 59.1101 563.62 85.3301C563.62 99.1301 560.63 111.78 554.65 123.28L568.68 132.48V175.26H568.45L532.34 152.03C516.547 164.45 496.307 170.66 471.62 170.66C443.254 170.66 420.867 162.993 404.46 147.66C387.9 132.173 379.62 111.397 379.62 85.3301C379.62 59.1101 387.9 38.3334 404.46 23.0001C420.867 7.66674 443.254 7.45058e-05 471.62 7.45058e-05C499.987 7.45058e-05 522.374 7.66674 538.78 23.0001ZM439.65 53.1301C431.677 61.1034 427.69 72.2201 427.69 86.4801C427.69 100.587 431.677 111.627 439.65 119.6C447.777 127.88 458.817 132.02 472.77 132.02C481.357 132.02 489.1 130.487 496 127.42L459.89 105.57L478.52 77.2801L516.47 100.74C517.544 96.9067 518.08 92.1534 518.08 86.4801C518.08 72.2201 514.094 61.1034 506.12 53.1301C497.994 45.0034 486.877 40.9401 472.77 40.9401C458.51 40.9401 447.47 45.0034 439.65 53.1301Z" fill="#0a1014" />
                        </svg>
                    </span>

                    <p className="text-[16px] text-[var(--theme-text-medium)] leading-relaxed mb-6">
                        AI-powered precision learning for competitive exam aspirants. Unlike traditional platforms, 1PYQ identifies knowledge gaps and focuses only on what you need to learn.
                    </p>
                    <div className="flex gap-8 mb-9">
                        {[
                            { label: 'Platforms', value: 'Web, iOS, Android' },
                            { label: 'Pricing', value: '₹0 – ₹500/year' },
                            { label: 'Reach', value: 'All Indian states' }
                        ].map(item => (
                            <div key={item.label}>
                                <div className="text-xs text-[var(--theme-text-light)] mb-1">{item.label}</div>
                                <div className="text-sm text-[var(--theme-text-dark)] font-medium">{item.value}</div>
                            </div>
                        ))}
                    </div>
                    <Link to="/products" className='px-[18px] w-max  hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>Learn More →</Link>
                </div>

                <div className=" p-8  rounded-[6px] w-1/2  flex items-center justify-center " >
                    <div className="w-[320px] flex items-center justify-center"
                        style={{ filter: 'drop-shadow(#afafaf96 0 0 20px);' }}>
                        <img
                            src="/images/1pyq-poster.webp"
                            className="h-full w-full object-contain"
                            alt="" />
                    </div>
                </div>
            </div>

            {/* Other Products Preview */}
            <div className="flex justify-center gap-4 flex-wrap mb-8">
                {[
                    { name: '1LMS' },
                    { name: '1ISL Challenge' },
                    { name: 'Client Projects' }
                ].map(item => (
                    <span
                        key={item.name}
                        className="px-5 py-2.5 rounded-full bg-[var(--bg-card)] text-[var(--theme-text-medium)] text-[16px] font-medium"
                    >{item.name}</span>
                ))}
            </div>

            <div className="text-center">
                <Link to="/products" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>View All Products →</Link>

            </div>
        </div>
    </section>
);
