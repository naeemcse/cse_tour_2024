import React from "react";
import { Link } from "react-router-dom"; 
import Booking from './../pages/Booking';
import pdfFile from "..//../public/tour.pdf"

const Navbar = () => {
  
  const handleDownload = () => {
    // window.open(pdfFile, '_blank');
    const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'CSE Tour Plane 2024 arranged by cse-12 .pdf'; // Replace with your desired file name
  link.click();
  };
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/contact"> Contact </a>
              </li>
              <li>
                <a> Photo Gallery </a>
                <ul className="p-2">
                  <li>
                    <a> Teacher </a>
                  </li>
                  <li>
                    <a>Student</a>
                  </li>
                </ul>
              </li>
              <li>
              <a> Who Participated </a>
              </li>
            </ul>
          </div>

          <a href="/" className="btn btn-ghost text-xl"> CSE Tour 2K24 </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              
            <a href="/contact"> Contact </a>

            </li>
            <li>
              <details>
                <summary> Photo Gallery  </summary>
                <ul className="p-2">
                  <li>
                    <a> Teacher </a>
                  </li>
                  <li>
                    <a> Student  </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a> Who Participated </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <a href="/tourplane" onClick={handleDownload} className="mx-1 bg-secondary btn"> Download Tour Plane </a>
          <a href="/booking" className="btn bg-green-300">Book a Seat </a>
          {/* <Link to="/booking" className="btn">Button</Link> */}

        </div>
      </div>
    </>
  );
};

export default Navbar;
