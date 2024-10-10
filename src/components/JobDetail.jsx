import React, { useEffect, useState, useContext } from 'react';
import MyContext from '../context/mycontetx';
import { Link } from 'react-router-dom';

function timeElapsed(date) {
    const now = new Date();
    const update = new Date(date);
    const differenceInMins = now - update;
    const differenceInDays = Math.floor(differenceInMins / (1000 * 60 * 60 * 24));
    if (differenceInDays < 1) {
        return "Today";
    } else if (differenceInDays < 30) {
        return `${differenceInDays} days ago`;
    } else if (differenceInDays < 365) {
        return `${Math.floor(differenceInDays / 30)} months ago`;
    } else {
        return `${Math.floor(differenceInDays / 365)} years ago`;
    }
}

const JobDetail = () => {
    const [jobData, setJobData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(true); 
    const [scrollLoading, setScrollLoading] = useState(false); 
    const { mode } = useContext(MyContext);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=${limit}&pageNo=1&keyWord=&category=`);
                const res = await response.json();
                setJobData(res.data);
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        const scrollHandler = async () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                setScrollLoading(true);
                setLimit((prevLimit) => prevLimit + 10);

                // Fetch more jobs
                const response = await fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=${limit}&pageNo=1&keyWord=&category=`);
                const res = await response.json();
                setJobData((prevData) => [...prevData, ...res.data]);
                setScrollLoading(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [limit]);

    return (
        <section className='mt-[40px]'>
            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
                </div>
            )}

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[5px] container mx-auto ${loading ? 'hidden' : ''}`}>
                {
                    jobData.map((item) => {
                        let salaryText;
                        if (!item.payRangeStart || !item.payRangeEnd) {
                            salaryText = "No Salary Mentioned";
                        } else {
                            salaryText = "RS " + item.payRangeStart + " - " + item.payRangeEnd;
                        }

                        let time = timeElapsed(item.updatedAt);

                        return (
                            <Link to={`/jobs`} key={item.category.id} className="bg-white shadow-[0_4px_40px_#bdb2ff3d] rounded-lg m-4 w-[100%] hover:shadow-xl transition-shadow duration-300 flex flex-col px-10 py-4" style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <div className='flex justify-between items-center w-[100%]'>
                                    <div className='flex flex-col gap-[5px] w-[100%]'>
                                        <h1 className='font-roboto text-[1rem] font-[400] leading-[1.5] tracking-[0.00938em]'>{item.companyName ? item.companyName : "Anonymous"}</h1>
                                        <p className='m-0 font-roboto font-helvetica font-arial text-base leading-6 tracking-wide truncate font-semibold'>{item.designation}</p>
                                        <p className='m-0 font-roboto font-helvetica font-arial text-base leading-6 tracking-wide text-[#4d3bdb] font-medium'>{salaryText}</p>
                                    </div>
                                    <div className='w-[50px] h-[30px] flex flex-col mb-[30px]'>
                                        <img className='w-[50] h-[30]' src="/download.png" alt="" />
                                    </div>
                                </div>

                                <div className='flex justify-between mt-[50px] text-[rgb(63,63,63)] text-xs items-center'>
                                    <div className='flex flex-col gap-[5px]'>
                                        <p className='m-0 font-roboto font-helvetica font-arial text-base leading-6 tracking-wide font-medium text-[#000]' style={{ color: mode === 'dark' ? 'white' : '' }}>Lahore,Pakistan</p>
                                        <p className='m-0 font-roboto font-helvetica font-arial font-normal text-base leading-6 tracking-wide'>{time}</p>
                                    </div>
                                    <div className='flex flex-col gap-[5px] mt-[20px]'>
                                        <p className='m-0 font-roboto font-helvetica font-arial font-normal text-base leading-6 tracking-wide'>views</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }

                {scrollLoading && (
                    <div className="flex justify-center items-center mt-4">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobDetail;
