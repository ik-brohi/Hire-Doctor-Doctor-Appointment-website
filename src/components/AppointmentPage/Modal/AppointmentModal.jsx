import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentModal = ({ diseasesData, selected,refetch }) => {
    const { user } = useContext(userContext);
    const { name, slots } = diseasesData;
    const handleUserAppointment = (e) => {
        e.preventDefault();
        const username = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const slot = e.target.slots.value;
        const date = e.target.date.value;

        const appointmentData = {
            username, 
            email,
            phone,
            slot,
            date,
            name
        }

 

        fetch('http://localhost:5000/appointmentcate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData)

        })
            .then(res => res.json())
            .then(result => {
                toast("Appointment Successful");
                refetch();
                console.log(result)
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <section className="dark:text-gray-100">

                        <form onSubmit={handleUserAppointment} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md ng-untouched ng-pristine ng-valid">
                            <h2 className="w-full text-3xl font-bold leading-tight text-black">{name}</h2>
                            <div>
                                <input name="date" type="text" readOnly defaultValue={selected ? format(selected, 'PP') : ""} className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-slate-300 text-black" />
                            </div>
                            <div>

                                <select name="slots" className='dark:bg-slate-300 text-black rounded py-3 w-full'>
                                    {slots?.map(slot => <option value={slot}>{slot}</option>)}
                                </select>

                            </div>

                            <div>
                                <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your name" className="block w-full p-2 rounded focus:outline-none focus:ring text-black focus:ring-opacity-25 focus:ring-blue-400 dark:bg-slate-300" />
                            </div>
                            <div>
                                <input name="phone" type="phone" placeholder="Your phone" className="block w-full p-2 rounded focus:outline-none text-black focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-slate-300" />
                            </div>
                            <div>
                                <input name="email" defaultValue={user?.email} type="email" placeholder="Your email" className="block w-full text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-slate-300" />
                            </div>

                            <div>
                             
                                <button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-gray-900 focus:ring-blue-400 hover:ring-blue-400 dark:text-white">Send</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AppointmentModal;