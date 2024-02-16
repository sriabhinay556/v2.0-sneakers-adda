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
          className="mr-4 py-1 px-2 border border-gray-300 rounded-lg text-sm text-black" 
          value={searchValue}
          onChange={handleInputChange}

        />
        <Link href={`/sneakers/${searchValue+' shoes'}`} className="py-1 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
          Search
        </Link>
      </div>

     
    </div>
  );
}

export default Search;
