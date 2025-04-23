import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import Blogs from './Pages/Blogs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Doctor from './Pages/Doctor.jsx'
import Error from './Pages/Error.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error></Error>,
    Component: MainLayout,
    children: [
      {
        path: '/',
        loader: () => fetch('../doctor.json'),
        element: <Home />,
      },
      {
        path: '/my-books',
        element: <MyBookings />,
      },
      {
        path: '/blogs',
        loader: () => fetch('../blogs.json'),
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
        errorElement: <>
          <div className='w-11/12 mx-auto'>
            <div className='bg-white rounded-2xl space-y-3 p-5 my-8'>

              <p className="text-center text-2xl font-bold my-5 text-black">No Doctor Found!!</p>
              <p className="text-center px-10 text-gray-600 my-3">
                No Doctor Found with this ID. Please check the ID and try again.
              </p>
  
              <div className='text-center'>
                <Link to='/'><button className='btn rounded-sm bg-blue-700 text-white mt-5'>View all Doctor</button></Link>
              </div>
            </div>
          </div>
        </>,
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
