import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import Blogs from './Pages/Blogs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Doctor from './Pages/Doctor.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>error</div>,
    Component: MainLayout,
    children: [
      {
        path: '/',
        loader: () => fetch('doctor.json'),
        element: <Home />,
      },
      {
        path: '/my-books',
        element: <MyBookings />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
      {
        path: '/doctor/:id',
        loader: () => fetch('../doctor.json'),
        element: <Doctor />,
      }
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
