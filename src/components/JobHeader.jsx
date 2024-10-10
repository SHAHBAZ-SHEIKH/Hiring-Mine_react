import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import MyContext from '../context/mycontetx';

const JobHeader = () => {

    const { mode, toggleMode } = useContext(MyContext)
    return (
        <div className="flex justify-between items-center p-4 mx-auto container">
            {/* Logo Section */}
            <div className="flex items-center">
                <img src="/Hiring Mine Logo.png" alt="Logo" className="h-10" />
            </div>

            {/* Job Search Input Section */}
            <div className="px-[10px] flex items-center justify-between border-[1px] border-[solid] border-[#e5e5e5] w-[50%]">
                <div className='flex items-center'>
                    <span className="mr-2 font-bold">Job</span>
                    <div className="w-[2px] h-8 bg-[#6851ff] font-bold md:mx-8"></div>
                    <input
                    
                        type="text"
                        id="searchBox"
                        placeholder="Search job title "
                        className="border-none rounded-l p-2 bg-transparent outline-none   "
                    />
                </div>
                <div className='flex items-center'>
                <div className="w-[2px] h-8 bg-[#6851ff] font-bold md:mx-8"></div>
                    <button
                        id="searchButton"
                        className=" text-[#6851ff] p-2 rounded-r hover:bg-blue-600 transition duration-200"
                    >
                        <FaSearch />
                    </button>
                </div>
            </div>

            {/* Mode Toggle Section */}
            <div className="flex items-center">
                <div className="flex items-center lg:ml-6">
                    <button className="focus:outline-none" onClick={toggleMode}>
                        {mode === 'light' ? <FiSun size={30} /> : <BsFillCloudSunFill size={30} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobHeader;
