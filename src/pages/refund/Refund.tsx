import './Refund.css';
import { RefundHero } from '../../components/Hero/Hero';

export const RefundPage = () => {
    return (
        <>
            <RefundHero />
            <section className="min-h-screen bg-white font-sans">
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="global-width   global-padding   flex flex-col items-center  global-border-page w-full mx-auto">
                        <div className="max-w-[700px] w-full   flex flex-col gap-[44px] md:gap-[60px]" style={{padding:'44px 0 80px'}}>

                            <div className="flex flex-col gap-4">
                                <p className="heading-text font-semibold leading-[1.5]">
                                    1. Can I request a refund after subscribing to any product on 1PYQ App?
                                </p>
                                <p className="content-text leading-[1.5]">
                                    Please read the subscription terms and conditions carefully before purchasing anything on 1PYQ app, as once you have subscribed, you cannot change or cancel. Once you subscribe and make the required payment for any online subscriptions, it shall be final and there cannot be any changes or modifications to the same and neither will there be any refund.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="heading-text font-semibold leading-[1.5]">
                                    2. What if I purchased the wrong product and want to change?
                                </p>
                                <p className="content-text leading-[1.5]">
                                    In case you have purchased a wrong product i.e., purchased an English medium audio book instead of Hindi medium, please email us on <a href="mailto:contact@1eq.in" className="font-semibold no-underline">contact@1eq.in</a> within 24 hours of the purchase clearly mentioning your email ID, phone number and purchase information.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="heading-text font-semibold leading-[1.5]">
                                    3. I have purchased the product but it's not playing on my handset/mobile, what to do?
                                </p>
                                <p className="content-text leading-[1.5]">
                                    In case, you have purchased the product on 1PYQ and the audio or video is not playing on your particular handset, please write to us <a href="mailto:contact@1eq.in" className="font-semibold no-underline">contact@1eq.in</a> with a screen recording of the issue. If our tech team cannot sort the issue within 15 days, we will give you a full refund.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-base text-[rgb(61,65,69)] leading-[1.5]">
                                    For any other query, feel free to:
                                </p>
                                <p className="text-base text-[rgb(61,65,69)] leading-[1.5]">
                                    Write to <span className='heading-text'>contact@1eq.in</span>
                                </p>
                                <p className="text-base text-[rgb(61,65,69)] leading-[1.5]">
                                    Contact Days: Monday to Friday (11:00 am to 4:00 pm)
                                </p>
                                <p className="text-base text-[rgb(61,65,69)] leading-[1.5]">
                                    We would be happy to help you.
                                </p>
                                <p className="text-base text-[rgb(61,65,69)] leading-[1.5]">
                                    Team 1EQ
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};