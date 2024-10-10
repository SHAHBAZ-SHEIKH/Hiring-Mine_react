import React,{useContext} from 'react';
import MyContext from '../context/mycontetx';

const DreamJob = () => {
    const { mode } = useContext(MyContext);
  return (
    <section className="py-12" >
      <div className="sec4-box text-center mb-8" >
        <h1 className="text-[40px] font-roboto  font-[800] " style={{ color: mode === 'dark' ? 'white' : '' }}>
          Find Your Dream Job <span className="text-indigo-600">Super Fast Ever.</span>
        </h1>
        <p className="text-gray-600 mt-4 text-[20px]" style={{ color: mode === 'dark' ? 'white' : '' }}>
          We are here to help jobseekers connect with organizers and companies. <br />We provide the best
          opportunities to professional people.
        </p>
      </div>

      <div className="sec4-img flex justify-center">
        <img src="/bannercareer.webp" alt="Banner" className="w-full max-w-5xl" />
      </div>
    </section>
  );
};

export default DreamJob;
