import React from 'react';

const PhotoGrid = ({ title, photos }) => {
  return (
    <>
      <h1 className='text-3xl font-bold mt-5'>{title}</h1>
      <div className="justify-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4 mx-auto">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
    </>
  );
};

export default PhotoGrid;
