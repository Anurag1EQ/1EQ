import './TestimonialsSection.css';
import { Pill } from '../Pill/Pill';

export const TestimonialsSection = () => (
    <section className=" w-full ">
        <div className="global-width min-h-[600px] global-border-page  w-full px-6 py-10 flex flex-col justify-center mx-auto">
            <div className="text-center mb-[60px]">
                <Pill color="var(--color-accent)">Testimonials</Pill>
                <h2 className="text-[42px] font-semibold text-[var(--theme-text-dark)] mt-6 ">
                    What people are saying
                </h2>
            </div>

            <div className="grid-3 gap-6">
                {[
                    {
                        quote: "1PYQ transformed how I prepare for my exams. The AI knows exactly where I'm weak and helps me focus my time better.",
                        name: "Student Name",
                        role: "UPSC Aspirant",
                        location: "Lucknow"
                    },
                    {
                        quote: "As a non-tech founder, working with 1EQ was refreshing. They understood our mission and delivered a platform our teachers actually use.",
                        name: "Partner Name",
                        role: "Founder, Coaching Institute",
                        location: "Jaipur"
                    },
                    {
                        quote: "The accessibility features in 1ISL Challenge are incredible. Finally, technology that doesn't leave the deaf community behind.",
                        name: "User Name",
                        role: "Accessibility Advocate",
                        location: "Mumbai"
                    }
                ].map((testimonial, i) => (
                    <div
                        key={i}
                        className="bg-[var(--bg-card)] rounded-[6px] p-8 shadow-md flex flex-col"
                    >
                        <div className="text-[32px] text-[var(--theme-text-dark)] mb-4 leading-none">"</div>
                        <p className="text-base text-[var(--theme-text-dark)] leading-relaxed mb-6 flex-1">
                            {testimonial.quote}
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full  flex items-center justify-center text-base font-semibold text-[var(--theme-text-dark)]">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="text-[15px] font-semibold text-[var(--theme-text-dark)] mb-0.5">{testimonial.name}</p>
                                <p className="text-[13px] text-[var(--theme-text-medium)]">{testimonial.role} • {testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
