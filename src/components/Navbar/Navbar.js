import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='mt-3'>
            <ul className='md:flex justify-center font-bold uppercase'>
                <li><Link className='ml-12' to="/">Home</Link></li>
                <li><Link className='ml-12' to="/reviews">Reviews</Link></li>
                <li><Link className='ml-12' to="/dashboard">Dashboard</Link></li>
                <li><Link className='ml-12' to="/blogs">Blogs</Link></li>
                <li><Link className='ml-12' to="/about">About</Link></li>
            </ul>
       </nav>
    );
};

export default Navbar;