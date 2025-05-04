import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { auth } from '../../Auth/firebase.init';
import { AuthContext } from '../../Contexts/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [getEmail, setGetEmail] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const { signinAccount, } = use(AuthContext);
    const navigate = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;



        setErrorMessage('');
        setLoginSuccess(true);


        // Login Validion
        signinAccount(email, password)
            .then((result) => {

                // result.user.email === email ? toast.error('Already logged in!') : toast.success('Login Successfully! 🎉');
                setLoginSuccess(false);
               console.log(result);

                toast.success('Login Successfully! 🎉')
              
                setTimeout(()=>{
                    navigate('/')
                },1000)
                

            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setLoginSuccess(false);
            }
            )

    }//handleLogin

    const handleGoogle = () => {


        // Google login logic here
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoginSuccess(true);
                toast.success('Login Successfully! 🎉')
              
                setTimeout(()=>{
                    navigate('/')
                },1000)
            })
            .catch((error) => {
                setErrorMessage(error.message);
                toast.error('Login Failed! 😢');
            })
            .finally(() => {
                setLoginSuccess(false);
            })

    }




    const handleForgot = async () => {

        
        try {
            await sendPasswordResetEmail(auth, getEmail);
            setMessage("Password reset link sent! Check your email.");
        } catch (error) {
            setErrorMessage(error.message);
        }


    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-full lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-3xl font-bold text-center'>Log In</h3>
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" onChange={(e) => setGetEmail(e.target.value)} name='email' className="input" placeholder="Email" />
                            <label className="label" >Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a onClick={handleForgot} className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">{loginSuccess ? <span className="loading loading-spinner loading-md"></span> : 'Login'}</button>

                        </form>
                        {errorMessage && <p className='text-red-600 text-center'>{errorMessage}</p>}
                        {message && <p className='text-green-600 text-center'>{message}</p>}
                        <p>You don't have any account?
                            <Link to={'/register'}><span
                                className='text-blue-600 underline font-semibold'> Register Now</span>
                            </Link>
                        </p>
                        <p className='text-lg font-bold text-center'>Or</p>
                        {/* Google */}
                        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        {/* Facebook */}
                        <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                            <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                            Login with Facebook
                        </button>
                        <button className="btn bg-black text-white border-black">
                            <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" /></svg>
                            Login with X
                        </button>


                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;