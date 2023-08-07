import tranding_1 from '../Assets/images/tranding_1.svg';
import tranding_2 from '../Assets/images/tranding_2.svg';
import tranding_3 from '../Assets/images/tranding_3.svg';
import tranding_4 from '../Assets/images/tranding_4.svg';

import { GiVibratingSmartphone } from 'react-icons/gi'
import { FaComputer } from 'react-icons/fa6'
import { SiPlaystation4, SiMaterialdesign, SiAltiumdesigner } from 'react-icons/si'
import { PiVirtualRealityBold } from 'react-icons/pi'

import G1 from '../Assets/images/gallery/g-1.svg'
import G2 from '../Assets/images/gallery/g-2.svg'
import G3 from '../Assets/images/gallery/g-3.svg'
import G4 from '../Assets/images/gallery/g-4.svg'
import G5 from '../Assets/images/gallery/g-5.svg'
import G6 from '../Assets/images/gallery/g-6.svg'

export const tranding = [
    {
        img: tranding_1,
        text: '40 followers'
    },
    {
        img: tranding_2,
        text: '40 followers'
    },
    {
        img: tranding_3,
        text: '40 followers'
    },
    {
        img: tranding_4,
        text: '40 followers'
    },
]

export const iconsHome = [
    {
        heading: 'mobile game development',
        icon: <GiVibratingSmartphone className='text-red-600 text-2xl' />
    },
    {
        heading: "pc game development",
        icon: <FaComputer className='text-red-600 text-2xl' />
    },
    {
        heading: "PS4 game development",
        icon: <SiPlaystation4 className='text-red-600 text-3xl' />
    },
    {
        heading: 'AR/VR solutions',
        icon: <PiVirtualRealityBold className='text-red-600 text-2xl' />
    },
    {
        heading: 'AR/VR design',
        icon: <SiMaterialdesign className='text-red-600 text-2xl' />
    },
    {
        heading: '3D modelings',
        icon: <SiAltiumdesigner className='text-red-600 text-2xl' />
    },
]

export const gallery = [
    {
        img: G1,
        css: 'row-span-4'
    },
    {
        img: G2,
        css: 'row-span-4'
    },
    {
        img: G3,
        css: 'row-span-4'
    },
    {
        img: G4,
        css: 'row-span-2'
    },
    {
        img: G5,
        css: 'row-span-6'
    },
    {
        img: G6,
        css: 'row-span-4'
    },
]

export const footerNav = [
    {
        name: 'zeux',
        href: '/'
    },
    {
        name: 'portfolio',
        href: '/portfolio'
    },
    {
        name: 'careers',
        href: '/careers'
    },
    {
        name: 'contact us',
        href: '/contact-us'
    },
]