import React, { useState,useContext } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import MyContext from '../context/mycontetx';


const JobFilter = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { mode } = useContext(MyContext)

  const categories = [
    { title: 'Category', options: ['Development', 'Sales and Marketing', 'Art & Illustration'] },
    { title: 'Date Posted', options: ['Any Time', '1 Month', 'Last 7 days', 'Past 24 Hours'] },
    { title: 'Job Type', options: ['Full Time', 'Part Time', 'Contract'] },
    { title: 'Seniority Level', options: ['Senior-Level', 'Mid-Level', 'Internship', 'Fresher'] },
    { title: 'On-Site/Remote', options: ['On-Site', 'Remote', 'Hybrid'] },
    { title: 'Salary Range', options: ['0-20000 PKR', '20000-50000 PKR', '50000-100000 PKR'] },
    { title: 'Experience', options: ['0-1 years', '1-2 Years', '2-4 Years', '4-6 Years'] },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className=" whitespace-nowrap flex space-x-4 p-4 bg-gray-100 mx-auto container" style={{backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '' }}>
      {categories.map((category, index) => (
        <div key={index} className="relative flex-shrink-0 w-40">
          {/* Button with Dropdown Icon */}
          <button
            onClick={() => toggleDropdown(index)}
            className="flex items-center justify-between bg-[#6851ff] text-white py-2 px-4 rounded-md focus:outline-none hover:bg-[#6851ff] transition duration-200 w-full"
          >
            <span>{category.title}</span>
            <FaChevronDown className={`ml-2 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {openDropdown === index && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-white-600 rounded-md shadow-lg z-10  ">
              {category.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center p-2  hover:bg-gray-100">
                  <input type="checkbox" className="mr-2" value={option} />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};



export default JobFilter;
