import './Contact.css';
import { ContactHero } from '../../components/Hero/Hero';
import { Link } from 'react-router-dom';
 
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


export const ContactPage = () => {
    return (
        <>
            <ContactHero />
            <section className=" flex items-center justify-center bg-white  font-['DM_Sans']">
<div className="flex flex-col items-center justify-center w-full">
                    <div className="global-width min-h-[650px]  h-[calc(100vh-200px)]  flex flex-col items-center  justify-center  global-border-page w-full mx-auto" >
                        <div className=' px-[36px] w-full flex flex-col'>

                       
                {/* Light Content */}
                    <div className="  mx-auto">
               
                        <div className="grid grid-cols-2 gap-[60px] items-start">

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-8 ">Contact  </h2>

                                <div className="mb-8 flex flex-col gap-4">
                              
                                    <div className="flex items-start gap-4 pb-4  border-b ">
                                        <div className="w-12 h-12   bg-slate-50 flex items-center justify-center text-xl flex-shrink-0">
                                            
                                            
                                            <span className='w-[24px] aspect-square'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#1f1f1f"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                                            
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


                                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#1f1f1f"><path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z"/></svg>
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
<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#1f1f1f"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></span>

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
                                                                            { name: 'YouTube', icon: <FaYoutube className='text-[18px]' />, url: 'https://youtube.com/@1-EQ' }
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
                            <div className="bg-slate-50 p-10      ">
                                
                                
                                <form>
                                    {/* Name and Email Row */}
                                    <div className="grid text-[var(--theme-text-medium)] grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label className="block text-sm font-medium 
                                            text-[var(--theme-text-medium)] mb-2">Your name</label>
                                            <input
                                                type="text"
                                                name="Name"
                                                required
                                                className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200   text-[15px]  box-border"
                                                placeholder="Enter your name"
                                            />
                                            <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>Please enter your name.</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="Email"
                                                required
                                                className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200   text-[15px]  box-border"
                                                placeholder="Enter your email"
                                            />
                                             <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>Please enter your Email.</p>
                                        </div>
                                    </div>

                                    {/* Phone and Subject Row */}
                                    <div className="grid text-[var(--theme-text-medium)] grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label className="block text-sm font-medium  mb-2">Phone number</label>
                                            <input
                                                type="tel"
                                                name="Phone number"
                                                required
                                                className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200   text-[15px]  box-border"
                                                placeholder="Enter your phone number"
                                            />
                                             <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>Please enter phone number.</p>
                                        </div>
                                        <div >
                                            <label className="block text-sm font-medium mb-2">Subject</label>
                                            <input
                                                type="text"
                                                name="Subject"
                                                required
                                                className="lh-1-2 w-full px-[18px] py-[16px]  bg-white border border-slate-200   text-[15px]   box-border"

                                                placeholder="Enter a subject"
                                            /> <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none'>Please enter subject name.</p>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mb-6 text-[var(--theme-text-medium)]">
             <label className="block text-sm font-medium mb-2">Your message</label>
             <textarea
            name="Message"
            required
            className="lh-1-2 w-full px-[18px] py-[16px] bg-white border border-slate-200 text-[15px] box-border min-h-[120px] "
            placeholder="Enter your message..."
        />
           <p className='text-red-500 py-1 text-[14px] h-[22px] leading-none   '>Please enter message.</p>
    </div>

                                    {/* Submit Button */}
                                    <button 
                                        type="submit"
                                        className="w-full bg-slate-900 text-sm text-white border-none py-4     font-semibold cursor-pointer flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors"
                                    ><div className=''>

                                        Submit
                                    </div>
                                        <span className='loader'></span>
                                    </button>

                                    {/* Terms Text */}
                                    <div className="mt-4 text-decoration-none  text-[var(--theme-text-light)] font-semibold text-[16px] text-center">
                                        <p className="  ">
                                            By sending this form, you agree to our{' '}
                                            <Link to="/terms_of_service"   rel="noopener noreferrer" className="text-[var(--theme-text-medium)]   underline">
                                                Terms of Service
                                            </Link>
                                            {' '}and{' '}
                                            <Link to='/privacy_policy'  rel="noopener noreferrer" className="text-[var(--theme-text-medium)] underline">
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