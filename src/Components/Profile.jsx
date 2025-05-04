import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Profile = () => {
  const { user, signOutuser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutuser()
      .then(() => Swal.fire("Logged out!", "You have been signed out.", "success"))
      .catch(() => Swal.fire("Error", "Something went wrong while signing out.", "error"));
  };

  const handleEditProfile = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Update Profile',
      html:
        `<input id="swal-name" class="swal2-input" placeholder="Full Name" value="${user?.displayName || ''}">` +
        `<input id="swal-photo" class="swal2-input" placeholder="Photo URL" value="${user?.photoURL || ''}">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          displayName: document.getElementById('swal-name').value,
          photoURL: document.getElementById('swal-photo').value,
        };
      }
    });

    if (formValues) {
      try {
        await updateProfile(user, {
          displayName: formValues.displayName,
          photoURL: formValues.photoURL,
        });
        Swal.fire("Updated!", "Your profile has been updated.", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to update profile.", error);
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full mb-4"
        src={user?.photoURL || 'https://i.ibb.co/yR8bt7W/default-user.png'}
        alt={user?.displayName || 'User'}
      />
      <h2 className="text-2xl font-semibold">{user?.displayName || 'No Name Provided'}</h2>
      <p className="text-gray-600">{user?.email}</p>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handleEditProfile}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Edit Profile
        </button>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
