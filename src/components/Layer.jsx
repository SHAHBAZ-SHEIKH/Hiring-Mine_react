import React,{useContext} from 'react';
import MyContext from '../context/mycontetx';


const Layer = () => {
    const { mode } = useContext(MyContext);
    return (
        <section className="flex flex-col md:flex-row items-center justify-around p-4 mt-[50px]">
            <div className="flex flex-col w-[41.66%] items-center text-center mb-8 md:mb-0">
                <img src="/Frameleft.png" alt="Connect With People" className="w-70 h-auto mb-4" />
                <h1 className="text-[48px] font-[600] leading-[57px] tracking-[-.02em] text-[#3f3f3f] "style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Connect With People <span className="block text-[#6851ff]">Who Can Help</span>
                </h1>
                <button className="mt-4 bg-[#ffffff] text-[#6851ff] font-bold px-6 py-2 rounded-full cursor-not-allowed border-[2px] border-[solid] border-[rgba(104, 81, 255, 0.5)]">
                    Coming Soon
                </button>
            </div>
            <div className="w-[3px] h-40 bg-[#6851ff] font-bold md:mx-8"></div>
            <div className="flex flex-col w-[41.66%] items-center text-center">
                <img src="/LayerRight.png" alt="Post Your Job" className="w-70 h-auto mb-4" />
                <h1 className="text-[48px] font-[600] leading-[57px] tracking-[-.02em] text-[#6851ff]">
                Post Your Job 
                    <span className="block text-[#3f3f3f]" style={{ color: mode === 'dark' ? 'white' : '' }}>For People To See</span >
                </h1>
                <button className="mt-4 bg-[#ffffff] text-[#6851ff] font-bold px-6 py-2 rounded-full cursor-not-allowed border-[2px] border-[solid] border-[rgba(104, 81, 255, 0.5)]">
                    Coming Soon
                </button>
            </div>
        </section>
    );
};

export default Layer;
