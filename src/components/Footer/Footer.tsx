
import './Footer.css';
import { Link } from 'react-router-dom';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export const Footer = () => {


    return (
        <footer className='h-[calc(100vh-10px)]  global-height w-full  relative bg-[#0a1017]'>
            <div className='relative h-full w-full global-width mx-auto border-l-[1px] border-[var(--border-light)] border-r-[1px]'>
                <div className='image-wrapper absolute h-[60%]  flex items-center w-full top-0 left-0 '>
                    <img src="/images/background-img.avif" alt="" className="w-full h-full object-cover block bg-center" />
                </div>

                <div className='h-full w-full flex flex-col relative justify-between text-white pt-[60px] px-[36px] gap-3 pb-[36px] '>
                    <div className='flex flex-col gap-[24px] max-w-[520px]'>
                        <p className='text-[16px] text-[var(--text-light)]'>GET STARTED</p>
                        <p className='text-[52px] text-[var(--text-light)] font-[400] font-lt-remark leading-[1.1]'>Ready to build something that matters?</p>
                        <p className='text-[16px] text-[var(--text-medium)] leading-[1.5]'>We partner with organizations that share our mission to make education accessible for all.</p>
                        <div className='flex gap-[19px] mt-[12px]'>
                            <Link to="/contact" className='px-[18px] hover:bg-[var(--button-hover)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-dark)] bg-[var(--button-light)] outline-none border-none'>Get in touch</Link>
                            <Link to="/about" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--button-dark)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>About us</Link>
                        </div>
                    </div>

                    <div className='w-full '>
                        <div className="footer-grid mb-4">
                            <div className='flex flex-col gap-5'>
                                <div className="flex items-center w-[80px]">
                                    <img src="/images/1EQ.svg" alt="" className='h-full w-full object-contain' />
                                </div>
                                <p className="text-[var(--text-medium)] text-[15px] leading-[1.4]">
                                    Learning technology for underserved India.<br />From classrooms to communities.
                                </p>
                                {/* Social Links */}
                                <div className="flex gap-3">
                                    {[
                                        { name: 'LinkedIn', icon: <TiSocialLinkedin className='text-[22px]' />, url: 'https://in.linkedin.com/company/1eq-tech' },
                                        // { name: 'Twitter', icon: <FaXTwitter className='text-[18px]' />, url: 'https://x.com/1EQfoundation' },
                                        { name: 'Telegram', icon: <FaTelegram className='text-[18px]' />, url: 'https://t.me/One_EQ' },
                                        { name: 'YouTube', icon: <FaYoutube className='text-[18px]' />, url: 'https://youtube.com/@1-EQ' }
                                    ].map(social => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            className="w-9 aspect-square rounded-lg bg-[var(--button-dark)] hover:bg-white/20 flex items-center justify-center text-[var(--text-medium)] no-underline  font-semibold transition-colors duration-200"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[var(--text-light)] text-[18px] font-semibold mb-5 uppercase tracking-[0.5px]">Products</h4>
                                {['1PYQ', '1LMS', '1ISL Challenge'].map(item => (
                                    <Link to='/products' key={item} className="block text-left w-full text-[var(--text-medium)] text-[16px] mb-3 cursor-pointer bg-transparent border-none hover:text-[var(--text-light)] transition-colors">{item}</Link>
                                ))}
                            </div>

                            <div>
                                <h4 className="text-[var(--text-light)] text-[18px] font-semibold mb-5 uppercase tracking-[0.5px]">Company</h4>
                                {[{ label: 'About', page: 'about' }, { label: 'Services', page: 'services' }, { label: 'Technology', page: 'technology' }, { label: 'Careers', page: 'careers' }].map(item => (
                                    <button key={item.label} className="block text-left w-full text-[var(--text-medium)] text-[16px] mb-3 cursor-pointer bg-transparent border-none hover:text-[var(--text-light)] transition-colors">{item.label}</button>
                                ))}
                            </div>

                            <div>
                                <h4 className="text-[var(--text-light)] text-[18px] font-semibold mb-5 uppercase tracking-[0.5px]">Contact</h4>
                                <p className="text-[var(--text-medium)] text-[16px] mb-2">contact@1eq.in</p>
                                <p className="text-[var(--text-medium)] text-[16px] mb-2">+91 98851 15063</p>
                                <p className="text-[var(--text-medium)] text-[16px] leading-[1.5]">907, OCUS Quantum<br />Sector 51, Gurgaon</p>
                            </div>
                        </div>

                        <div className="border-t border-[var(--color-border-dark)] pt-6 flex justify-between items-center flex-wrap gap-4">
                            <p className="text-[14px] text-[var(--text-medium)]">© 2022–2026 1EQ Edutech Pvt. Ltd.</p>
                            <div className="flex gap-[15px]">
                                <Link to="/privacy_policy" className="text-[14px] text-[var(--text-medium)] cursor-pointer bg-transparent border-none hover:text-[var(--text-light)] transition-colors">Privacy Policy</Link>
                                <Link to="/terms_of_service" className="text-[14px] text-[var(--text-medium)] cursor-pointer bg-transparent border-none hover:text-[var(--text-light)] transition-colors">Terms of Service</Link>
                                <Link to="/refund_policy" className="text-[14px] text-[var(--text-medium)] cursor-pointer bg-transparent border-none hover:text-[var(--text-light)] transition-colors">Refund Policy</Link>
                                <Link to="/shipping_policy" className="text-[14px] text-[var(--text-medium)] cursor-pointer bg-transparent border-none hover:text-[var(--text-light)] transition-colors">Shipping Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};
