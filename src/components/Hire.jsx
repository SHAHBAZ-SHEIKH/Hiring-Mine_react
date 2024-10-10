import React,{useContext} from 'react';
import { FaUser, FaSearch, FaFileAlt, FaBriefcase } from 'react-icons/fa';
import MyContext from '../context/mycontetx';


const Hire = () => {

    const { mode } = useContext(MyContext);
  return (
    <section className="sec3 py-12">
      <div className="sec3-box text-center mb-12">
        <h1 className="text-[40px] font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
          Get Hired In 4 <span className="text-indigo-600">Quick Easy Steps (Coming Soon)</span>
        </h1>
        <p className="text-gray-600 mt-4 text-[20px]" style={{ color: mode === 'dark' ? 'white' : '' }}>
          The quickest and the most effective way to get hired by the top firm.
        </p>
      </div>

      <div className="parentbox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="childbox bg-white  p-6 rounded-lg border-[1px] border-[solid] border-[#fff]
        shadow-[0_4px_40px_#bdb2ff3d] hover:shadow-[0_4px_40px_#bdb2ff3d] transition-all duration-600 ease hover:transition-all hover:duration-600 hover:ease hover:transform hover:scale-105" style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '', }} >
          <button className="icon-btn text-4xl text-indigo-600 mb-4">
            <FaUser />
          </button>
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Create an Account</h2>
          <p className="text-gray-600" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Join our vibrant community. Create your account and unlock boundless opportunities.
          </p>
        </div>

        <div className="childbox bg-white  p-6 rounded-lg border-[1px] border-[solid] border-[#fff]
        shadow-[0_4px_40px_#bdb2ff3d] hover:shadow-[0_4px_40px_#bdb2ff3d] transition-all duration-600 ease hover:transition-all hover:duration-600 hover:ease hover:transform hover:scale-105" style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '', }}>
          <button className="icon-btn text-4xl text-indigo-600 mb-4">
            <FaSearch />
          </button>
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Search a Job</h2>
          <p className="text-gray-600" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Discover your ideal job. Our intuitive search feature makes job hunting effortless.
          </p>
        </div>

        <div className="childbox bg-white  p-6 rounded-lg border-[1px] border-[solid] border-[#fff]
        shadow-[0_4px_40px_#bdb2ff3d] hover:shadow-[0_4px_40px_#bdb2ff3d] transition-all duration-600 ease hover:transition-all hover:duration-600 hover:ease hover:transform hover:scale-105" style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '', }}>
          <button className="icon-btn text-4xl text-indigo-600 mb-4">
            <FaFileAlt />
          </button>
          <h2 className="text-xl font-semibold mb-2 text-indigo-600" >Upload CV/Resume</h2>
          <p className="text-gray-600 " style={{ color: mode === 'dark' ? 'white' : '' }}>
            Showcase your expertise. Upload your CV or resume and stand out to employers.
          </p>
        </div>

        <div className="childbox bg-white  p-6 rounded-lg border-[1px] border-[solid] border-[#fff]
        shadow-[0_4px_40px_#bdb2ff3d] hover:shadow-[0_4px_40px_#bdb2ff3d] transition-all duration-600 ease hover:transition-all hover:duration-600 hover:ease hover:transform hover:scale-105" style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '', }}>
          <button className="icon-btn text-4xl text-indigo-600 mb-4">
            <FaBriefcase />
          </button>
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Get a Job</h2>
          <p className="text-gray-600 " style={{ color: mode === 'dark' ? 'white' : '' }}>
            Achieve your career goals. Apply for jobs and embark on your next adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hire;
