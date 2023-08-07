import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { footerNav } from '../../Data/Data';

const Footer = () => {
    return (
        <>
            <footer className='bg-white py-10 relative after:absolute after:bg-black after:w-full after:h-[0.8px] after:left-0 after:bottom-0'>
                <div className="container mx-auto">
                    {/* <div className="grid grid-cols-4 gap-8"> */}
                    <div className="flex justify-between flex-row gap-16">

                        <div id='logo' className='flex-[1_1_20%]'>
                            <Link to="/">
                                <h1 className='font-extrabold text-black text-2xl uppercase'>ak<span className='text-red-600'>gaming</span></h1>
                            </Link>
                            <div className="flex flex-col justify-center gap-4 pt-3">
                                <p className='text-black text-base font-medium'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <p className='text-black text-base font-medium'>
                                    @Lorem
                                </p>
                            </div>
                        </div>

                        <div id='about-us' className='flex-1'>
                            <h1 className='text-black capitalize text-base font-semibold'>about us</h1>
                            <ul className='pt-3 flex flex-col gap-2'>
                                {
                                    footerNav.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={item.href} className='text-black text-base font-medium'>{item.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div id='contact-us' className='flex-[1_1_16%]'>
                            <h1 className='text-black capitalize text-base font-semibold'>contact us</h1>

                            <div className="flex flex-col justify-center gap-4 pt-3">
                                <p className='text-black text-base font-medium'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <p className='text-black text-base font-medium'>
                                    +62123456789
                                </p>
                            </div>
                        </div>

                        <div id='icon' className='flex-1'>
                            <div className="flex flex-row gap-4 mt-[120px]">
                                <a href='/'>
                                    <div className=" bg-black w-7 h-7 rounded-full flex justify-center items-center">
                                        <FaFacebookF className='text-white text-base' />
                                    </div>
                                </a>
                                <a href='/'>
                                    <div className=" bg-black w-7 h-7 rounded-full flex justify-center items-center">
                                        <FaInstagram className='text-white text-base' />
                                    </div>
                                </a>
                                <a href='/'>
                                    <div className=" bg-black w-7 h-7 rounded-full flex justify-center items-center">
                                        <FaTwitter className='text-white text-base' />
                                    </div>
                                </a>
                                <a href='/'>
                                    <div className=" bg-black w-7 h-7 rounded-full flex justify-center items-center">
                                        <FaLinkedinIn className='text-white text-base' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright bg-white flex justify-center items-center py-8">
                <p className='text-black text-base font-medium'>Copyright ® 2022 prodesigner All rights Rcerved</p>
            </div>
        </>
    );
};

export default Footer;