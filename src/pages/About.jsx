import React from "react";
import "./About.css";
import journey from "../assets/journey.jpg";
import project from "../assets/project.jpg";
import connect from "../assets/connect.jpg";

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-10 min-h-screen">
      <h1 className="font-bold text-4xl my-10 mx-auto text-center">About Me</h1>
      <section>
        <p>
          Hello! I'm <strong>S M Hasan Shahriar</strong>, a junior web developer
          with a passion for crafting digital experiences. Over the past months,
          I've immersed myself in the world of web development, building a solid
          foundation in key technologies.
        </p>

        <h2 className="font-bold mt-5">My Journey So Far</h2>

        <div className="flex items-center gap-4 flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img src={journey} alt="" />
          </div>
          <div className="lg:w-1/2">
            <p>
              I embarked on this exciting journey six months ago, diving into
              the realms of HTML, CSS, and JavaScript. As I honed my front-end
              skills, I quickly found myself captivated by the power of React,
              which has become my go-to library for crafting dynamic and
              interactive user interfaces.
            </p>
            <p>
              In parallel, my back-end journey led me to explore the world of
              server-side development using Express and the robust MongoDB for
              database management. The combination of these technologies has
              empowered me to bring my ideas to life and deliver seamless,
              end-to-end web solutions.
            </p>
          </div>
        </div>

        <h2 className="font-bold mt-5">My Project Highlights</h2>
        <div className="flex items-center gap-4 flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img src={project} alt="" />
          </div>
          <div className="lg:w-1/2">
            <p>
              Among my notable projects are <strong>The Blog Hub</strong>,{" "}
              <strong>Nexus Asset Management</strong>, and{" "}
              <strong>Tech Brand Shop</strong>. These projects not only showcase
              my technical abilities but also reflect my dedication to creating
              meaningful and innovative solutions.
            </p>
            <p className="mt-3">
              What fuels my passion for web development goes beyond just code.
              I'm inspired by the ever-evolving nature of technology and the
              limitless possibilities it offers to create impactful solutions. I
              believe in the power of continuous learning and the importance of
              staying curious in this dynamic field.
            </p>
          </div>
        </div>

        <h2 className="font-bold mt-5">Let's Connect</h2>

        <div className="flex items-center gap-4 flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img className="w-full" src={connect} alt="" />
          </div>
          <div className="lg:w-1/2">
            <p>
              I'm currently seeking opportunities to collaborate, learn, and
              contribute to exciting projects. Whether you're looking for a
              motivated team member or want to discuss the latest trends in web
              development, I'd love to connect!
            </p>

            <p>
              Feel free to explore my <a href="#">portfolio</a> and get in
              touch. Let's build something amazing together!
            </p>

            <p>
              <a href="#">Contact Me</a> | <a href="#">LinkedIn</a> |{" "}
              <a href="#">GitHub</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
