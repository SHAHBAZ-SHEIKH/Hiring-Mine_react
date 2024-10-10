import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Hire from '../components/Hire'
import DreamJob from '../components/DreamJob'
import CareerCategory from '../components/CareerCategory'
import JobCard from '../components/JobCard'
import Layer from '../components/Layer'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Hire />
      <DreamJob />
      <CareerCategory/>
      <JobCard />
      <Layer/>
      <Footer/>
    </div>
  )
}

export default Home
