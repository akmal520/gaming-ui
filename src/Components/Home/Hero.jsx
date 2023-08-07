import React from 'react';
import HeroImg from '../../Assets/Hero.svg';
import EngineImg from '../../Assets/engine.svg'
import UnrealImg from '../../Assets/unreal.svg'

const Hero = () => {
    return (
        <section className='h-[85vh] pt-4'>
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center gap-8">
                    <div className="hero-text">
                        <p className='text-[#E87D0E] font-medium mb-[17px]'>Proved By prodesigner</p>

                        <h1 className='text-white text-5xl font-bold w-96 leading-normal mb-[26px]'>Work that we produce for our clients</h1>

                        <p className='text-white w-[450px] leading-8 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>

                        <button className='text-white mt-6 bg-[linear-gradient(113deg,_#D80027_0%,_#FB9E3C_100%);] py-4 px-6 rounded-full'>Get more details</button>
                    </div>
                    
                    <div className="hero-img relative">
                        <img src={HeroImg} alt="" className='w-[400px]' />
                        <img src={EngineImg} alt="" className='absolute top-0 -left-10' />
                        <img src={UnrealImg} alt="" className='absolute bottom-2 -right-2' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;