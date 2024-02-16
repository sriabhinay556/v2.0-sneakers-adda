'use server'
import React from 'react'

async function Detail_Price({props , size}) {
    const sneakerId = props
    const shoe_size = parseInt(size);
    
    const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`
    , {cache:'no-store'});

    if (!res.ok) throw new Error('Fetched failed sneaker data');
   // await new Promise(resolve => setTimeout(resolve, 2000));

    const sneakerData = await res.json();

    const filteredSneakerData = sneakerData.filter(sneaker => 
        sneaker.instantShipLowestPriceCents && sneaker.lastSoldPriceCents
    );
    
    const filteredSneaker = filteredSneakerData.find(sneaker =>
        sneaker.sizeOption.presentation === JSON.stringify(shoe_size) &&
        sneaker.shoeCondition === "new_no_defects" &&
        sneaker.boxCondition === "good_condition"
      );
    //console.log(filteredSneakerData)

      if (filteredSneaker) {
        const instantShipPrice = filteredSneaker.instantShipLowestPriceCents.amount / 100;
        return <p>${instantShipPrice}</p>;
      } else {
        return <p>no-stock</p>;
      }
      
    
    
   
    
}

export default Detail_Price