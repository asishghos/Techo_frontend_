import React, { useState, useEffect } from 'react';

const MapComponent = () => {
  const latitude = 28.476344;
//   28.476344, 77.191747
  const longitude = 77.191747;
  
  return (
    <div className="mt-8 rounded-xl overflow-hidden border border-gray-700">
      <iframe
        title="Office Location"
        width="100%"
        height="200"
        frameBorder="0"
        className="w-full h-48"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`}
      />
      <div className="p-2 bg-gray-900/50 text-center">
        <a 
          href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          View Larger Map
        </a>
      </div>
    </div>
  );
};
export {MapComponent};