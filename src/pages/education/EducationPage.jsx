import React from "react";
import mba from "../../assets/mba-logo.jpeg";
import bsc from "../../assets/BUET_LOGO.svg";
import hsc from "../../assets/Notre_Dame_College,_Dhaka_Monogram.svg"
import ssc from "../../assets/mub.jpeg"

const EducationPage = () => {
  return (
    <div className="max-w-[1440px] min-h-screen mx-auto px-10">
      <h1 className="font-bold text-4xl my-10 mx-auto text-center">
        My Education
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-48 py-5" src={mba} alt="uni" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Master of Business Administration</h2>
            <p>Institute of Business Administration</p>
            <p>University of Dhaka</p>
            <p>Major in Finance</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-48 py-5" src={bsc} alt="uni" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bachelor of Science</h2>
            <p>Faculty of Mechanical Engineering</p>
            <p>Bangladesh University of Engineering and Technology</p>
            <p>Major in Mechanical Engineering</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-48 py-5" src={hsc} alt="uni" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Higher Secondary School Certificate</h2>
            <p>Science</p>
            <p>Notre Dame College</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-48 py-5" src={ssc} alt="uni" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Secondary School Certificate</h2>
            <p>Science</p>
            <p>Monipur High School</p>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default EducationPage;
