'use server'
import React, { Suspense } from 'react'
import Detail_Price from '@/app/server_components/Detail_Price';
import Image from 'next/image';
import Skeleton from './Skeleton_Price';
async function page({params}) {

    //const { sneakerData, sneaker_img,sneaker_name } = await getSneaker(params.sneaker_id,params.sneaker_category);

    const url = `https://ac.cnstrc.com/search/${params.sneaker_category}?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=78c62706-b971-46fb-beee-6ed7b4dab4d0&s=9&page=1&num_results_per_page=24&filters%5Bgender%5D=men&sort_by=relevance&sort_order=descending&fmt_options%5Bhidden_fields%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_fields%5D=gp_instant_ship_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_instant_ship_lowest_price_cents_3&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_3%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_3%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=1707884502717`
    const res = await fetch(url,  { next: { revalidate: 3600 } })
    const  static_shoe_data= res.json()
    const  sneakersJson = await static_shoe_data
  
    const sneaker_img = sneakersJson.response.results.find(s => s.data.id === params.sneaker_id).data.image_url;
    const sneaker_name = sneakersJson.response.results.find(s => s.data.id === params.sneaker_id).value;
   
    const sizes = Array.from({ length: 7 }, (_, i) => (i + 6).toFixed(1));
    return (
<>
    <div >
        <h1 className='text-white'>{sneaker_name}</h1>
        <Image src={sneaker_img} width={300} height={300} alt={sneaker_name} priority></Image>
        working on prices by using partial-prerendering...
        {/* {
            sizes.map((item)=>{
                return <div key={item} className='border border-gray-300 text-white hover:bg-gray-200 hover:text-black cursor-pointer'>
                    <p>Size: {item}</p>
                    <p>Instant Ship Price: </p> 
                    <Suspense fallback={<Skeleton/>}>
                        <Detail_Price props={params.sneaker_id} size={item}/>
                    </Suspense>
                </div>
            })
        } */}
    </div>
</>

    )
  
    
}

export default page