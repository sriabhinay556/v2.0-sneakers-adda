'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (  
    <div>
      <div className="flex justify-center items-center">
        <input 
          type="text" 
          placeholder="Search your favorite" 
          className="mr-4 py-1 px-2 border border-gray-400 rounded-lg text-sm bg-black text-white  focus:outline-none " 
          value={searchValue}
          onChange={handleInputChange}
        />
        <Link href={`/sneakers/${encodeURIComponent(searchValue)} shoes`}  className="py-1 px-2 bg-gray-700 text-gray-400 rounded-lg text-sm hover:bg-gray-700 hover:bg-gray-300 transition-colors duration-200 ease-in-out">
          
        🔍

        </Link>
      </div>
    </div>
  );
}

export default Search;
