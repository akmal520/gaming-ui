import React from 'react';
import { HiFire } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';

import { tranding } from '../../Data/Data';
import { iconsHome } from '../../Data/Data';
import { gallery } from '../../Data/Data';

import CODM from '../../Assets/images/CODM.svg';
import Dot from '../../Assets/images/dotred.svg';

const Content = () => {
    return (
        <>
            <section className="py-[56px]">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center pb-14">
                        <h3 className="text-white lg:text-3xl font-bold capitalize">
                            Currently Trending Games
                        </h3>
                        <button className="text-white lg:text-xl font-medium bg-[rgba(255,255,255,0.11)] py-[10px] px-[30px] rounded-[10px]">
                            See All
                        </button>
                    </div>

                    <div className="flex lg:flex-row items-center gap-12 pb-[120px]">
                        {tranding.map((item, index) => {
                            return (
                                <div
                                    className="flex lg:flex-col items-center cursor-pointer"
                                    key={index}
                                >
                                    <img src={item.img} alt="..." />

                                    <div className="pt-6 flex items-center">
                                        <HiFire className="text-white lg:text-xl font-medium mr-2" />
                                        <p className="text-white lg:text-xl font-medium">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h1 className="text-white lg:text-4xl/[65px] text-center font-semibold px-40">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </h1>
                </div>
            </section>

            <section className="py-[56px]">
                <div className="container mx-auto">
                    <div className="relative">
                        <h1 className="text-white font-semibold lg:text-3xl capitalize">
                            lorem ipsum
                        </h1>
                        <p className="pt-6 text-white text-base font-normal w-[500px] leading-8">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                        </p>

                        <img src={CODM} alt="..." className="pt-10 w-full" />
                        <img
                            src={Dot}
                            alt="..."
                            className="absolute top-32 right-[125px] w-[196px] h-[154px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-bg-pubg h-[106vh] bg-cover bg-no-repeat bg-[linear-gradient(0deg,_rgba(0,0,0,0.20)_0%,_rgba(0,0,0,0.20)_100%),_rgba(0,0,0,0.10);]">
                <div className="container mx-auto">
                    <div className="pt-[50px] flex lg:flex-col items-center text-center">
                        <h1 className="text-white lg:text-3xl/[56px] drop-shadow-2xl font-bold w-9/12 ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </h1>

                        <p className="pt-[25px] text-white font-normal lg:text-base/[30px] w-9/12">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    {/* <div className="pt-12 grid grid-cols-4 gap-8"> */}
                    <div className="pt-12 flex flex-row gap-16 flex-wrap justify-center items-center">
                        {iconsHome.map((item, index) => {
                            return (
                                <div
                                    className="card flex flex-col items-center justify-center gap-6"
                                    key={index}
                                >
                                    <div className="bg-white w-12 h-12 text-base rounded-full flex justify-center items-center">
                                        {/* <GiVibratingSmartphone className='text-red-600 text-2xl' /> */}
                                        {item.icon}
                                    </div>
                                    <p className="text-white text-base font-medium capitalize">
                                        {item.heading}
                                    </p>
                                    <FaArrowRight className="text-red-600 text-2xl cursor-pointer" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className='py-[56px]'>
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className='text-white lg:text-3xl font-bold text-center capitalize'>our recent projects</h1>
                        <p className='text-white text-center text-sm font-normal px-72 leading-7 pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        <div className="grid lg:grid-cols-3 gap-6 pt-8">
                            {
                                gallery.map((item, index) => {
                                    return (
                                        <img key={index} src={item.img} alt="..." className='h-[223px] w-full object-cover object-center rounded hover:scale-105 transition-all duration-300 cursor-pointer' />
                                    )
                                })
                            }
                        </div>

                        <div className="pt-12">
                            <button className="text-white lg:text-xl font-medium bg-[rgba(255,255,255,0.11)] py-[10px] px-[30px] rounded-[10px]">
                                See All
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-[56px] pb-32'>
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        <h1 className='text-white text-3xl font-semibold capitalize'>lorem ipsum</h1>
                        <p className='pt-6 pb-12 text-white text-base/8 font-normal w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        <div className="w-full bg-white rounded-lg px-14 py-10">
                            <div className="flex lg:flex-row justify-center items-center gap-8">
                                <div className="flex-1">
                                    <h1 className='text-black text-3xl font-medium'>Stay in the loop</h1>
                                    <p className='text-black text-[15px] pt-3 font-medium'>Subscribe to receive the latest news and updates about TDA.
                                        We promise not to spam you! </p>
                                </div>
                                <div className="flex-1 relative">
                                    <input type="email" id="default-search" class="block w-full p-4 pl-10 text-sm text-[#898989] border border-gray-300 rounded-lg bg-black focus:ring-red-500 focus:border-red-500" placeholder="Enter email address" />
                                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;
