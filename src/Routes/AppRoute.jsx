import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Doctors from "../Pages/Doctors";
import DoctorDetails from "../Components/DoctorComponent/DoctorDetails";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Components/BlogDetails";
import ContactUs from "../Pages/ContactUs";
import Emergency from "../Pages/Emergency";
import Profile from "../Components/Profile";
import Login from "../Pages/AuthPages/Login";
import Registation from "../Pages/AuthPages/Registation";
import DashBoard from "../Dashboard/DashBoard";
import Appointments from "../Dashboard/Appointments";
import AddDoctor from "../Dashboard/AddDoctor";
import DoctorList from "../Dashboard/DoctorList";


const routers = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('../doctor.json'),
        element: <Home />,
      },
      {
        path: '/doctors',
        loader: () => fetch('../doctor.json'),
        element: <Doctors></Doctors>
      },
      {
        path: '/doctor-details/:id',
        loader: () => fetch('../doctor.json'),
        element: <DoctorDetails></DoctorDetails>,
        errorElement: <p>Doctor not found</p>

      },
      {
        path: '/my-bookings',
        element: <PrivateRoute><MyBookings /></PrivateRoute>,
      },
      {
        path: '/blogs',
        loader: () => fetch('../blogs.json'),
        element: <Blogs />,
      },
      {
        path: '/blog/:id',
        loader: () => fetch('../blogs.json'),
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
      {
        path: '/emergency',
        element: <Emergency></Emergency>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/log-in',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registation></Registation>
      },
    ]
  },
  {
    path: '/dash',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        index: true,
        element: <p>Entry dashboard</p>
      },
      {
        path: 'appoinments',
        element: <PrivateRoute><Appointments></Appointments></PrivateRoute>
      },
      {
        path: 'add-doctor',
        element: <PrivateRoute><AddDoctor></AddDoctor></PrivateRoute>
      },
      {
        path: 'doctor-list',
        element: <PrivateRoute><DoctorList></DoctorList></PrivateRoute>
      }
      
    ]
  }

]);

export default routers;