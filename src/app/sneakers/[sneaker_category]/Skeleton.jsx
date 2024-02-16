import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Skeleton() {
  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center animate-pulse">
        {[...Array(24).keys()].map(index => ( // Adjust the number of placeholders as needed
          <div key={index} className="border border-gray-600 p-2 m-2 text-center w-72 h-72 block ">
           {/* <div className="image-container h-70 bg-gray-300"></div> */}
            <h3 className="font-semibold bg-gray-700"></h3> 
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skeleton;
