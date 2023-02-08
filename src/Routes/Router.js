import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Hotels from "../Layouts/Hotels/Hotels";
import Main from "../Layouts/Main";
import Profile from "../Layouts/Profile";
import Calender from "../Pages/Booking/Calender";
import Location from "../Pages/Booking/Location";
import Login from "../Pages/manage_user/Login/Login";
import Register from "../Pages/manage_user/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Location></Location>,
          },
          {
            path: "/calender",
            element: <Calender></Calender>,
          },
        ],
      },
      {
        path: '/',
        element: <Profile></Profile>,
        children: [
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
        ]
      },
      {
        path: "/hotels",
        element: <Hotels></Hotels>,
      },
    ],
  },
]);
