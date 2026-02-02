import './Contact.css';
import { ContactHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


export const ContactPage = () => {
    const url = 'https://script.google.com/macros/s/AKfycbzXU5hbS0pgDHvc2m0CN6ouAxN_e32oDXZh-rUK7JCjCt6Xk7tn7CSTsUdZ5jMtg46YGw/exec'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Clear submission status when user starts editing
        if (submissionStatus) {
            setSubmissionStatus('');
        }
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };

        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your name.';
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters.';
            isValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email.';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Please enter phone number.';
            isValid = false;
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number.';
            isValid = false;
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Please enter subject.';
            isValid = false;
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters.';
            isValid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Please enter message.';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmissionStatus('Please enter all the fields before submitting.');
            return;
        }

        setIsLoading(true);
        setSubmissionStatus('');

        try {
            await fetch(url, {
                method: "POST",
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // Note: With 'no-cors', we can't read the response, but the request will be sent
            // Log the form details
            console.log('Form Submitted Successfully!');
            console.log('Form Data:', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message
            });

            // Success - Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setSubmissionStatus('Message sent successfully!');

        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionStatus('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ContactHero />
            <section className=" flex items-center justify-center bg-white  font-['DM_Sans']  ">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="global-width h-full lg:min-h-[650px]   global-padding     flex flex-col items-center  justify-center  global-border-page w-full mx-auto" >
                        <div className='    py-[25px] sm:py-[60px]  md:py-[120px]    w-full md:h-full lg:h-auto flex flex-col md:flex-row'>


                            {/* Light Content */}
                            <div className="  mx-auto">

                                <div className="grid lg:grid-cols-2 gap-[60px] items-start">

                                    {/* Contact Info */}
                                    <div>
                                        <h2 className="text-2xl font-semibold text-slate-900 mb-8 ">Contact  </h2>

                                        <div className="mb-8 flex flex-col gap-4">

                                            <div className="flex items-start gap-4 pb-4  border-b ">
                                                <div className="w-12 h-12   bg-slate-50 flex items-center justify-center text-xl flex-shrink-0">


                                                    <span className='w-[24px] aspect-square'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#1f1f1f"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>

                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-semibold text-slate-900 mb-1">Email</h4>
                                                    <a href="mailto:hello@1eq.in" className="text-[15px] theme-text-medium no-underline">contact@1eq.in</a>
                                                </div>
                                            </div>

                                            {/* <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12   bg-blue-600/10 flex items-center justify-center text-xl flex-shrink-0">💼</div>
                                        <div>
                                            <h4 className="text-base font-semibold text-slate-900 mb-1">Partnerships</h4>
                                            <a href="mailto:partnerships@1eq.in" className="text-[15px] text-blue-600 no-underline">partnerships@1eq.in</a>
                                        </div>
                                    </div> */}

                                            <div className="flex items-start gap-4   pb-4  border-b">
                                                <div className="w-12 h-12     bg-slate-50 flex items-center justify-center text-xl flex-shrink-0">
                                                    <span className='w-[24px] aspect-square'>


                                                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#1f1f1f"><path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z" /></svg>
                                                    </span>

                                                </div>
                                                <div>
                                                    <h4 className="text-base font-semibold text-slate-900 mb-1">Careers</h4>
                                                    <a href="mailto:careers@1eq.in" className="text-[15px]  theme-text-medium no-underline">hr@1eq.in</a>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4 pb-4  border-b">
                                                <div className="w-12 h-12  bg-slate-50 flex items-center justify-center text-xl flex-shrink-0">

                                                    <span className='w-[24px] aspect-square'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#1f1f1f"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg></span>

                                                </div>
                                                <div>
                                                    <h4 className=" font-semibold text-slate-900 mb-1">Office</h4>
                                                    <p className="text-[15px] theme-text-medium leading-[1.6]">907, OCUS Quantum , Sector-51, Gurgaon<br />Haryana, India</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="pt-6   border-slate-200">
                                            <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">Follow Us</h4>
                                            <div className="flex gap-5">
                                                {[
                                                    { name: 'LinkedIn', icon: <TiSocialLinkedin className='text-[22px]' />, url: 'https://in.linkedin.com/company/1eq-tech' },
                                                    // { name: 'Twitter', icon: <FaXTwitter className='text-[18px]' />, url: 'https://x.com/1EQfoundation' },
                                                    { name: 'Telegram', icon: <FaTelegram className='text-[18px]' />, url: 'https://t.me/One_EQ' },
                                                    { name: 'YouTube', icon: <FaYoutube className='text-[18px]' />, url: 'https://youtube.com/@1-EQ' },
                                                    { name: 'YouTube', icon: <FaYoutube className='text-[18px]' />, url: 'https://www.youtube.com/@1Math.1EQ' }
                                                ].map(social => (
                                                    <a
                                                        key={social.name}
                                                        href={social.url}
                                                        target="_blank"
                                                        className="w-9 aspect-square rounded-lg bg-gray-900 hover:bg-gray-300 flex items-center justify-center text-[var(--text-medium)] 

                                                                                hover:text-[var(--theme-text-dark)] 
                                                                                no-underline  font-semibold transition-colors duration-200"
                                                    >
                                                        {social.icon}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Form */}
                                    <div className="bg-slate-50 px-4 py-4 md:px-10 md:py-10     ">


                                        <form onSubmit={handleSubmit}>
                                            {/* Name and Email Row */}
                                            <div className="grid text-[var(--theme-text-medium)] md:grid-cols-2 md:gap-5 md:mb-5">
                                                <div>
                                                    <label className="block text-sm font-medium 
                                            text-[var(--theme-text-medium)] mb-2">Your name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200   text-[15px]  box-border"
                                                        placeholder="Enter your name"
                                                    />
                                                    <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>{errors.name}</p>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200   text-[15px]  box-border"
                                                        placeholder="Enter your email"
                                                    />
                                                    <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>{errors.email}</p>
                                                </div>
                                            </div>

                                            {/* Phone and Subject Row */}
                                            <div className="grid text-[var(--theme-text-medium)] md:grid-cols-2 md:gap-5 md:mb-5">
                                                <div>
                                                    <label className="block text-sm font-medium  mb-2">Phone number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200   text-[15px]  box-border"
                                                        placeholder="Enter your phone number"
                                                    />
                                                    <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>{errors.phone}</p>
                                                </div>
                                                <div >
                                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        className="lh-1-2 w-full px-[18px] py-[16px]  bg-white border border-slate-200   text-[15px]   box-border"
                                                        placeholder="Enter a subject"
                                                    />
                                                    <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>{errors.subject}</p>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="mb-6 text-[var(--theme-text-medium)]">
                                                <label className="block text-sm font-medium md:mb-2">Your message</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200 text-[15px] box-border min-h-[120px] "
                                                    placeholder="Enter your message..."
                                                />
                                                <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none   '>{errors.message}</p>
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-slate-900 text-sm text-white border-none py-4 font-semibold cursor-pointer flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                            >
                                                <div className=''>
                                                    {isLoading ? 'Sending...' : 'Submit'}
                                                </div>
                                                {isLoading && <span className='loader'></span>}
                                            </button>

                                            {/* Submission Status */}
                                            {submissionStatus && (
                                                <p className={`py-1 text-[14px] mt-2 text-center ${submissionStatus.includes('success') ? 'text-green-600' : 'text-red-500'
                                                    }`}>
                                                    {submissionStatus}
                                                </p>
                                            )}

                                            {/* Terms Text */}
                                            <div className="mt-4 text-decoration-none  text-[var(--theme-text-light)] font-semibold text-[12px] sm:text-[14px] md:text-[16px]  text-center">
                                                <p className=" leading-[1.3] ">
                                                    By sending this form, you agree to our{' '}
                                                    <Link to="/terms_of_service" rel="noopener noreferrer" className="text-[var(--theme-text-medium)]   underline">
                                                        Terms of Service
                                                    </Link>
                                                    {' '}and{' '}
                                                    <Link to='/privacy_policy' rel="noopener noreferrer" className="text-[var(--theme-text-medium)] underline">
                                                        Privacy Policy
                                                    </Link>
                                                    {' '}terms.
                                                </p>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};