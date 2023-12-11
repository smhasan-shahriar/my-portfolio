import React from "react";
import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/gRDWcqs/markus-spiske-70-Rir5v-B96-U-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-white">
          <h1 className="mb-5 text-7xl text-white font-bold">S M Hasan Shahriar</h1>
          <p className="mb-5 text-white text-3xl">Junior Web Developer</p>
          <p align="center">
            <a>
              <img src="https://skillicons.dev/icons?i=html,css,javascript,react,express,mongodb" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
