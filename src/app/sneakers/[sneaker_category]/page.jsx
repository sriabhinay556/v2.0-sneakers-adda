import React, { Suspense } from 'react';
import Link from 'next/link';
import NotFound from './not-found';
import Image from 'next/image';
import { unstable_noStore } from 'next/cache';
const convertToUSD = priceCents => (priceCents / 100).toFixed(2);

async function getAllSneakers(params){
  
    const url = `https://ac.cnstrc.com/search/${params}?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=78c62706-b971-46fb-beee-6ed7b4dab4d0&s=9&page=1&num_results_per_page=24&filters%5Bgender%5D=men&sort_by=relevance&sort_order=descending&fmt_options%5Bhidden_fields%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_fields%5D=gp_instant_ship_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_instant_ship_lowest_price_cents_3&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_3%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_3%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=1707884502717`;
    unstable_noStore();
    const res = await fetch(url)
    
    if(!res.ok) throw new Error('Data not fetched!')
    const data = res.json()
    return data
}
async function Page({ params }) {
    const sneakersData = await getAllSneakers(params.sneaker_category.toString())
    if(sneakersData.response.result_sources.token_match.count == 0){
        return <NotFound/>
    }
   
    return (
      <div className="text-center">
        {!sneakersData ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-center">
            {sneakersData?.response?.results.map(result => (
              <Link href={`${params.sneaker_category.toString()}/sneaker_page/${result.data.id}`} key={result.data.id} className="border border-gray-300 p-2 m-2 text-center w-72 block hover:bg-gray-200 hover:text-black cursor-pointer">
                <h3 className="font-semibold">{result.data.slug}</h3>
                <div className="image-container h-70">
                  <Image src={result.data.image_url} alt={result.data.slug} layout="responsive" width={300} height={500} priority/>
                </div>
                <p>Retail Price: ${convertToUSD(result.data.retail_price_cents)}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
    
}

export default Page;
