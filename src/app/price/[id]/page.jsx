'use client'
import React from 'react'

async function page({params}) {
    const sneakerId = params.id
    const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`, {
        method: 'GET', // Specify the method
        mode: 'cors', // This should be 'cors' for CORS requests. Use 'no-cors' only if you understand the limitations.
        cache: 'no-store', // Tells the browser not to cache the response.
      });
      

   if (!res.ok) throw new Error('Fetched failed sneaker data');
   

    const sneakerData = await res.json();


  return (
    <div>page - /price/{params.id}
    <div>
        {
            JSON.stringify(sneakerData)
        }
    </div>
    </div>
  )
}

export default page