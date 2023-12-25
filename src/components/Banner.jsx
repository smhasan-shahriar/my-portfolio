import React from "react";
import banner1 from "../assets/banner1.jpg";
import ador from "../assets/ador.png";
import './Animated.css'
import { toast } from "react-toastify";
import cv from '../assets/Resume_SM Hasan Shahriar.pdf'
import { Link } from "react-router-dom";

const Banner = () => {
  
  const handleDownload = () => {
    toast("resume successfully downloaded")
  };
  return (
    <div
      className="hero new-hero min-h-screen"
    
    >
      <div className="hero-overlay new-hero-overlay bg-opacity-70"></div>
      <div className="hero-content new-hero-content text-center text-neutral-content flex flex-col lg:flex-row-reverse">
      <div>
          <img className="w-[375px] h-[375px] object-cover rounded-full shadow-xl border-gray-600" src={ador} alt="" />
        </div>
        <div className="text-white">
          <h1 className="mb-5 text-7xl text-white font-bold">S M Hasan Shahriar</h1>
          <p className="mb-5 text-white text-3xl">Junior Web Developer</p>
          <p align="center">
            <a>
              <img src="https://skillicons.dev/icons?i=html,css,javascript,react,express,mongodb" />
            </a>
          </p>
          <div>
          <Link to="/projects"><button className="btn my-5 btn-primary">View Latest Projects</button></Link>
          <a  href={cv} download="Resume_SM Hasan Shahriar.pdf"  className="btn btn-primary ml-4" onClick={handleDownload}>Download Resume</a>
        </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Banner;
