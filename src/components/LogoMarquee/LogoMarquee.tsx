import './LogoMarquee.css';

export const LogoMarquee = () => {
    const items = ['/images/1EQ.svg', '/images/1PYQ.svg', '/images/1ISL.svg', '/images/1KITAB.svg', '/images/1MATHTRIX.svg', '/images/CSNINJA.svg', '/images/MarkMyPresence.svg', '/images/ISLtrainingCenter.svg', '/images/CET.svg'];
    return (
        <section className="py-5 overflow-hidden w-full marquee-container">
            <div className="flex w-max marquee-track gap-[100px]">
                {[...items, ...items, ...items].map((item, i) =>
                    <div key={i} className="w-[80px] max-h-[40px] flex items-center justify-center ">
                        <img src={item} className='h-full w-full object-contain' alt="" />
                    </div>
                )}
            </div>
        </section>
    );
};
