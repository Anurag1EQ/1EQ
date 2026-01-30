import './Shipping.css';
import { ShippingHero } from '../../components/Hero/Hero';

export const ShippingPage = () => {
    return (
        <>
            <ShippingHero />
            <section className="min-h-screen bg-white font-sans">
                <div className="flex flex-col items-center justify-start w-full">
                     <div className="global-width global-padding   flex flex-col items-center   global-border-page w-full mx-auto"  >
                        <div className="max-w-[700px] w-full  flex flex-col gap-[44px] md:gap-[60px]" style={{padding:'44px 0 80px'}}>

                       
                        <div className="flex flex-col gap-4">
                            <p className="text-base content-text  ">
                                Thank you for shopping with 1PYQ App. This Shipping Policy outlines the terms related to the delivery of both <span className="heading-text ">physical</span> and <span className="heading-text ">digital</span> products offered through our platform.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                              <p className="heading-text font-semibold    ">
                                1. What types of products does 1PYQ App offer?
                            </p>
                            <p className="content-text    ">
                                We offer two types of products on the 1PYQ App: Digital Products such as audiobooks, video lectures, and online learning content; and Physical Products such as printed books and other learning materials delivered to your address.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="heading-text font-semibold    ">
                                2. How are digital products delivered?
                            </p>
                            <p className="content-text    ">
                                Digital products are delivered via the 1PYQ App or through links sent to your registered email/phone number. Access is typically provided immediately upon successful payment, or within 24 hours. If you do not receive access within 24 hours, please contact us at <a href="mailto:contact@1eq.in" className="font-semibold no-underline">contact@1eq.in</a> with your transaction details.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                        <p className="heading-text font-semibold    ">
                                3. Where do you ship physical products and what is the delivery timeline?
                            </p>
                          <p className="content-text    ">
                                Currently, we ship physical products within India. Orders are usually processed and dispatched within 2-4 business days of payment confirmation. Delivery typically takes 5-10 business days, depending on your location and courier partner. Any applicable shipping charges will be displayed at checkout before you confirm your order. Once dispatched, you will receive tracking details via email or SMS.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="heading-text font-semibold    ">
                                4. What if my order is delayed or not delivered?
                            </p>
                           <p className="content-text    ">
                                If your physical order is delayed beyond the estimated timeframe, please reach out to us at <a href="mailto:contact@1eq.in" className="font-semibold no-underline">contact@1eq.in</a> with your order details. For digital products not accessible or not playing correctly, please write to us with a screen recording or screenshot of the issue.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                           <p className="heading-text font-semibold    ">
                                5. What if I purchased the wrong product and want to change?
                            </p>
                          <p className="content-text    ">
                                In case you have purchased a wrong product i.e., purchased an English medium audio book instead of Hindi medium, please email us on <a href="mailto:contact@1eq.in" className="font-semibold no-underline">contact@1eq.in</a> within 24 hours of the purchase clearly mentioning your email ID, phone number and purchase information.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <p className="heading-text    ">
                                6. What if I receive a wrong or damaged physical item?
                            </p>
                            <p className="text-base content-text  ">
                                If you receive a wrong or damaged physical item, please notify us within 3 days of delivery. We may request photos of the package/product for verification and will arrange for a replacement or return as applicable.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <p className="heading-text font-semibold    ">
                                7. I have purchased the product but it's not playing on my handset/mobile, what to do?
                            </p>
                             <p className="content-text    ">
                                In case, you have purchased the product on 1PYQ and the audio or video is not playing on your particular handset, please write to us <a href="mailto:contact@1eq.in" className="font-semibold no-underline">contact@1eq.in</a> with a screen recording of the issue. If our tech team cannot sort the issue within 15 days, we will give you a full refund.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-base text-[rgb(61,65,69)]  ">
                                For any other query, feel free to:
                            </p>
                            <p className="text-base text-[rgb(61,65,69)]  ">
                                Write to <span className='heading-text'>contact@1eq.in</span>
                            </p>
                            <p className="text-base text-[rgb(61,65,69)]  ">
                                Contact Days: Monday to Friday (11:00 am to 4:00 pm)
                            </p>
                            <p className="text-base text-[rgb(61,65,69)]  ">
                                We would be happy to help you.
                            </p>
                            <p className="text-base text-[rgb(61,65,69)]  ">
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