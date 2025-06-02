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
import axios from "axios";
import EnteryDash from "../Dashboard/EnteryDash";


const routers = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch(`${import.meta.env.VITE_S_URL}/doctors`),
        element: <Home />,
      },
      {
        path: '/doctors',
        loader: () => fetch(`${import.meta.env.VITE_S_URL}/doctors`),
        element: <Doctors></Doctors>
      },
      {
        path: '/doctor/:id',
        loader: ({params}) => fetch(`${import.meta.env.VITE_S_URL}/doctor/${params.id}`),
        element: <DoctorDetails></DoctorDetails>,
        errorElement: <p>Doctor not found</p>

      },
      {
        path: '/my-bookings',
        element: <PrivateRoute><MyBookings /></PrivateRoute>,
      },
      {
        path: '/blog',
        loader: () => fetch(`${import.meta.env.VITE_S_URL}/blog`),
        element: <Blogs></Blogs>,
      },
      {
        path: '/blog/:id',
        loader: ({params}) => fetch(`${import.meta.env.VITE_S_URL}/blog/${params.id}`),
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
        
        element: <EnteryDash></EnteryDash>
      },
      {
        path: 'appoinments',
        loader: ()=> axios.get(`${import.meta.env.VITE_S_URL}/appointment`),
        element: <PrivateRoute><Appointments></Appointments></PrivateRoute>
      },
      {
        path: 'add-doctor',
        element: <PrivateRoute><AddDoctor></AddDoctor></PrivateRoute>
      },
      {
        path: 'doctor-list',
        loader: ()=> axios.get(`${import.meta.env.VITE_S_URL}/doctors`),
        element: <PrivateRoute><DoctorList></DoctorList></PrivateRoute>
      }
      
    ]
  }

]);

export default routers;