import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import "./index.css";
import routers from "./Routes/AppRoute.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     errorElement: <Error></Error>,
//     Component: MainLayout,
//     children: [
//       {
//         index: true,
//         path: '/',
//         loader: () => fetch('../doctor.json'),
//         element: <Home />,
//       },
//       {
//         path: '/doctors',
//         loader: () => fetch('../doctor.json'),
//         element: <Doctors></Doctors>
//       },
//       {
//         path: '/doctor-details/:id',
//         loader: () => fetch('../doctor.json'),
//         element: <DoctorDetails></DoctorDetails>,
//         errorElement: <p>Doctor not found</p>

//       },
//       {
//         path: '/my-bookings',
//         element: <PrivateRoute><MyBookings /></PrivateRoute>,
//       },
//       {
//         path: '/blogs',
//         loader: () => fetch('../blogs.json'),
//         element: <Blogs />,
//       },
//       {
//         path: '/blog/:id',
//         loader: () => fetch('../blogs.json'),
//         element: <BlogDetails></BlogDetails>
//       },
//       {
//         path: '/contactus',
//         element: <ContactUs />,
//       },
//       {
//         path: '/emergency',
//         element: <Emergency></Emergency>
//       },
//       {
//         path: '/profile',
//         element: <PrivateRoute><Profile></Profile></PrivateRoute>
//       },
//       {
//         path: '/log-in',
//         element: <Login></Login>
//       },
//       {
//         path: '/register',
//         element: <Registation></Registation>
//       },
//     ]
//   },
//   {
//     path: '/dash',
//     element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
//   }

// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>
  </StrictMode>
);
