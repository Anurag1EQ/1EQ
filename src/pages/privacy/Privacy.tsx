import './Privacy.css';
import { PrivacyHero } from '../../components/Hero/Hero';

export const PrivacyPage = () => {
    return (
        <>
            <PrivacyHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">
                <div className="content-padding">
                    <div className="max-w-[800px] mx-auto text-base text-slate-600 leading-[1.8]">

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">1. Information We Collect</h2>
                        <p className="mb-4">We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
                        <ul className="ml-6 mb-6 list-disc">
                            <li className="mb-2">Name and email address</li>
                            <li className="mb-2">Phone number (optional)</li>
                            <li className="mb-2">Usage data and learning progress</li>
                            <li className="mb-2">Device information and IP address</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect to:</p>
                        <ul className="ml-6 mb-6 list-disc">
                            <li className="mb-2">Provide, maintain, and improve our services</li>
                            <li className="mb-2">Personalize your learning experience</li>
                            <li className="mb-2">Send you updates and promotional communications (with your consent)</li>
                            <li className="mb-2">Respond to your comments and questions</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">3. Data Security</h2>
                        <p className="mb-6">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">4. Data Sharing</h2>
                        <p className="mb-6">We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our services, subject to confidentiality obligations.</p>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">5. Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="ml-6 mb-6 list-disc">
                            <li className="mb-2">Access your personal data</li>
                            <li className="mb-2">Request correction of inaccurate data</li>
                            <li className="mb-2">Request deletion of your data</li>
                            <li className="mb-2">Opt-out of marketing communications</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-10">6. Contact Us</h2>
                        <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@1eq.in" className="text-[#E63946] no-underline">privacy@1eq.in</a></p>

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
