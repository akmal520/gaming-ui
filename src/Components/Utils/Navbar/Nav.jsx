import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navigation = [
        {
            name: 'home',
            href: '/'
        },
        {
            name: 'about us',
            href: '/about-us'
        },
        {
            name: 'portfolio',
            href: '/portfolio'
        },
        {
            name: 'news',
            href: '/news'
        },
    ]
    return (
        <nav>
            <ul className='flex space-x-14 items-center justify-center'>
                {
                    navigation.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.href} className='text-white capitalize font-medium text-lg' >{item.name}</Link>
                            </li>
                        )
                    })
                }
                <li>
                    <Link to='/contact-us' className='text-white capitalize font-medium text-lg bg-btn-1 py-2 px-3 rounded' >contact us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;