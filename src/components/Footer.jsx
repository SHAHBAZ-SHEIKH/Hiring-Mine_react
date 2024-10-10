import React from 'react';
import { FaEnvelope, FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-footer-gradient relative p-8 mt-[80px]">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Left Section: Logo and Description */}
                <div className='flex flex-col gap-[20px]'>
                    <div className="mb-8 md:mb-0 w-[40%]">
                        <div className="mb-4 ">
                            <img src="/footer.png" alt="HiringMine Logo" className="h-8" />
                        </div>
                        <p className="text-[#ffffff]">
                            HiringMine connects employers and job seekers, where employers are the source of
                            resources and the job seekers can find and apply for their targeted job.
                        </p>
                    </div>

                    {/* Right Section: Social Links and Contact */}
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        {/* Social Media Links */}
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-xl font-semibold mb-4 text-[#ffffff]">Follow us</h2>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/hiringmine/">
                                    <FaFacebookF className="h-6 w-6 text-[#ffffff]" />
                                </a>
                                <FaWhatsapp className="h-6 w-6 text-[#ffffff]" />
                                <FaInstagram className="h-6 w-6 text-[#ffffff]" />
                                <FaLinkedinIn className="h-6 w-6 text-[#ffffff]" />
                            </div>
                        </div>

                        {/* Contact Us Section */}

                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#ffffff]">Contact Us</h3>
                    <p className="text-[#ffffff] flex items-center">
                        <FaEnvelope className="inline-block mr-2" />
                        <a href="mailto:ashabaz845@gmail.com" className="text-white-500">ashabaz845@gmail.com</a>
                    </p>
                </div>
            </div>

            {/* Footer Lower Section */}
            <div className="mt-8 border-t border-gray-300 pt-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Policy Links */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://hiringmine.com/privacypolicy" className="text-[#ffffff] hover:text-blue-500">Privacy Policy</a>
                        <a href="#" className="text-[#ffffff] font-bold hover:text-blue-500">Terms and Condition</a>
                    </div>

                    {/* Copyright Text */}
                    <div className="text-[#ffffff] font-bold text-sm">
                        &copy; Hiringmine 2024. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
