import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AddDoctors = () => {

    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const diseases = e.target.diseases.value;
        const file = e.target.file.file;
        console.log(email,password,file,diseases)
    }

    return (
        <div>
            <p>Add Doctors</p>

            <div className='flex justify-center my-10'>
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-black dark:text-gray-100">
                    <form onSubmit={handleLoginForm} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm">Email address</label>
                                <input type="email" required name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm">Name</label>
                                <input type="text" required name="name" id="password" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>

                            <select name="diseases" className="select bg-black w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400 select-bordered max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>

                            <input name="file" type="file" className="file-input file-input-bordered bg-black file-input-primary w-full max-w-xs" />

                        </div>
                        <button id="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">Add Doctor</button>
                    </form>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default AddDoctors;