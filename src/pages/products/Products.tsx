import './Products.css';
import { ProductsHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";

export const ProductsPage = () => {
    return (
        <>
            <ProductsHero />
            <section className="min-h-screen bg-white global-width py-10  global-border-page mx-auto global-padding">

                <div className="w-full mx-auto mb-10 py-7">
                    <h2 className="text-[51px] font-lt-remark font-[400] text-[var(--theme-text-dark)] mb-6 text-center">Which product is right for you?</h2>
                    <div className="grid-3 gap-4">
                        {[
                            { question: "Preparing for competitive exams?", answer: "1PYQ", color: "text-[#E63946]" },
                            { question: "Running a coaching center or school?", answer: "1LMS", color: "text-blue-600" },
                            { question: "Learning or teaching sign language?", answer: "1ISL Challenge", color: "text-emerald-600" }
                        ].map(item => (
                            <div key={item.answer} className=" p-6 rounded-[5px] bg-[var(--bg-card)] text-center">
                                <p className="text-[16px] text-[var(--theme-text-dark)] mb-3">{item.question}</p>
                                <p className={`text-[20px] font-[500] text-[var(--theme-text-dark)]`}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="w-full mx-auto mt-4">

                    {/* ========== 1PYQ SECTION ========== */}
                    <div id="1pyq" className="mb-25">

                        <div className=' w-full flex items-center justify-between rounded-[5px] '>
                            <div className='bg-[var(--bg-card)] w-1/2 p-6 flex flex-col grow-1'>

                                <div className='flex items-end gap-4 mb-3'>
                                    <div className='w-[120px] flex items-center justify-center'>
                                        <svg width="100%" height="100%" viewBox="0 0 569 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.13 165.83V42.0901H-9.65595e-06L5.51999 4.83007H77.28V165.83H30.13ZM94.397 165.83V4.83007H189.387C208.86 4.83007 223.887 10.1967 234.467 20.9301C244.74 31.3567 249.877 46.0001 249.877 64.8601C249.877 85.1001 243.82 100.587 231.707 111.32C220.36 121.287 205.027 126.27 185.707 126.27H142.697V165.83H94.397ZM142.697 88.3201H180.877C195.137 88.3201 202.267 80.8834 202.267 66.0101C202.267 51.1367 194.984 43.7001 180.417 43.7001H142.697V88.3201ZM292.661 165.83V114.31L222.051 4.83007H276.331L316.121 69.0001H318.421L358.671 4.83007H411.571L341.191 114.08V165.83H292.661ZM538.78 23.0001C555.34 38.3334 563.62 59.1101 563.62 85.3301C563.62 99.1301 560.63 111.78 554.65 123.28L568.68 132.48V175.26H568.45L532.34 152.03C516.547 164.45 496.307 170.66 471.62 170.66C443.254 170.66 420.867 162.993 404.46 147.66C387.9 132.173 379.62 111.397 379.62 85.3301C379.62 59.1101 387.9 38.3334 404.46 23.0001C420.867 7.66674 443.254 7.45058e-05 471.62 7.45058e-05C499.987 7.45058e-05 522.374 7.66674 538.78 23.0001ZM439.65 53.1301C431.677 61.1034 427.69 72.2201 427.69 86.4801C427.69 100.587 431.677 111.627 439.65 119.6C447.777 127.88 458.817 132.02 472.77 132.02C481.357 132.02 489.1 130.487 496 127.42L459.89 105.57L478.52 77.2801L516.47 100.74C517.544 96.9067 518.08 92.1534 518.08 86.4801C518.08 72.2201 514.094 61.1034 506.12 53.1301C497.994 45.0034 486.877 40.9401 472.77 40.9401C458.51 40.9401 447.47 45.0034 439.65 53.1301Z" fill="var(--theme-black)" />
                                        </svg>

                                    </div>
                                    <div className="flex gap-3 flex-wrap">
                                        <span className=" bg-[var(--bg-card-light)] text-[var(--theme-text-medium)]  rounded-md text-[12px] font-[400]">B2C</span>
                                        <span className=" bg-[var(--bg-card-light)] text-[var(--theme-text-medium)]  rounded-md text-[12px] font-[400]">FLAGSHIP</span>
                                    </div>
                                </div>

                                <p className="text-[14px] text-[var(--theme-text-medium)] mt-2 italic">Print. Practice. Personalise Your Questions</p>
                                <p className="text-[16px] text-[var(--theme-text-dark)] font-[500] mb-4">AI-powered precision learning for exam aspirants</p>

                                <div className="flex flex-col gap-2 mb-5 bg-white p-3 ">
                                    <p className="text-[18px] text-[var(--theme-text-dark)]  italic">अहम् शिक्षकः।</p>
                                    <p className="text-[15px] text-[var(--theme-text-medium)] italic">Aham Shikṣakaḥ</p>
                                    <p className="text-[14px] text-[var(--theme-text-medium)]  italic">"I am the teacher." Self-learning isn't the fallback. It's the future.</p>
                                </div>

                                <p className="text-[16px] text-[var(--theme-text-medium)] leading-[1.4] mb-10 ">
                                    Unlike traditional platforms that restart everyone from scratch, 1PYQ uses AI to identify your specific knowledge gaps and creates a personalized learning path. Stop wasting time on what you already know focus only on what you need to learn.
                                </p>

                                {/* Download buttons */}
                                <div className="flex-buttons flex-wrap gap-3">

                                    <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.app.onepyq" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <FaGooglePlay />
                                        <span>Google Play</span>
                                    </Link>
                                    <Link target="_blank" to="https://apps.apple.com/in/app/1pyq/id6473720012?l" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <FaApple />
                                        <span>App Store</span>
                                    </Link>
                                    <Link target="_blank" to="https://app.1pyq.com/app1/" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <span>Try Web Version →</span>
                                    </Link>

                                </div>
                            </div>

                            <div className='flex p-6 items-center justify-center w-1/2 grow-1'>
                                <img src="/images/1pyq-poster-3.webp" className='h-full w-full object-contain' alt="" />
                            </div>

                        </div>


                        {/* Features Grid */}
                        <div className="grid-3 mb-10 mt-10 ">
                            {[
                                { icon: '/images/target-lock.svg', title: 'AI Gap Analysis', desc: 'Identifies exactly where you need to improve' },
                                { icon: '/images/repeat.svg', title: 'Spaced Repetition', desc: 'Scientifically-proven retention system' },
                                { icon: '/images/bar-chart.svg', title: 'Progress Tracking', desc: 'Visual analytics of your preparation' },
                                { icon: '/images/offline.svg', title: 'Offline Mode', desc: 'Download and learn without internet' },
                                { icon: '/images/globe.svg', title: 'Multi-language', desc: 'Available in Hindi and English' },
                                { icon: '/images/money-bag.svg', title: 'Affordable', desc: 'Starting at ₹0, capped at ₹500/year' }
                            ].map(feature => (
                                <div key={feature.title} className=" p-6 rounded-2xl flex flex-col items-center">
                                    <div className="w-[30px] mb-3">
                                        <img src={feature.icon} alt="" className='h-full w-full object-contain' />
                                    </div>
                                    <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{feature.title}</h4>
                                    <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.5]">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Supported Exams */}
                        <div className=" mb-10 flex flex-col gap-3">
                            <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] ">Supported Exams</h3>
                            <div className="flex gap-3 flex-wrap">
                                {['UPSC', 'SSC CGL', 'SSC CHSL', 'Banking (IBPS/SBI)', 'Railways', 'State PSC', 'CTET', 'NTA UGC NET'].map(exam => (
                                    <span key={exam} className="px-4 py-2 bg-[var(--bg-card)] rounded-full text-[14px] text-[var(--theme-text-medium)] ">{exam}</span>
                                ))}
                            </div>
                        </div>

                        {/* <section className='w-full flex flex-col items-center mb-5 gap-4'>
                            <h3 className="text-[18px] tracking-[0.04em] font-[500] text-[var(--theme-text-dark)] uppercase">Pricing</h3>
                            <p className="text-[18px] tracking-[0.04em]  text-[var(--theme-text-medium)] text-center">Subscribe via the app or website. No hidden fees.</p>
                            <div className='flex gap-4 w-full mt-3'>
                                <div className='bg-[var(--bg-card)] p-6 rounded-[3px] flex flex-col justify-between h-100 w-1/2 grow-1'>
                                    <div className='flex flex-col'>
                                        <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)]">Starter Free</h4>
                                        <p className="text-[14px] font-[400] text-[var(--theme-text-medium)]">Best for businesses who test if AI can boost their efficiency.</p>
                                        <p className="text-[40px] font-[500] text-[var(--theme-text-dark)] my-4">₹0</p>

                                        <div className='flex flex-col gap-1'>
                                            {
                                                [
                                                    'Unlimited Access',
                                                    'No Hidden Fees',
                                                    'Multi-Device Access',
                                                    'Offline Access',
                                                    'Multi-Language Support',
                                                    'Regular Updates',
                                                ].map(elem => (
                                                    <div key={elem} className='flex items-center gap-2 text-[14px] text-[var(--theme-text-medium)]'>
                                                        <FaCheckCircle />
                                                        <p>{elem}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Link to="/products" className='px-[18px] mt-6  w-full gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <span>Get Started →</span>
                                    </Link>
                                </div>

                                <div className='bg-[var(--bg-card)] p-6 rounded-[3px] flex flex-col justify-between h-100 w-1/2 grow-1'>
                                    <div className='flex flex-col'>
                                        <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)]">Most Popular</h4>
                                        <p className="text-[14px] font-[400] text-[var(--theme-text-medium)]">Best for businesses who test if AI can boost their efficiency.</p>
                                        <p className="text-[40px] font-[500] text-[var(--theme-text-dark)] my-4">₹10 <span className="text-[16px] text-[var(--theme-text-medium)]">/month</span></p>

                                        <div className='flex flex-col gap-1'>
                                            {
                                                [
                                                    'Unlimited Access',
                                                    'No Hidden Fees',
                                                    'Multi-Device Access',
                                                    'Offline Access',
                                                    'Multi-Language Support',
                                                    'Regular Updates',
                                                ].map(elem => (
                                                    <div key={elem} className='flex items-center gap-2 text-[14px] text-[var(--theme-text-medium)]'>
                                                        <FaCheckCircle />
                                                        <p>{elem}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Link to="/products" className='px-[18px] mt-6  w-full gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <span>Get Started →</span>
                                    </Link>
                                </div>

                                <div className='bg-[var(--bg-card)] p-6 rounded-[3px] flex flex-col justify-between h-100 w-1/2 grow-1'>
                                    <div className='flex flex-col'>
                                        <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)]">Yearly CAP</h4>
                                        <p className="text-[14px] font-[400] text-[var(--theme-text-medium)]">Best for businesses who test if AI can boost their efficiency.</p>
                                        <p className="text-[40px] font-[500] text-[var(--theme-text-dark)] my-4">₹500 <span className="text-[16px] text-[var(--theme-text-medium)]">/year</span></p>

                                        <div className='flex flex-col gap-1'>
                                            {
                                                [
                                                    'Unlimited Access',
                                                    'No Hidden Fees',
                                                    'Multi-Device Access',
                                                    'Offline Access',
                                                    'Multi-Language Support',
                                                    'Regular Updates',
                                                ].map(elem => (
                                                    <div key={elem} className='flex items-center gap-2 text-[14px] text-[var(--theme-text-medium)]'>
                                                        <FaCheckCircle />
                                                        <p>{elem}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Link to="/products" className='px-[18px] mt-6  w-full gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <span>Get Started →</span>
                                    </Link>
                                </div>
                            </div>
                        </section> */}




                    </div>

                    {/* ========== 1LMS SECTION ========== */}
                    <div id="1lms" className="mt-[80px]">

                        <div className=' w-full flex items-center justify-between rounded-[5px] '>
                            <div className='bg-[var(--bg-card)] w-1/2 p-6 flex flex-col flex-1'>

                                <div className='flex items-end gap-4 mb-3'>
                                    <p className="text-[40px] font-[700] tracking-[1px] text-[var(--theme-text-dark)] font-[500] leading-[0.9]">1LMS</p>
                                    {/* <div className='w-[120px] flex items-center justify-center'>
                                        <svg width="100%" height="100%" viewBox="0 0 569 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.13 165.83V42.0901H-9.65595e-06L5.51999 4.83007H77.28V165.83H30.13ZM94.397 165.83V4.83007H189.387C208.86 4.83007 223.887 10.1967 234.467 20.9301C244.74 31.3567 249.877 46.0001 249.877 64.8601C249.877 85.1001 243.82 100.587 231.707 111.32C220.36 121.287 205.027 126.27 185.707 126.27H142.697V165.83H94.397ZM142.697 88.3201H180.877C195.137 88.3201 202.267 80.8834 202.267 66.0101C202.267 51.1367 194.984 43.7001 180.417 43.7001H142.697V88.3201ZM292.661 165.83V114.31L222.051 4.83007H276.331L316.121 69.0001H318.421L358.671 4.83007H411.571L341.191 114.08V165.83H292.661ZM538.78 23.0001C555.34 38.3334 563.62 59.1101 563.62 85.3301C563.62 99.1301 560.63 111.78 554.65 123.28L568.68 132.48V175.26H568.45L532.34 152.03C516.547 164.45 496.307 170.66 471.62 170.66C443.254 170.66 420.867 162.993 404.46 147.66C387.9 132.173 379.62 111.397 379.62 85.3301C379.62 59.1101 387.9 38.3334 404.46 23.0001C420.867 7.66674 443.254 7.45058e-05 471.62 7.45058e-05C499.987 7.45058e-05 522.374 7.66674 538.78 23.0001ZM439.65 53.1301C431.677 61.1034 427.69 72.2201 427.69 86.4801C427.69 100.587 431.677 111.627 439.65 119.6C447.777 127.88 458.817 132.02 472.77 132.02C481.357 132.02 489.1 130.487 496 127.42L459.89 105.57L478.52 77.2801L516.47 100.74C517.544 96.9067 518.08 92.1534 518.08 86.4801C518.08 72.2201 514.094 61.1034 506.12 53.1301C497.994 45.0034 486.877 40.9401 472.77 40.9401C458.51 40.9401 447.47 45.0034 439.65 53.1301Z" fill="var(--theme-black)" />
                                        </svg>
                                    </div> */}
                                    <div className="flex gap-3 flex-wrap">
                                        <span className=" bg-[var(--bg-card-light)] text-[var(--theme-text-medium)]  rounded-md text-[12px] font-[400]">B2B</span>
                                        <span className=" bg-[var(--bg-card-light)] text-[var(--theme-text-medium)]  rounded-md text-[12px] font-[400]">WHITE-LABEL</span>
                                    </div>
                                </div>

                                <p className="text-[14px] text-[var(--theme-text-medium)] mt-2 italic">One Learning Management System for Bharat</p>
                                <p className="text-[16px] text-[var(--theme-text-dark)] font-[500] mb-4">Your brand. Our technology.</p>

                                <div className="flex flex-col gap-2 mb-5 bg-white p-3 ">
                                    <p className="text-[18px] text-[var(--theme-text-dark)]  italic">शिक्षा का सेतु</p>
                                    <p className="text-[15px] text-[var(--theme-text-medium)] italic">"Bridge to Education" Education Simplified</p>
                                </div>

                                <p className="text-[16px] text-[var(--theme-text-medium)] leading-[1.4] mb-10 ">
                                    Launch your own branded learning platform without building from scratch. 1LMS is a white-label solution that gives coaching centers, schools, and educators a professional LMS with your branding — powered by our battle-tested technology.                                </p>

                                {/* Download buttons */}
                                {/* <div className="flex-buttons flex-wrap gap-3">

                                    <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.app.onepyq" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <FaGooglePlay />
                                        <span>Google Play</span>
                                    </Link>
                                    <Link target="_blank" to="https://apps.apple.com/in/app/1pyq/id6473720012?l=hi" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <FaApple />
                                        <span>App Store</span>
                                    </Link>
                                    <Link target="_blank" to="https://app.1pyq.com/app1/" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <span>Try Web Version →</span>
                                    </Link>

                                </div> */}
                            </div>
                            {/* 
                            <div className='flex p-6 items-center justify-center w-1/2 grow-1'>
                                <img src="/images/1pyq-product-img.png" className='h-full w-full object-contain' alt="" />
                            </div> */}

                        </div>


                        {/* Features Grid */}
                        <div className="grid-4 mb-10 mt-10 ">
                            {[
                                { icon: '/images/school.svg', title: 'AI Gap Analysis', desc: 'Coaching Centers' },
                                { icon: '/images/graduation-cap.svg', title: 'Spaced Repetition', desc: 'Schools & Colleges' },
                                { icon: '/images/individual-tutor.svg', title: 'Progress Tracking', desc: 'Individual Tutors' },
                                { icon: '/images/edtech-startup.svg', title: 'Offline Mode', desc: 'EdTech Startups' },
                            ].map(feature => (
                                <div key={feature.title} className=" p-6 rounded-2xl flex flex-col items-center">
                                    <div className="w-[30px] mb-3">
                                        <img src={feature.icon} alt="" className='h-full w-full object-contain' />
                                    </div>
                                    <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{feature.title}</h4>
                                    <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.5]">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="grid-2 gap-4 mb-10">
                            {[
                                { title: 'Custom Branding', desc: 'Your logo, colors, and domain. Students see your brand, not ours.' },
                                { title: 'Content Management', desc: 'Upload videos, PDFs, quizzes. Organize by courses, batches, subjects.' },
                                { title: 'Live Classes', desc: 'Integrated video conferencing. Schedule and record classes.' },
                                { title: 'Assessments', desc: 'Create tests, track performance, generate reports automatically.' },
                                { title: 'Student Management', desc: 'Enrollments, batches, progress tracking, parent communication.' },
                                { title: 'Payment Integration', desc: 'Collect fees online. Razorpay, PayU, UPI supported.' }
                            ].map(feature => (
                                <div key={feature.title} className="bg-[var(--bg-card)] p-7 rounded-[5px] ">
                                    <h4 className="text-[17px] font-[500] text-[var(--theme-text-dark)] mb-2">{feature.title}</h4>
                                    <p className="text-[15px] text-[var(--theme-text-medium)] leading-[1.6]">{feature.desc}</p>
                                </div>
                            ))}
                        </div>


                    </div>


                    <div id="1isl" className="mb-25 mt-[80px]">

                        <div className=' w-full flex items-center justify-between rounded-[5px] '>
                            <div className='bg-[var(--bg-card)] w-1/2 p-6 flex flex-col grow-1'>

                                <div className='flex items-end gap-4 mb-3'>
                                    <div className='w-[120px] flex items-center justify-center'>
                                        <svg width="100%" height="100%" viewBox="0 0 498 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.13 165.37V41.6301H-9.65595e-06L5.51999 4.37011H77.28V165.37H30.13ZM115.327 165.37V4.37011H163.857V165.37H115.327ZM192.339 154.79V110.63H192.569C218.943 124.123 244.243 130.87 268.469 130.87C285.796 130.87 294.459 126.807 294.459 118.68C294.459 114.693 292.006 111.78 287.099 109.94C282.499 108.1 271.536 105.8 254.209 103.04C235.503 100.127 220.399 95.1434 208.899 88.0901C197.246 81.0368 191.419 69.4601 191.419 53.3601C191.419 37.7201 198.013 25.0701 211.199 15.4101C225.153 5.13678 244.626 0.000107646 269.619 0.000107646C290.779 0.000107646 311.556 4.29344 331.949 12.8801V56.5801L331.719 56.8101C311.019 44.8501 289.169 38.8701 266.169 38.8701C248.996 38.8701 240.409 42.7801 240.409 50.6001C240.409 55.3534 243.476 58.4201 249.609 59.8001C251.756 60.4134 255.359 61.1801 260.419 62.1001C265.479 63.0201 271.996 64.2468 279.969 65.7801C300.976 69.1534 316.156 74.2134 325.509 80.9601C337.009 88.9334 342.759 100.893 342.759 116.84C342.759 131.56 337.086 143.673 325.739 153.18C312.246 164.22 292.389 169.74 266.169 169.74C242.249 169.74 217.639 164.757 192.339 154.79ZM363.416 165.37V4.37011H411.716V123.74H497.046L495.206 165.37H363.416Z" fill="var(--theme-black)" />
                                        </svg>


                                    </div>
                                    <div className="flex gap-3 flex-wrap">
                                        <span className=" bg-[var(--bg-card-light)] text-[var(--theme-text-medium)]  rounded-md text-[12px] font-[400]">FREE</span>
                                        <span className=" bg-[var(--bg-card-light)] text-[var(--theme-text-medium)]  rounded-md text-[12px] font-[400]">SOCIAL IMPACT</span>
                                    </div>
                                </div>

                                <p className="text-[14px] text-[var(--theme-text-medium)] mt-2 italic">One Indian Sign Language Challenge</p>
                                <p className="text-[16px] text-[var(--theme-text-dark)] font-[500] mb-4">India's first ISL vocabulary learning app</p>

                                <div className="flex flex-col gap-2 mb-5 bg-white p-3 ">
                                    <p className="text-[18px] text-[var(--theme-text-dark)]  italic">सबकी भाषा, सबके लिए</p>
                                    <p className="text-[15px] text-[var(--theme-text-medium)] italic">Sabki Bhasha, Sabke Liye</p>
                                    <p className="text-[14px] text-[var(--theme-text-medium)]  italic">"Everyone's language, for everyone." Bridging the deaf and hearing worlds, together.</p>
                                </div>

                                <p className="text-[16px] text-[var(--theme-text-medium)] leading-[1.4] mb-10 ">
                                    Indian Sign Language is used by over 5 million deaf Indians, yet resources to learn it are scarce. 1ISL Challenge makes sign language learning accessible to everyone — whether you're deaf, a family member, a teacher, or just curious.
                                </p>

                                {/* Download buttons */}
                                <div className="flex-buttons flex-wrap gap-3">

                                    <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.oneislchallenge&hl" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <FaGooglePlay />
                                        <span>Google Play</span>
                                    </Link>
                                    <Link target="_blank" to="https://apps.apple.com/in/app/1isl-challenge/id6742008806" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <FaApple />
                                        <span>App Store</span>
                                    </Link>
                                    {/* <Link target="_blank" to="https://app.1pyq.com/app1/" className='px-[18px] rounded-[6px] gap-2 flex items-center justify-center hover:bg-[var(--border-medium)] duration-300 py-[8px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>
                                        <span>Try Web Version →</span>
                                    </Link> */}

                                </div>
                            </div>

                            <div className='flex p-6 items-center justify-center w-1/2 grow-1'>
                                <img src="/images/1ISL-poster-3.webp" className='h-full w-full object-contain' alt="" />
                            </div>

                        </div>

                        {/* Features Grid */}
                        <div className="grid-3 mb-10 mt-10 ">
                            {[
                                { icon: '/images/joystick.svg', title: 'Gamified Learning', desc: 'Fun challenges and streaks to keep you motivated' },
                                { icon: '/images/video.svg', title: 'Video Lessons', desc: 'Clear sign demonstrations by native signers' },
                                { icon: '/images/leaderboard.svg', title: 'Leaderboards', desc: 'Compete with friends and learners nationwide' },

                            ].map(feature => (
                                <div key={feature.title} className=" p-6 rounded-2xl flex flex-col items-center">
                                    <div className="w-[30px] mb-3">
                                        <img src={feature.icon} alt="" className='h-full w-full object-contain' />
                                    </div>
                                    <h4 className="text-[18px] font-[500] text-[var(--theme-text-dark)] mb-1.5">{feature.title}</h4>
                                    <p className="text-[14px] text-[var(--theme-text-medium)] leading-[1.5] text-center">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Available languages */}
                        <div className=" mb-10 flex flex-col gap-3">
                            <h3 className="text-[18px] font-[500] text-[var(--theme-text-dark)] ">Contact Available in 16 Indian Languages</h3>
                            <div className="flex gap-3 flex-wrap">
                                {['Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese', 'Urdu', 'Maithili', 'Sanskrit', 'Nepali'].map(exam => (
                                    <span key={exam} className="px-4 py-2 bg-[var(--bg-card)] rounded-full text-[14px] text-[var(--theme-text-medium)] ">{exam}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* CTA */}
                    {/* <div className="bg-[var(--bg-card)] rounded-[5px] py-8  p-5 mt-8 text-center ">
                        <h2 className="text-[40px] text-slate-900 mb-4 font-lt-remark">
                            Need something custom?
                        </h2>
                        <p className="text-[16px] text-[var(--theme-text-medium)] font-[400] mb-8 max-w-[495px] mx-auto">
                            We also build custom EdTech solutions. Check out our services or get in touch.
                        </p>
                        <div className="flex gap-4 justify-center">

                            <Link to="/services" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>View Services</Link>
                            <Link to="/contact" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>Contact Us</Link>

                        </div>
                    </div> */}

                </div>
            </section>
        </>
    );
};
