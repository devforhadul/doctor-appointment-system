import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import BlogDetails from './Components/BlogDetails.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import DashBoard from './Dashboard/DashBoard.jsx'
import './index.css'
import MainLayout from './Layouts/MainLayout.jsx'
import Login from './Pages/AuthPages/Login.jsx'
import Registation from './Pages/AuthPages/Registation.jsx'
import Blogs from './Pages/Blogs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Error from './Pages/Error.jsx'
import Home from './Pages/Home.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import Doctors from './Pages/Doctors.jsx'
import DoctorDetails from './Components/DoctorComponent/DoctorDetails.jsx'
import Emergency from './Pages/Emergency.jsx'
import Profile from './Components/Profile.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error></Error>,
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
      {
        path: '/dash',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
