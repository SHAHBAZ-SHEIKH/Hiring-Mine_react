import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import MyContext from '../context/mycontetx';
import { Link } from 'react-router-dom';

const Header = () => {
    const { mode, toggleMode } = useContext(MyContext);
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div>
            <header className="w-full bg-white shadow-md">
                <div className="flex justify-between items-center py-4 px-6 " style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '', }}>
                    {/* Logo */}
                    <div className="flex items-center w-[186.35px] h-[35px]">
                        <img className="w-full block" src="/Hiring Mine Logo.png" alt="Logo" />
                    </div>

                    {/* Desktop Navbar */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a className="text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase font-normal" href="/" style={{ color: mode === 'dark' ? 'white' : '', }}>About Us</a>
                        <a className="text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase font-normal" href="/" style={{ color: mode === 'dark' ? 'white' : '', }}>People</a>
                        <Link to={'/jobs'} className="text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase font-normal" href="/" style={{ color: mode === 'dark' ? 'white' : '', }}>Jobs</Link>
                        <a className="text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase font-normal" href="/" style={{ color: mode === 'dark' ? 'white' : '', }}>Login</a>
                        <a className="text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase font-normal" href="/" style={{ color: mode === 'dark' ? 'white' : '', }}>Join Now</a>
                        <a className="text-[16px] text-[#4d3bdb] uppercase font-normal" href="/" style={{ color: mode === 'dark' ? '#4d3bdb' : '', }}>Employee/Post Job</a>
                    </nav>

                    <div className='flex items-center gap-[10px] justify-center'>
                        {/* Mode Toggle Button */}
                        <div className="flex items-center lg:ml-6">
                            <button className="focus:outline-none" onClick={toggleMode}>
                                {mode === 'light' ? <FiSun size={30} /> : <BsFillCloudSunFill size={30} />}
                            </button>
                        </div>

                        {/* Mobile Navbar Toggle Button */}
                        <div className="md:hidden">
                            <button className="focus:outline-none" onClick={handleNavToggle}>
                                {navOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <nav className={`md:hidden ${navOpen ? 'block' : 'hidden'} bg-white p-6`}>
                    <a className="block py-2 text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase" href="/">About Us</a>
                    <a className="block py-2 text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase" href="/">People</a>
                    <Link className="block py-2 text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase" href="/">Jobs</Link>
                    <a className="block py-2 text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase" href="/">Login</a>
                    <a className="block py-2 text-[16px] text-[#313131] hover:text-[#4d3bdb] uppercase" href="/">Join Now</a>
                    <a className="block py-2 text-[16px] text-[#4d3bdb] uppercase" href="/">Employee/Post Job</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;
