import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../assets/banner1.jpg";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="font-bold text-4xl my-10 mx-auto text-center">
        My Projects
      </h1>
      <div>
        <h2 className="font-bold text-3xl my-5 text-center">The Blog Hub</h2>
        <Slider className="mx-auto text-center" {...settings}>
          <div className="mx-auto text-center">
            <img className="w-full mx-auto" src={blog1} alt="" />
          </div>
          <div className="mx-auto text-center">
            <img className="w-full mx-auto" src={blog2} alt="" />
          </div>
          <div className="mx-auto text-center">
            <img className="w-full mx-auto" src={blog3} alt="" />
          </div>
          <div className="mx-auto text-center">
            <img className=" w-full mx-auto" src={blog4} alt="" />
          </div>
        </Slider>
        <h3 className="text-2xl font-medium text-center my-10">
          An insightful blog collection. Users view recent blogs, comment, add
          to wishlist, and explore featured content. Authors can update blogs
          for continuous engagement.
        </h3>
        <h3 className="text-2xl font-medium mt-10">Features</h3>
        <ul className="list-disc">
            <li className="list-inside">Recent Blogs and Detailed View</li>
            <li>Interactive Comments Section</li>
            <li>Wishlist Feature</li>
            <li>Featured Blogs Section</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
