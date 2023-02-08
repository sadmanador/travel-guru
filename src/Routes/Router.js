import { createBrowserRouter } from "react-router-dom";
import Hotels from "../Layouts/Hotels/Hotels";
import Main from "../Layouts/Main";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import HotelMap from "../Pages/Hotels_option/Hotel_map";
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
            path: "/booking",
            element: <Booking></Booking>,
          },
          {
            path: "/booking_calender",
            element: <Booking></Booking>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/hotels',
        element: <Hotels></Hotels>,
      }
    ],
  },
]);
