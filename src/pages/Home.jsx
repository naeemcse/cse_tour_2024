import React from "react";
import DaySchedule from "../components/DaySchedule";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Teacher from "../components/Teacher";
const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <DaySchedule />
      <Teacher />
      <Services />
    </div>
  );
};

export default Home;
