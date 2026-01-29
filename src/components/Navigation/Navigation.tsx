import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const NAV_ITEMS = ['Products', 'Services', 'Technology', 'Careers', 'About'];

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className='relative '>
        <nav className=" absolute top-0 left-0 right-0 flex z-[100]">
            <div className=" flex items-center justify-between gap-5 px-4 md:px-8 py-4 md:py-6 global-width mx-auto w-full">
                
                        <div className="flex items-center gap-[50px] px-4 md:px-8 py-4 md:py-6 global-width mx-auto w-full">
                    <Link to="/" className="w-[80px] z-[101] cursor-pointer shrink-0" aria-label="1EQ Home">
                    <img src="/images/1EQ.svg" className="h-full w-full object-contain" alt="1EQ" />
                </Link>

                {/* Desktop nav */}
                <div className="nav-links hidden md:flex items-center gap-4 lg:gap-[60px] pl-6 lg:pl-[50px] border-l-2 border-[var(--text-light)]">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                        to={`/${item.toLowerCase()}`}
                        key={item}
                        className="nav-items-active bg-transparent border-none text-[16px] font-[300] cursor-pointer transition-colors duration-200 text-[var(--text-medium)] hover:text-[var(--text-light)]"
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
                    </div>

                <div className="hidden md:flex items-center gap-3">
                    <Link
                        to="/contact"
                        className="px-[18px] hover:bg-[var(--border-light)] text-center duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--button-dark)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]"
                    >
                        Get in touch
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="nav-menu-btn md:hidden p-2 z-20"
                    onClick={() => setMobileMenuOpen((o) => !o)}
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <FaTimes size={24} className='position-fixed' /> : <FaBars size={24}  />}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`absolute top-28 border mobile-menu   md:hidden ${mobileMenuOpen ? 'open' : ''}`
        } >
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        to={`/${item.toLowerCase()}`}
                        key={item}
                        className="nav-items-active block bg-transparent border-none text-[16px] font-[300] text-[var(--text-medium)] hover:text-[var(--text-light)]"
                    >
                        {item}
                    </NavLink>
                ))}
                <Link
                    to="/contact"
                    className="px-[18px] py-[12px] font-[500] text-[16px] text-[var(--text-light)] bg-[var(--button-dark)] border border-[var(--border-medium)] text-center block"
                >
                    Get in touch
                </Link>
            </div>
        </nav>
        </div>
    );
};
