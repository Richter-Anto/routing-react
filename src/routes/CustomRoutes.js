import React from "react";
import { useRoutes } from "react-router-dom";
import MyAccount from "../components/Auth/MyAccount";
import Profile from "../components/Auth/Profile";
import Users from "../components/Auth/Users";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";

const CustomRoutes = () => {
  let JspRoutes = useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/users",
      element: <Users />,
      children: [
        {
          path: "/users/profile",
          element: <Profile />,
        },
        {
          path: "/users/myaccount",
          element: <MyAccount />,
        },
      ],
    },
  ]);
  return JspRoutes;
};

export default CustomRoutes;
