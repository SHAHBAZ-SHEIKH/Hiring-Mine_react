import React from 'react'
import JobHeader from '../components/JobHeader'
import JobFilter from '../components/JobFilter'
import JobDetail from '../components/JobDetail'

const Jobs = () => {
  return (
    <div>
      <JobHeader />
      
        <JobFilter />
        <JobDetail/>
      
    </div>
  )
}

export default Jobs
