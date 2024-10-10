import React, { useEffect, useState ,useContext} from 'react';
import MyContext from '../context/mycontetx';
import { Link } from 'react-router-dom';


function timeElapsed(date){
    const now = new Date()
    const update = new Date(date)
    const differnceInMins = now - update
    const difernceInDays = Math.floor(differnceInMins / (1000 * 60 * 60 * 24))
    console.log(difernceInDays,"difernceInDays")
    if(difernceInDays <1){
        return "Today"
    }
    else if(difernceInDays < 30){
        return `${difernceInDays} days ago`
    }
    else if(difernceInDays < 365){
        return `${Math.floor(difernceInDays / 30)} months ago`
    }
    else{
        return `${Math.floor(difernceInDays / 365)} years ago`
    }

}

const JobCard = () => {

    const [jobData, setJobData] = useState([])
    // const [payRange,setPayRange] = useState("")
    const { mode } = useContext(MyContext);


    useEffect(() => {
        fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=')
            .then((res) => res.json(res))
            .then((res) => {
                console.log("res", res.data.slice(0, 6))
                setJobData(res.data.slice(0, 6))
            })
            .catch((err) => {
                console.log("err", err)
            })
            

    }, [])





    return (
        <section className='mt-[40px]'>
            <div className="text-center mb-8">
                <h1 className="text-[40px]  font-roboto font-[800] " style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className="text-[#6851ff]">Latest And Top </span>Job Openings
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px] container mx-auto">
                {/* Job Card 1 */}

                {
                    jobData.map((item) => {

                        let salaryText;
                        if (!item.payRangeStart || !item.payRangeEnd) {
                            salaryText = "No Salary Mentioned";
                        } else {
                            salaryText = "RS " + item.payRangeStart + " - " + item.payRangeEnd;
                        }

                        let time = timeElapsed(item.updatedAt)



                        return (
                            <Link to={`/jobs`} key={item.category.id} className="bg-white shadow-[0_4px_40px_#bdb2ff3d] rounded-lg m-4  w-[100%] hover:shadow-xl transition-shadow duration-300 flex flex-col px-10 py-6 " style={{ backgroundColor: mode === 'dark' ? 'rgb(17,24,39)' : '', color: mode === 'dark' ? 'white' : '' }}>
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

                                <div className='flex justify-between mt-[50px]  text-[rgb(63,63,63)] text-xs  items-center'>
                                    <div className='flex flex-col gap-[5px]'>
                                        <p className='m-0 font-roboto font-helvetica font-arial text-base leading-6 tracking-wide font-medium text-[#000]' style={{ color: mode === 'dark' ? 'white' : '' }}>Lahore,Pakistan</p>
                                        <p className='m-0 font-roboto font-helvetica font-arial font-normal text-base leading-6 tracking-wide'>{time}</p>
                                    </div>
                                    <div className='flex flex-col gap-[5px] mt-[20px]'>
                                        <p className='m-0 font-roboto font-helvetica font-arial font-normal text-base leading-6 tracking-wide'>views</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }






            </div>
        </section>
    );
};

export default JobCard;
