import './TestimonialsSection.css';

const users = [
    {
        profileUrl: "/images/client-testimonial.png",
        description:
            "“CS Ninja has completely changed the way I prepare for CS exams. The structured content, clear explanations, and smart study flow make even complex topics easy to understand. The app keeps me consistent and confident in my preparation.”",
        name: "Lauren Meyers",
        role: "Growth Strategist",
        accuracy: "97%",
        message: "Boost in efficiency"
    },
    {
        profileUrl: "/images/1pyq-testimonial-background.svg",
        description:
            "“1PYQ is not just another SSC app—it’s a complete, distraction-free preparation system. With real PYQs, structured study groups, mock tests, grammar and vocabulary practice, typing drills, and multilingual current affairs, the app covers everything an SSC aspirant needs. The transparent ₹10 pricing model and focus on discipline make it one of the most reliable SSC preparation platforms available today.”",
        name: "Lauren Meyers",
        role: "Growth Strategist",
        accuracy: "97%",
        message: "Boost in efficiency"
    },
    {
        profileUrl: "/images/Mmp-testimonial-background.svg",
        description:
            "“Managing attendance for our team became much easier after using Mark My Presence. The app keeps everything organized and transparent, reducing manual effort and errors. It has significantly improved our attendance tracking process.”",
        name: "Lauren Meyers",
        role: "Growth Strategist",
        accuracy: "97%",
        message: "Boost in efficiency"
    }
];

export const TestimonialsSection = () => (
    <section className="w-full">
        <div className="global-width min-h-[600px] global-border-page global-padding global-padding-mobile  w-full py-10 flex flex-col justify-center mx-auto">

            {/* Heading */}
            <div className="text-center mb-[60px]">
                <p className="text-[16px] uppercase font-[600] text-[var(--theme-black)] tracking-wide">
                    Testimonials
                </p>
                <h2 className="custom-h2 md-text-51  font-[400] font-lt-remark text-[var(--theme-black)] mt-6">
                    What people are saying
                </h2>
            </div>

            {/* Main testimonial */}
            <div className="w-full flex flex-col gap-4 mt-3">
                {users.map((elem, index) => (
                    <div
                        key={index}
                        className="bg-[var(--bg-card)] w-full flex h-[481px] p-[4px]"
                    >
                        {/* Image */}
                        <div className="shrink-0 w-[349px] h-full overflow-hidden border flex items-center justify-center">
                            <img
                                src={elem.profileUrl}
                                className="h-full w-full object-cover"
                                alt={elem.name}
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between p-5 px-7">
                            <p className="text-[var(--theme-text-dark)] text-[19px] font-[300] leading-relaxed">
                                {elem.description}
                            </p>

                            <div className="w-full flex justify-between items-end">
                                <div className="flex flex-col">
                                    <p className="text-[var(--theme-text-dark)] font-[400] text-[16px]">
                                        {elem.name}
                                    </p>
                                    <p className="text-[var(--theme-text-medium)] font-[400] text-[14px]">
                                        {elem.role}
                                    </p>
                                </div>

                                <div className="flex flex-col text-right">
                                    <p className="text-[var(--theme-text-dark)] font-[400] text-[60px] leading-[1.1]">
                                        {elem.accuracy}
                                    </p>
                                    <p className="text-[var(--theme-text-medium)] font-[400] text-[14px]">
                                        {elem.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
);
