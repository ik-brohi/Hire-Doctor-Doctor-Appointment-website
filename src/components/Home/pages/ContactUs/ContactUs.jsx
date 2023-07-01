import React from 'react';

const ContactUs = () => {
    return (
        <div className='appointment'>
                 <div>
                    <h1 className='text-xl font-bold ml-5 text-[#35D8B8] text-center'>Contact Us</h1>
                    <p  className='text-2xl text-white font-bold text-center'>Stay Connected With Us</p>
                </div>
            <section className="p-6 w-full dark:text-gray-100">
	<form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid">
		
		<div>
			<label for="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-blue-400 focus:ring-blue-400 hover:ring-blue-400 text-white">Send</button>
		</div>
	</form>
</section>
        </div>
    );
};

export default ContactUs;