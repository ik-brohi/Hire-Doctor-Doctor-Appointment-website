import React from 'react';
import sliderImage from '../../../../assets/images/chair.png';
import './style.css'
const Slider = () => {

  return (
    <div className="hero min-h-screen slide">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={sliderImage} alt='/' className="lg:max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;