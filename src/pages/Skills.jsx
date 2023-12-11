import React from "react";

const Skills = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-10">
      <h1 className="font-bold text-4xl my-10 mx-auto text-center">
        My Skills
      </h1>
      <div className="space-y-5">
          <div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="p-10 w-48"
                  src="https://skillicons.dev/icons?i=html,css"
                  alt="html"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">HTML/CSS</h2>
                <li className="list-inside">
                Semantic HTML5 markup, ensuring accessibility and SEO best practices
                </li>
                <li className="list-inside">
                Proficient in creating responsive web designs for various screen sizes and devices
                </li>
                <li className="list-inside">
                In-depth knowledge of CSS Grid and Flexbox layouts for efficient page structure
                </li>
                <li className="list-inside">
                Web font integration and optimization for better typography
                </li>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="p-10 w-48"
                  src="https://skillicons.dev/icons?i=javascript"
                  alt="html"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">JavaScript</h2>
                <li className="list-inside">
                ES6 and modern JavaScript features
                </li>
                <li className="list-inside">
                Asynchronous programming with Promises and async/await
                </li>
                <li className="list-inside">
                DOM manipulation and event handling
                </li>
                <li className="list-inside">
                Client-side frameworks: React.js
                </li>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="p-10 w-48"
                  src="https://skillicons.dev/icons?i=react"
                  alt="html"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">React</h2>
                <li className="list-inside">
                Component-based architecture
                </li>
                <li className="list-inside">
                State management with hooks
                </li>
                <li className="list-inside">
                React Router for navigation
                </li>
                <li className="list-inside">
                Styled Components or other styling approaches in React
                </li>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="p-10 w-48"
                  src="https://skillicons.dev/icons?i=express"
                  alt="html"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Express.js</h2>
                <li className="list-inside">
                Building RESTful APIs
                </li>
                <li className="list-inside">
                Middleware usage for authentication and validation
                </li>
                <li className="list-inside">
                Routing and controllers
                </li>
                <li className="list-inside">
                Error handling and middleware customization
                </li>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="p-10 w-48"
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="html"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">MongoDB</h2>
                <li className="list-inside">
                Familiarity with MongoDB Atlas for cloud-based database hosting.
                </li>
                <li className="list-inside">
                CRUD operations using the MongoDB Node.js driver
                </li>
                <li className="list-inside">
                Introduction to MongoDB's Aggregation Pipeline for advanced data processing.
                </li>
                <li className="list-inside">
                Configuring authentication mechanisms (user roles and permissions) for secure access to the database.
                </li>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
