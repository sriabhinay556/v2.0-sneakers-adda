import React from 'react';

async function Page({ params }) {
  // Check if params exist and has a valid endpoint
 
  // Fetch data based on the provided endpoint
  const res = await fetch('https://65c43452dae2304e92e25de9.mockapi.io/TestAPI/v1/users');
  const response = await res.json();

  return (
    <div>
      {response.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Page;
