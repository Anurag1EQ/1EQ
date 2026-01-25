import './Terms.css';
import { TermsHero } from '../../components/Hero/Hero';

export const TermsPage = () => {
    return (
        <>
            <TermsHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">
                <div className="content-padding">
                    <div className="max-w-[800px] mx-auto text-base text-slate-600 leading-[1.8]">

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">1. Acceptance of Terms</h2>
                        <p className="mb-6">By accessing or using 1EQ's services, including 1PYQ, 1LMS, and 1ISL Challenge, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">2. Use of Services</h2>
                        <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these terms. You agree not to:</p>
                        <ul className="ml-6 mb-6 list-disc">
                            <li className="mb-2">Use the services in any way that violates applicable laws</li>
                            <li className="mb-2">Attempt to gain unauthorized access to our systems</li>
                            <li className="mb-2">Share your account credentials with others</li>
                            <li className="mb-2">Copy, modify, or distribute our content without permission</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">3. User Accounts</h2>
                        <p className="mb-6">You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">4. Subscription and Payments</h2>
                        <p className="mb-6">Some of our services require a subscription. By subscribing, you agree to pay all applicable fees. Subscriptions may auto-renew unless cancelled. Refunds are provided in accordance with our refund policy.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">5. Intellectual Property</h2>
                        <p className="mb-6">All content, features, and functionality of our services are owned by 1EQ Edutech and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">6. Disclaimer of Warranties</h2>
                        <p className="mb-6">Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be uninterrupted, secure, or error-free.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">7. Limitation of Liability</h2>
                        <p className="mb-6">To the maximum extent permitted by law, 1EQ Edutech shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">8. Changes to Terms</h2>
                        <p className="mb-6">We may update these terms from time to time. We will notify you of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">9. Contact Us</h2>
                        <p className="mb-6">If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@1eq.in" className="text-[#E63946] no-underline">legal@1eq.in</a></p>

                        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <p className="text-sm text-slate-500">
                                <strong className="text-slate-900">1EQ Edutech Private Limited</strong><br />
                                907, OCUS Quantum, Sector 51, Gurgaon, Haryana, India<br />
                                CIN: U72200KA2021PTC156100
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
