import React from 'react';
import { NavLink } from 'react-router';
import './navbar.css'
import { FaReact } from 'react-icons/fa';


const Navbar = () => {

    const links = <>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/'>Home</NavLink></li>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/vite'>Vite</NavLink></li>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/reactRouter'>React Router</NavLink></li>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/tailwind'>Tailwind</NavLink></li>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/daisyUi'>DaisyUI</NavLink></li>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/reactIcons'>React-Icons</NavLink></li>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/firebase'>Firebase</NavLink></li>
        <li className='hover:text-white hover:bg-teal-500 hover:rounded-sm'><NavLink to='/toastify'>Toastify</NavLink></li>
    </>
    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-teal-600 font-medium dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center text-teal-500'>
                        <FaReact className='text-teal-500' size={24} />
                        <a className=" text-2xl font-bold">Project Setup</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  text-teal-600 font-medium  px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-teal-600 font-medium hover:text-white hover:bg-teal-500">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;