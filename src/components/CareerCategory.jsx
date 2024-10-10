import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
//import { Link } from 'react-router-dom';
import MyContext from '../context/mycontetx';

const CareerCategory = () => {

    const [category, setCategory] = useState([]);

    const { mode } = useContext(MyContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://backend-prod.app.hiringmine.com/api/categories/all");
            const result = await response.json();
            setCategory(result.data);
            console.log(result.data, "result");
        };
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [])



    return (
        <section className="py-12 mx-auto container">
            <div className="text-center mb-8">
                <h1 className="text-[48px] font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className="text-indigo-600">Countless Career Options</span> Are Waiting For You To Explore
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 jobslist">
                {/* Category Jobs */}
                {
                    category.slice(0,8).map((item) => {
                        return (
                            <div key={item._id} className="p-10 bg-white  border-[1px] border-[solid] border-[#fff] leading-[24px] flex flex-col justify-center items-center gap-[10px] w-[100%] rounded-[24px] text-center  hover:cursor-pointer  shadow-[0_4px_40px_#bdb2ff3d] hover:shadow-[0_4px_40px_#bdb2ff3d] transition-all duration-600 ease hover:transition-all hover:duration-600 hover:ease hover:transform hover:scale-105" style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '', }}>

                                <a href="https://hiringmine.com/jobsearch?category=6499f660d7d3bec5b121e02f">
                                    <img src="https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg" alt="Marketing & Sales" className="mx-auto mb-4" />
                                    <h2  className="font-roboto leading-6 tracking-[0.00938em] text-[#6851ff] text-lg font-semibold">{item.name}</h2>
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="font-roboto font-normal p-[5px] text-[#6c6c6c] text-[18px] leading-6 tracking-[0.00938em]">{item.postCounts} Jobs</p>
                                </a>

                            </div>


                        )
                    })
                }



            </div>

            <div className="flex flex-col mt-8 justify-end">

                <div className='flex items-center gap-[10px] justify-end'>
                    <a href="#" className='text-[#6851ff] font-roboto font-[600] text-[16px] '>View</a>
                    <AiOutlineArrowRight className='text-[#6851ff] font-roboto font-[600] text-[16px] ' />
                </div>


            </div>
        </section>
    );
};

export default CareerCategory;
