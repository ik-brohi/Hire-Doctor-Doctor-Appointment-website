import React, { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { userContext } from '../context/AuthProvider';
import useToken from '../../Hooks/Hook';

const Login = () => {
    const { login } = useContext(userContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // jwt
    const [email, setEmail] = useState('');
    const [token] = useToken(email);
    if(token) {
        navigate(from, { replace: true });
    }
    // end jwt

    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then((result) => {

                const email = result.user.email;
                
                // jwt
                setEmail(email)

            }).catch((error) => {
                toast("User Not Found");
            })
    }



    return (
        <div className='flex justify-center my-10'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-400">Dont have account?
                    <Link to='/register' rel="noopener noreferrer" className="focus:underline hover:underline">Register here</Link>
                </p>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form onSubmit={handleLoginForm} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input type="email" required name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>

                            <input type="password" required name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                        </div>
                    </div>
                    <button id="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">Sign in</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;