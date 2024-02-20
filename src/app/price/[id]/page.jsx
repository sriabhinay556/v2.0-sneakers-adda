'use client'
import React from 'react'

async function page({params}) {
    const sneakerId = params.id
    const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`
    , {cache:'no-store'})

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