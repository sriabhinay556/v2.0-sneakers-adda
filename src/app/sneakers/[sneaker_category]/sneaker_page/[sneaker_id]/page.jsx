import React from 'react'
import getSneaker from '@/app/lib/getSneaker'

async function page({params}) {
   
    const { sneakerData, sneaker_img,sneaker_name } = await getSneaker(params.sneaker_id,params.sneaker_category);

    return (
      <>
        <p>sneaker page - /sneakers/{params.sneaker_category} / {params.sneaker_id}</p>
        <div className="flex justify-center mb-4">
        <img src={sneaker_img} alt="Sneaker Image" className="max-w-xs" />
        </div>
        <h1 className="text-xl font-bold text-center my-4 text-gray-100">{sneaker_name}</h1>
        <div className="flex overflow-x-auto">
        {sneakerData.map((sneaker, index) => (
            <div key={index} className="border border-gray-300 p-4 m-2 text-center w-48 h-auto bg-black shadow-lg flex-shrink-0">
            <p className="font-semibold text-blue-300">Size: {sneaker.sizeOption.presentation}</p>
            <p>Instant Ship Lowest Price: ${sneaker.instantShipLowestPriceCents.amount / 100}</p>
            <p>Last Sold Price: ${sneaker.lastSoldPriceCents.amount / 100}</p>
            <p className="text-xs mt-2 text-gray-500">Shoe Condition: {sneaker.shoeCondition.split('_').join(' ')}</p>
            <p className="text-xs text-gray-500">Box Condition: {sneaker.boxCondition.split('_').join(' ')}</p>
            </div>
        ))}
        </div>
  </>
    )
  
    
}

export default page