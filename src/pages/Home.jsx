import React from 'react';
import Hero from '../components/Hero';
import Teacher from '../components/Teacher';
import DaySchedule from '../components/DaySchedule';
import Services from '../components/Services';
import PhotoGrid from '../components/PhotoGrid';
const Home = () => {
   
    return (
        <div>
            <Hero />
            <Teacher />
            <DaySchedule />
         <Services/>
         
            
        </div>
    );
};

export default Home;