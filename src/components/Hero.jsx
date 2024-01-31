import React from "react";
import Slider from "react-slick";
import CountdownToFebruary28 from "./CountDown";
// import CountdownToFebruary28 from "/CountDown";

const Hero = () => {
 
  return (
    <>
    {/* <CountdownToFebruary28 /> */}
   
      <div>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url(/images/saintmartinbg.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold text-red-200" >CSE Tour 2K24 </h1>
              <p className="mb-5">
                IT is goning ot a legendary tour to Saint Martin Island. Organized by CSE-12 batch.
              </p>
              <h3 className="mb-5 text-5xl font-bold">Cost: 4500 BDT </h3>

              <h2 className="mb-5  text-xl font-bold ">
              <CountdownToFebruary28 /> 
               </h2>
               <a href="/booking">
              <button className="btn btn-primary"> Let Book a seat </button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Hero;
