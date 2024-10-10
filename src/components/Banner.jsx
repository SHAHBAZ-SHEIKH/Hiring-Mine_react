import React, { useContext, useState } from 'react';
import MyContext from '../context/mycontetx';

const Banner = () => {

    const { mode } = useContext(MyContext);

    const searchData = [
        {
            id: 1,
            title: "Software"
        },
        {
            id: 2,
            title: "Developer",
        },
        {
            id: 3,
            title: "Backend",
        },
        {
            id: 4,
            title: "React"
        },
        {
            id: 5,
            title: "React Native"
        },
        {
            id: 6,
            title: "Flutter"
        },
        {
            id: 7,
            title: "Node"
        },
        {
            id: 8,
            title: "UI/UX"
        },
        {
            id: 9,
            title: "Designer"
        },
        {
            id: 10,
            title: "Web"
        },
        {
            id: 11,
            title: "SEO"
        },
        {
            id: 12,
            title: "Marketing"
        },
        {
            id: 13,
            title: "Writer"
        }
    ]


    return (
        <div>
            <div className='w-full ' style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '', }} >
                <div className='max-w-[1170px] mx-auto flex justify-center items-center mt-[40px]' >
                    <div className='w-[100%] mt-[10px]'>
                        <h1 className='letter-spacing-[5px] bg-gradient-to-r from-[#522fd4] to-[#6bdcff] bg-clip-text text-transparent text-[80px] leading-[90px]  text-center  font-[800] '>Dig. Apply
                            <br />
                            Prepare Your Future
                        </h1>
                        <p className='mt-[30px] font-roboto font-normal text-[20px] text-center leading-[32px] letter-spacing-[0.00938em]'>Hiring Mine connects employer and job seekers, where employers are the source of the <br /> resources and the job seeker can find and apply for their targeted job.</p>


                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-[24px]'>
                <div className='w-[50%] flex justify-center items-center relative'>
                    <input className='w-[100%] h-[50px] px-[20px] text-[20px] border-[2px] border-[solid] border-[rgba(104, 81, 255, 0.5)] focus:border-[2px] focus:border-[#4d3bdb] focus:border-[solid] outline-none' type="text" placeholder='Search Jobs' />
                    <div className='absolute right-[20px]  '>
                        <img src="https://www.hiringmine.com/assets/UserVector-dcdef637.svg" alt="" />
                    </div>
                </div>

                <div className='mt-[30px]'>
                    <button className='bg-[#4d3bdb] text-white px-[20px] py-[10px] w-[130px] rounded-[20px] text-[20px]font-roboto shadow-custom'>Find Jobs</button>
                </div>

                <div>
                    <p className='mt-[20px] font-roboto  text-[30px] text-center leading-[32px] letter-spacing-[0.00938em] font-[800] bg-gradient-to-r from-[#522fd4] to-[#6bdcff] bg-clip-text text-transparent'>Popular Searches</p>
                </div>
                <div className='flex flex-wrap gap-[20px] mt-[20px] w-[80%] justify-center items-center'>
                    {
                        searchData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <button className='inline-flex justify-center bg-transparent cursor-pointer align-middle font-roboto text-[0.875rem] lettter-spacing-[0.00938em] font-[800]
                        text-customText text-center leading-[16px] uppercase outline-none border-[1px] border-[solid] border-[rgba(104, 81, 255, 0.5)] rounded-[6px] p-[7px_10px] whitespace-nowrap hover:border-[1px] hover:border-[solid] hover:border-[#4d3bdb]'>{item.title}</button>
                                </div>

                            )
                        })
                    }


                </div>

                <div className='w-[full]'>
                    <img  className='w-[100%] h-auto' src="/art work.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Banner
