import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {

    return (

        <nav className="absolute top-0 left-0 right-0  flex  z-[100] ">
            <div className='flex items-center justify-between gap-5 px-8 py-8 global-width mx-auto w-full'>
                <div className='flex items-center gap-[50px]'>
                    <Link to="/" className='w-[90px] cursor-pointer'>
                        <img src="/images/1EQ.svg" className='h-full w-full object-contain' alt="Logo" />
                    </Link>

                    <div className='flex items-center gap-5 ps-[50px] border-l-2 border-[var(--text-light)]'>
                        {['Products', 'Services', 'Technology', 'Blog', 'About', 'Careers'].map(item => (
                            <NavLink to={`/${item.toLowerCase()}`} key={item}
                                className={`nav-items-active bg-transparent border-none text-[16px] font-[500] cursor-pointer transition-colors duration-200 text-[var(--text-medium)] hover:text-[var(--text-light)] }`}>
                                {item}
                            </NavLink>
                        ))}
                    </div>

                </div>

                <div className="flex items-center gap-3">
                    <Link to="/contact" className='px-[18px] hover:bg-[var(--border-medium)] duration-300 py-[12px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--button-dark)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px]'>Get in touch</Link>
                </div>
            </div>


        </nav>
    );
};
