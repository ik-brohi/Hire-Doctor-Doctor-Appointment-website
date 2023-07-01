import React from 'react';

const Testimonial = () => {
    return (
        <div className='w-full'>
            <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12  dark:text-gray-100">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-black">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base  text-black">Full-stack developer</p>
		</div>
	</div>
</div>
        </div>
    );
};

export default Testimonial;