
import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { ref, set } from 'firebase/database';
import { database } from '../../Auth/firebase.init';


const Registation = () => {

    const [errorMessage, setErrorMessage] = useState('');


    const { createAccount } = use(AuthContext);


    const handleRegistaton = (e) => {
        e.preventDefault();
        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }


        createAccount(email, password)
            .then((result) => {

                const user = result.user;
                // You can now use the user object to get user details
                console.log(user);
                // alert('Registration Successful!');
                // // Redirect to home page after successful registration
                // window.location.href = '/log-in';

                set(ref(database, 'users/' + fullName), {
                    username: fullName,
                    email: email,
                    password: password
                });

            }).catch((error) => {
                setErrorMessage(error.message);
            })



    }


    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-5xl shrink-0">
                    <div className="card-body">
                        <h3 className='text-3xl font-bold text-center'>Registration Now</h3>
                        <form onSubmit={handleRegistaton} className="fieldset">

                            <label className="label">Full Name</label>
                            <input type="text" name="fullName" className="input" placeholder="Full Name" />

                            <label className="label">Email</label>
                            <input type="email" required name="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" required name="password" className="input" placeholder="Password" />

                            <label className="label">Confirm Password</label>
                            <input type="password" required name="confirmPassword" className="input" placeholder="Confirm Password" />

                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        </form>

                        <p>Already have an account?
                            <Link to={'/log-in'}>
                                <span className='text-blue-600 font-semibold'> Login</span>
                            </Link>
                        </p>

                        {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Registation;