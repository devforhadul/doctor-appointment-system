import React, { use } from "react";
import { Link, Navigate, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import siteLogo from "../../assets/Images/logo_love.jpeg";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, signOutuser } = use(AuthContext);

  console.log(user?.photoURL)

  const handleSignOut = () => {
    signOutuser()
      .then(() => {
        toast.success("Successfully SignOut");
        setTimeout(() => {
          Navigate("/log-in");
        }, 500);
      })
      .catch((error) => {
        toast.error("Failed to sign out. Please try again.", error);
      });

    /* Swal.fire({
      title: "Are you sure you want to sign out?",
      text: "You will be logged out from your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out"
    })
      .then((result) => {
        if (result.isConfirmed) {
          // User confirmed, now sign out

        }
      }); */
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar sticky top-0 bg-white z-50">
        <div className="basis-2/3 navbar-start mr-3 flex justify-between">
          {/* Logo */}
          <div className="">
            <Link to={"/"} className="flex items-center gap-1.5">
              <img className="w-10" src={siteLogo} alt="" />
              <p className="font-bold text-xl">Doctor Point</p>
            </Link>
          </div>
          {/* Nav menu */}
          <div>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-indigo-600 border-b-2" : ""} `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `${isActive ? "text-indigo-600 border-b-2" : ""} `
                  }
                >
                  Doctors
                </NavLink>
              </li>

              <li className={user || "hidden"}>
                <NavLink
                  to="/my-bookings"
                  className={({ isActive }) =>
                    `${isActive ? "text-indigo-600 border-b-2" : ""} `
                  }
                >
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `${isActive ? "text-indigo-600 border-b-2" : ""} `
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `${isActive ? "text-indigo-600 border-b-2" : ""} `
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* right side */}
        <div className="basis-1/3 navbar-end gap-2">
          {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
          {/* Emergencty Button */}
          <Link to={"/emergency"}>
            <button
              type="button"
              className="font-jakarta text-white bg-blue-700 hover:bg-blue-800 cursor-pointer font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Emergency
            </button>
          </Link>
          {/* Loin button */}
          {!user && (
            <Link to={"/log-in"}>
              <button
                type="button"
                className="ml-2 font-jakarta text-white bg-blue-700 hover:bg-blue-800 cursor-pointer font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          )}

          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {
                    user?.photoURL &&(
                      <img alt="profile_img" src={user?.photoURL} />
                    )
                  }
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/profile"}>
                    <p className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
                {user?.email === "forhadul75@gmail.com" && (
                  <Link to={"/dash"}>
                    <li>
                      <p>Admin Dashboard</p>
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          )}
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Navbar;
