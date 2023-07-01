import React from 'react';

const OurServices = ({ourservice}) => {
    return (
        <div className="card w-full bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
                <img src={ourservice.images} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ourservice.header}</h2>
                <p>{ourservice.description}</p>
            </div>
        </div>
    );
};

export default OurServices;