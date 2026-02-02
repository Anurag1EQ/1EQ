import './BenefitsSection.css';

export const BenefitsSection = () => (
    <section className="w-full">
        <div className="global-width global-border-page mx-auto global-padding   py-[60px]">
            <div className="text-center mb-4 sm:mb-8 md:mb-[60px] flex flex-col gap-3 sm:gap-[18px] md:gap-[24px]">
                <p className='text-sm sm:text-base md:text-lg uppercase font-semibold text-[var(--theme-black)] tracking-wide'>
  Why 1EQ
</p>
<h2 className="custom-h2 text-2xl sm:text-3xl md:text-[51px] font-normal font-lt-remark text-center text-[var(--theme-black)] ">
  We're not a generic dev shop
</h2>
            </div>

            <div className="grid-3 gap-6">
                {[
                    { icon: "/images/graduation-cap.svg", title: 'EdTech DNA', desc: "We understand pedagogy, learning outcomes, and what makes education stick." },
                    { icon: '/images/users.svg', title: 'In-house Team', desc: '20-person tech team. No outsourcing. Direct communication with builders.' },
                    { icon: '/images/wheelchair-person.svg', title: 'Accessibility First', desc: 'Multi-language, low-bandwidth, sign language we build for everyone.' },
                    { icon: '/images/target-lock.svg', title: 'Mission Aligned', desc: "We partner with orgs that believe education shouldn't depend on pin code." },
                    { icon: '/images/flash-icon.svg', title: 'Battle-tested Tech', desc: "Our products serve real users daily. We build what works, not what demos well." },
                    { icon: '/images/handshake.svg', title: 'Long-term Partners', desc: "We don't disappear after delivery. We grow with you." }
                ].map(item => (
                    <div
                        key={item.title}
                        className="  rounded-[5px] p-8 "
                    >
                        <div className="w-[36px] rounded-[14px]  flex items-center justify-center mb-5">
                            <img src={item.icon} alt={item.title} className='h-full w-full object-contain' />
                        </div>
                        <h4 className="text-[18px] font-semibold text-[var(--theme-text-dark)] mb-2">{item.title}</h4>
                        <p className="text-[16px]  text-[var(--theme-text-medium)] leading-[1.3]">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
