import React from 'react';
import PhotoGrid from './PhotoGrid';

const DailySchedule= () => {
    
    const dailyPlanePhotos = [
        './../../public/tour/tour-1.png',
        './../../public/tour/tour-2.png',
        './../../public/tour/tour-3.png',
        './../../public/tour/tour-4.png',
        './../../public/tour/tour-5.png',
        './../../public/tour/tour-6.png',
      ];

    return (
        <div>
           <PhotoGrid title="Our Daily Plane" photos={dailyPlanePhotos} />
         
            
        </div>
    );
};

export default DailySchedule ;