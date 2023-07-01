import React from 'react';
import img1 from '../../../../assets/icons/clock.svg'
import img2 from '../../../../assets/icons/marker.svg'
import img3 from '../../../../assets/icons/phone.svg'
const AppointmentDate = () => {

    const apointmentdata = [
        {
            header: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pris",
            icon: img1,
            bg: "bg-[#65C3C8]"
        },
        {
            header: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon: img2,
            bg: "bg-[#151D3A]"
        },
        {
            header: "Contact us now",
            description: "+000 123 456789",
            icon: img3,
            bg: "bg-[#65C3C8]"
        }
    ]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 justify-items-center'>

            {
                apointmentdata.map(appointmentTime =>
                    <div className="card w-full bg-base-100 shadow-xl my-5">
                        <div className={`card-body ${appointmentTime.bg}`}>
                            <div className='lg:flex block gap-2'>
                                <div>
                                    <img src={appointmentTime.icon} alt="" srcset="" />
                                </div>
                                <div>
                                    <h2 className="card-title text-white">{appointmentTime.header}</h2>
                                    <p className=' text-white'>{appointmentTime.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default AppointmentDate;