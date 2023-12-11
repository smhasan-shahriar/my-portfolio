import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import EducationPage from "../pages/education/EducationPage";
import About from "../pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
        }
      ],
    },
  ]);

export default router;