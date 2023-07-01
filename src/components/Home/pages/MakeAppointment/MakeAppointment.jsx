import React from 'react';
import doctor from '../../../../assets/images/doctor.png';
import './style.css';
const MakeAppointment = () => {
    return (
        <div className="hero appointment">
            <div className="hero-content flex-col lg:flex-row">
                <img alt="/" src={doctor} className="lg:w-2/4 w-full rounded-lg" />
                <div>
                    <h1 className="text-xl font-bold text-primary">Appointment</h1>
                    <h1 className="text-5xl font-bold text-white">Make an appointment Today!</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;