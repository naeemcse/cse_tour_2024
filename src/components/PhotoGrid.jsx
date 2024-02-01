import React from "react";

const PhotoGrid = ({ title, photos }) => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold font-primary mb-3">{title}</h1>
      <div className="justify-center grid grid-cols-2 md:grid-cols-4  gap-4 p-4 mx-auto">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-56 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
