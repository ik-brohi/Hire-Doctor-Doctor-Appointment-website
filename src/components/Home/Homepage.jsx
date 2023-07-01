import React from 'react';
import AppointmentDate from './pages/appointmentDateTime/AppointmentDate';
import OurServices from './pages/ourServices/OurServices';
import Slider from './pages/Slider/Slider';
import img1 from '../../assets/images/cavity.png';
import img2 from '../../assets/images/fluoride.png';
import img3 from '../../assets/images/whitening.png';
import MakeAppointment from './pages/MakeAppointment/MakeAppointment';
import Testimonial from './pages/testimonial/Testimonial';
import ContactUs from './pages/ContactUs/ContactUs';
const Homepage = () => {

    const ourservices = [
        {
            _id: 1,
            images: img1,
            header: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            images: img2,
            header: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 3,
            images: img3,
            header: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]

    return (
        <div>
            <Slider></Slider>
            <AppointmentDate></AppointmentDate>
            <div className='my-5'>
                <h1 className='font-bold text-lg text-center text-[#35D8B8]'>OUR SERVICES</h1>
                <p className='font-bold text-lg text-center'>Services We Provide</p>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-1 justify-items-center my-5'>
                    {
                        ourservices.map(ourservice => <OurServices
                            key={ourservice._id}
                            ourservice={ourservice}
                        ></OurServices>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <MakeAppointment></MakeAppointment>
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold ml-5 text-[#35D8B8]'>Testimonial</h1>
                <p className='text-2xl ml-5'>What Our Patients says</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-1 justify-items-center my-5'>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                </div>
            </section>

            <section>
                <ContactUs></ContactUs>
            </section>
        </div>
    );
};

export default Homepage;