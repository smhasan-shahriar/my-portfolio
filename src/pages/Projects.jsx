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
        <h2 className="font-bold text-3xl my-5 text-center">Tech Brand Shop</h2>
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
        <h3 className="text-xl italic text-gray-500 text-center my-10">
        Explore tech products from 6 brands. View brand details, product information, and manage individual carts. Users can add, update, and delete products for a personalized shopping experience.
        </h3>
        <h3 className="text-2xl font-medium my-10">
          The project named “Tech Brand Shop” facilitates users to look through
          technological and electronics products i.e. smartwatch, tablet etc. of
          6 popular brands(Samsung, Apple, Xiaomi, Google, Microsoft, Sony). The
          main features of the project are given below.
        </h3>
        <h3 className="text-2xl font-medium mt-10">Features</h3>
        <ul className="list-disc">
          <li className="list-inside"><span className="font-bold">Brands at a glance:</span> The project allows users to view all the brands offered by the shop in the homepage. They can click on a particular brand and browse the products of that brand.</li>
          <li className="list-inside"><span className="font-bold">Click to View Product Details:</span> The project allows users to view the details of a particular product by clicking "Details" button in any of the products in the brand page if they are logged in. Users can also see some advertisements of the brand and scroll through the ads in the page banner.</li>
          <li className="list-inside"><span className="font-bold">Add Product:</span> Any logged in users can go the the "Add Product" page and create a new product in the database by mentioning product details such as name, price, brand and other required fields.</li>
          <li className="list-inside"><span className="font-bold">Update Product:</span> Any logged in users can update any product by clicking the "update" button on the card of the products in brand page.</li>
          <li className="list-inside"><span className="font-bold">Individual Cart:</span> Logged in users can add product to their cart and go to "My Cart" to see their added products. They can also delete any product in the cart by pressing the "Delete" button.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
/*
**[Client Side Link](https://github.com/smhasan-shahriar/nexus-asset-management-client-side)**
<br/>
**[Sever Side Link](https://github.com/smhasan-shahriar/nexus-asset-management-server-side)**
<br/>
**[Live Link](https://sparkly-parfait-a3fbdc.netlify.app/)**

**[Client Side Link](https://github.com/smhasan-shahriar/tech-brand-shop-client-side)**
<br/>
**[Sever Side Link](https://github.com/smhasan-shahriar/tech-brand-shop-server-side)**
<br/>
**[Live Link](https://brand-shop-9b1a9.web.app/)**
**[Client Side Link](https://github.com/smhasan-shahriar/the-blog-hub-client-side)**
<br/>
**[Sever Side Link](https://github.com/smhasan-shahriar/the-blog-hub-server-side)**
<br/>
**[Live Link](https://brand-shop-9b1a9.web.app/)**
*/
