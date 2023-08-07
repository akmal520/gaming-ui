import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Navbar/Nav';

const Header = () => {
    return (
        <header>
            <div className="lg:py-8 lg:px-24 mx-auto">
                <div className='flex items-center justify-between'>
                    <Link to="/">
                        <h1 className='font-bold text-white text-2xl uppercase'>ak<span className='text-red-600'>gaming</span></h1>
                    </Link>

                    <div className="hidden lg:block">
                        <Nav />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;