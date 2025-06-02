import React, { use, useEffect, useState } from "react";
import BookedCard from "../Components/BookedCard";
import { Link, useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

const MyBookings = () => {
  const [displayBooked, setDisplayBooked] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = use(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_S_URL}/appointment?email=${user?.email}`)
        .then((res) => {
          setDisplayBooked(res.data);
          
        })
        .catch((err) => {
          console.error("Error fetching applications:", err);
        });
    }
  }, [user]);

 

  const handleDelete = (id) => {
    alert("Are you sure?");
    toast.success("Your appointment has been cancelled successfully.");
  };

  return (
    <div className="w-11/12 mx-auto">
      {displayBooked.length === 0 ? (
        <>
          <div className="my-8 p-15">
            <p className="text-center text-2xl font-bold my-5 text-gray-600">
              You Have not Booked any appointment yet
            </p>
            <p className="text-center px-10 text-gray-600 my-3">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
            <div className="text-center">
              <button
                onClick={() => navigate("/")}
                className="btn rounded-sm bg-blue-700 text-white mt-5"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="my-4">
            <div className="breadcrumbs text-sm mb-3">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <a className={pathname == "/my-bookings" ? "border-b" : ""}>
                    my-books
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="text-xl font-medium">My Appointments</h2>
            <hr className="text-gray-200  my-2  border-1" />
          </div>
        </>
      )}

      {displayBooked.map((booked) => (
        <BookedCard
          key={booked.id}
          booked={booked}
          handleDelete={handleDelete}
        />
      ))}

      <Toaster></Toaster>
    </div>
  );
};

export default MyBookings;
