import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../assets/banner1.jpg";
import tech1 from "../assets/tech1.png";
import tech2 from "../assets/tech2.png";
import tech3 from "../assets/tech3.png";
import tech4 from "../assets/tech4.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import nexus1 from "../assets/nexus1.png";
import nexus2 from "../assets/nexus2.png";
import nexus3 from "../assets/nexus3.png";
import nexus4 from "../assets/nexus4.png";
const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-[1440px] mx-auto px-10">
      <h1 className="font-bold text-4xl my-10 mx-auto text-center">
        My Projects
      </h1>
      {/* project 1 */}
      <div>
        <h2 className="font-bold text-3xl my-5 text-center">Tech Brand Shop</h2>
        <div className="shadow-2xl">
          <Slider className="mx-auto text-center" {...settings}>
            <div className="mx-auto text-center">
              <img className="w-full mx-auto" src={tech1} alt="" />
            </div>
            <div className="mx-auto text-center">
              <img className="w-full mx-auto" src={tech2} alt="" />
            </div>
            <div className="mx-auto text-center">
              <img className="w-full mx-auto" src={tech3} alt="" />
            </div>
            <div className="mx-auto text-center">
              <img className=" w-full mx-auto" src={tech4} alt="" />
            </div>
          </Slider>
        </div>
        <h3 className="text-xl italic text-gray-500 text-center my-10">
          Explore tech products from 6 brands. View brand details, product
          information, and manage individual carts. Users can add, update, and
          delete products for a personalized shopping experience.
        </h3>
        <h3 className="text-2xl font-medium my-10">
          The project named “Tech Brand Shop” facilitates users to look through
          technological and electronics products i.e. smartwatch, tablet etc. of
          6 popular brands(Samsung, Apple, Xiaomi, Google, Microsoft, Sony). The
          main features of the project are given below.
        </h3>
        <h3 className="text-2xl font-medium mt-10">Features</h3>
        <ul className="list-disc">
          <li className="list-inside">
            <span className="font-bold">Brands at a glance:</span> The project
            allows users to view all the brands offered by the shop in the
            homepage. They can click on a particular brand and browse the
            products of that brand.
          </li>
          <li className="list-inside">
            <span className="font-bold">Click to View Product Details:</span>{" "}
            The project allows users to view the details of a particular product
            by clicking "Details" button in any of the products in the brand
            page if they are logged in. Users can also see some advertisements
            of the brand and scroll through the ads in the page banner.
          </li>
          <li className="list-inside">
            <span className="font-bold">Add Product:</span> Any logged in users
            can go the the "Add Product" page and create a new product in the
            database by mentioning product details such as name, price, brand
            and other required fields.
          </li>
          <li className="list-inside">
            <span className="font-bold">Update Product:</span> Any logged in
            users can update any product by clicking the "update" button on the
            card of the products in brand page.
          </li>
          <li className="list-inside">
            <span className="font-bold">Individual Cart:</span> Logged in users
            can add product to their cart and go to "My Cart" to see their added
            products. They can also delete any product in the cart by pressing
            the "Delete" button.
          </li>
        </ul>
        <h3 className="text-2xl font-medium mt-10">Technologies Used</h3>
        <div className="space-y-5">
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Front-end</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=html,css,javascript,react" />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Back-end</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=express,mongodb" />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Authentication</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=firebase" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-5">
          <a className="link link-primary" href="https://github.com/smhasan-shahriar/tech-brand-shop-client-side">See Client Side Code</a> 
        </div>
        <div className="my-5">
          <a className="link link-primary" href="https://brand-shop-9b1a9.web.app/">Live Link</a> 
        </div>
      </div>
      {/* project 2 */}
      <div>
        <h2 className="font-bold text-3xl my-5 text-center">The Blog Hub</h2>
        <div className="shadow-2xl">
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
        </div>
        <h3 className="text-xl italic text-gray-500 text-center my-10">
        An insightful blog collection. Users view recent blogs, comment, add to wishlist, and explore featured content. Authors can update blogs for continuous engagement.
        </h3>
        <h3 className="text-2xl font-medium my-10">
        The project named “The Blog Hub” facilitates users to look through an insightful blog collection of different categories such as travel, food, lifestyle, business etc. The main features of the project are given below.
        </h3>
        <h3 className="text-2xl font-medium mt-10">Features</h3>
        <ul className="list-disc">
          
          <li className="list-inside">
            <span className="font-bold">Recent Blogs Glimpse:</span>{" "}
            The project allows users to view the six latest blogs written by the members in the homepage. They can click on the details button and view the detailed blog when the user is logged in.
          </li>
          <li className="list-inside">
            <span className="font-bold">Comment on Blogs:</span> The project allows users to comment on any blog except the one which is written by him/her. The users can also see the comments posted by other users.
          </li>
          <li className="list-inside">
            <span className="font-bold">Wishlist:</span> Any logged in user can add any blog to the wishlist by pressing the "Add to Wishlist" button on the blogs card on recent blogs section in homepage or in All Blogs page.
          </li>
          <li className="list-inside">
            <span className="font-bold">Update Blog: </span> The author of the blog has the option to update the blog if necessary.
          </li>
          <li className="list-inside">
            <span className="font-bold">Featured Blog: </span> Users can take a quick look at the 10 featured blog at the featured blog page. They can see the title of the blog and user name.
          </li>
        </ul>
        <h3 className="text-2xl font-medium mt-10">Technologies Used</h3>
        <div className="space-y-5">
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Front-end</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=html,css,javascript,react" />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Back-end</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=express,mongodb" />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Authentication</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=firebase" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-5">
          <a className="link link-primary" href="https://github.com/smhasan-shahriar/the-blog-hub-client-side">See Client Side Code</a> 
        </div>
        <div className="my-5">
          <a className="link link-primary" href="https://sensational-taffy-bb51aa.netlify.app/">Live Link</a> 
        </div>
      </div>
      {/* project 3 */}
      <div>
        <h2 className="font-bold text-3xl my-5 text-center">Nexus Asset Management</h2>
        <div className="shadow-2xl">
          <Slider className="mx-auto text-center" {...settings}>
            <div className="mx-auto text-center">
              <img className="w-full mx-auto" src={nexus1} alt="" />
            </div>
            <div className="mx-auto text-center">
              <img className="w-full mx-auto" src={nexus2} alt="" />
            </div>
            <div className="mx-auto text-center">
              <img className="w-full mx-auto" src={nexus3} alt="" />
            </div>
            <div className="mx-auto text-center">
              <img className=" w-full mx-auto" src={nexus4} alt="" />
            </div>
          </Slider>
        </div>
        <h3 className="text-xl italic text-gray-500 text-center my-10">
        A robust system for company asset management. Admins create/manage assets, users request assets. Dynamic user home, custom requests, profile updates, and efficient filtering.
        </h3>
        <h3 className="text-2xl font-medium my-10">
        The project named “Nexus Asset Management” is a robust asset management system for companies which facilitates admins of the company to create and manage asset while employees can request for assets and do a lot of relevant works. The main features of the project are given below.
        </h3>
        <h3 className="text-2xl font-medium mt-10">Features</h3>
        <ul className="list-disc">
          <li className="list-inside">
            <span className="font-bold">Dynamic Home for Users: </span> The project allows users to view relevant statistical information in their home page based on their role. Employees can see their request list, their custom request while admins can get real time view of the different statistics and charts related to assets and requests.
          </li>
          <li className="list-inside">
            <span className="font-bold">Custom Asset Request:</span>{" "}
            Employees can create a request for assets which are not yet available in the asset list of the company.
          </li>
          <li className="list-inside">
            <span className="font-bold">Profile Update:</span> Any logged in user can update their profile.
          </li>
          <li className="list-inside">
            <span className="font-bold">Asset & Request Filtering:</span>  The admin users can filter assets and request by users in the related pages.
          </li>
          <li className="list-inside">
            <span className="font-bold">Return Functionality:</span> Users can use any asset and if the asset is returnable they can return the asset back.
          </li>
        </ul>
        <h3 className="text-2xl font-medium mt-10">Technologies Used</h3>
        <div className="space-y-5">
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Front-end</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=html,css,javascript,react" />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Back-end</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=express,mongodb" />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <p className="font-bold">Authentication</p>
            </div>
            <div>
              <a>
                <img src="https://skillicons.dev/icons?i=firebase" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-5">
          <a className="link link-primary" href="https://github.com/smhasan-shahriar/nexus-asset-management-client-side">See Client Side Code</a> 
        </div>
        <div className="my-5">
          <a className="link link-primary" href="https://sparkly-parfait-a3fbdc.netlify.app/">Live Link</a> 
        </div>
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
