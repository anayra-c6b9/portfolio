import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Blogs from "./pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        loader: () => redirect("/profile"),
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "experience",
        Component: Experience,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "blog",
        Component: Blogs,
      },
    ],
  },
]);

export default router;
