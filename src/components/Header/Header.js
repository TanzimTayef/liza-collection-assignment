import React from 'react';

const Header = () => {
    return (
        <nav className='mt-3'>
            <ul className='md:flex justify-center font-bold uppercase'>
                <li><a className='ml-12' href="/home">Home</a></li>
                <li><a className='ml-12' href="/reviews">Reviews</a></li>
                <li><a className='ml-12' href="/dashboard">Dashboard</a></li>
                <li><a className='ml-12' href="/blogs">Blogs</a></li>
                <li><a className='ml-12' href="/about">About</a></li>
            </ul>
       </nav>
    );
};

export default Header;