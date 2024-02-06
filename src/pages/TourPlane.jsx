import React from 'react';

const TourPlane = () => {

    return (
        <div className='bg-slate-300'>
            <h1 className='text-2xl font-bold'> Tour Plane  </h1>
            <div className='max-w-xl  h-fullrounded-sm p-2 mx-auto hover:cursor-zoom-in' >
                <img className='rounded-sm' src="/public/schedule/tour-1.png" alt="" />
            </div>
            <div className='max-w-xl  h-fullrounded-sm p-2 mx-auto ' >
                <img className='rounded-sm' src="/public/schedule/tour-2.png" alt="" />
            </div>
            <div className='max-w-xl  h-fullrounded-sm p-2 mx-auto ' >
                <img className='rounded-sm' src="/public/schedule/tour-3.png" alt="" />
            </div>
            <div className='max-w-xl  h-fullrounded-sm p-2 mx-auto ' >
                <img className='rounded-sm' src="/public/schedule/tour-4.png" alt="" />
            </div>
            <div className='max-w-xl  h-fullrounded-sm p-2 mx-auto ' >
                <img className='rounded-sm' src="/public/schedule/tour-5.png" alt="" />
            </div>
            <div className='max-w-xl  h-fullrounded-sm p-2 mx-auto ' >
                <img className='rounded-sm' src="/public/schedule/tour-6.png" alt="" />
            </div>

        </div>
    );
};

export default TourPlane;