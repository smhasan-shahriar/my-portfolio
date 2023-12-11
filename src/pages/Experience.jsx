import React from "react";
import developer from "../assets/developer.jpeg";

const Experience = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-10 min-h-screen">
      <h1 className="font-bold text-4xl my-10 mx-auto text-center">
        My Experience
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={developer} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Apprentice Web Developer</h2>
          <p className="ml-2 font-medium">Programming Hero</p>
          <p className="ml-2 font-medium">Practice Projects:</p>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Skilled Required</th>
                  <th>Feature</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>1</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">Flower Shop</div>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <img
                      className="w-48"
                      src="https://skillicons.dev/icons?i=html,css"
                      alt="html"
                    />
                  </td>
                  <td>Basic Landing Page</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">Gamer Zone</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      className="w-48"
                      src="https://skillicons.dev/icons?i=html,css"
                      alt="html"
                    />
                  </td>
                  <td>Responsive Landing Page</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">Summer Sale</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      className="w-72"
                      src="https://skillicons.dev/icons?i=html,css,javascript"
                      alt="html"
                    />
                  </td>
                  <td>Responsive, DOM Manipulation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
