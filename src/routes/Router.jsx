import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import EducationPage from "../pages/education/EducationPage";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/projects",
            element: <Projects />
        },
        {
            path: "/skills",
            element: <Skills />
        },
        {
          path: "/education",
          element: <EducationPage />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ],
    },
  ]);

export default router;