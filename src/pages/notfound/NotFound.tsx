import './NotFound.css';
import { Link } from 'react-router-dom';
import { HomeHero } from '../../components/Hero/Hero';

export const NotFoundPage = () => {
    return (
        <>
            <HomeHero />
            <section className="min-h-screen bg-white flex items-center justify-center font-['DM_Sans']">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="global-width min-h-screen flex flex-col items-center justify-center global-border-page w-full mx-auto">
                        <div className='px-[36px] py-10 w-full flex flex-col items-center justify-center'>

                            {/* 404 Image */}
                            <div className="mb-10 max-w-[500px] w-full">
                                <img
                                    src="/images/page-not-found.svg"
                                    alt="404 Not Found"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Error Content */}
                            <div className="text-center max-w-[600px]">
                                <h1 className="text-[80px]  font-[500] font-lt-remark text-[var(--theme-text-dark)] mb-4 leading-[1]">
                                    404
                                </h1>
                                <h2 className="text-[32px] font-lt-remark font-[500] text-[var(--theme-text-dark)] mb-4">
                                    Page Not Found
                                </h2>
                                <p className="text-[16px] text-[var(--theme-text-medium)] leading-[1.6] mb-8">
                                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted, or perhaps the URL is incorrect.
                                </p>

                                {/* Back to Home Button */}
                                <Link
                                    to="/"
                                    className="inline-block px-[24px] hover:bg-[var(--border-medium)] duration-300 py-[14px] font-[500] cursor-pointer text-[16px] text-[var(--text-light)] bg-[var(--theme-black)] outline-none border border-[var(--border-medium)] backdrop-blur-[4px] whitespace-nowrap no-underline"
                                >
                                    Back to Home →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
