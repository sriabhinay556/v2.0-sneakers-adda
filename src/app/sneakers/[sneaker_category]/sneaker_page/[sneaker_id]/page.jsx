'use server'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CartButton from '@/app/client_components/CartButton';
async function page({ params }) {

    //const { sneakerData, sneaker_img,sneaker_name } = await getSneaker(params.sneaker_id,params.sneaker_category);

    const url = `https://ac.cnstrc.com/search/${params.sneaker_category}?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=78c62706-b971-46fb-beee-6ed7b4dab4d0&s=9&page=1&num_results_per_page=24&filters%5Bgender%5D=men&sort_by=relevance&sort_order=descending&fmt_options%5Bhidden_fields%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_fields%5D=gp_instant_ship_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_instant_ship_lowest_price_cents_3&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_3%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_3%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=1707884502717`
    // const res = await fetch(url, { next: { revalidate: 3600 } })
        const res = await fetch(url)
    const static_shoe_data = res.json()
    const sneakersJson = await static_shoe_data

    const sneaker_img = sneakersJson.response.results.find(s => s.data.id === params.sneaker_id).data.image_url;
    const sneaker_name = sneakersJson.response.results.find(s => s.data.id === params.sneaker_id).value;
    let sneaker_price = sneakersJson.response.results.find(s => s.data.id === params.sneaker_id).data.retail_price_cents;
    sneaker_price = sneaker_price / 100
    const release_year = sneakersJson.response.results.find(s => s.data.id === params.sneaker_id).data.release_date_year;
    const sneaker_data = {sneaker_img, sneaker_name, sneaker_price}

    return (
        <>
            <div className="flex flex-col  justify-center space-y-4">
            <Link href={`/sneakers/${params.sneaker_category}`} className="text-gray-600 rounded-md hover:text-gray-200 transition duration-150 ease-in-out lg:mx-20 mt-7 px-5">
                        ← 
                        
            </Link>
            <div className="text-center">
                    <Image src={sneaker_img} width={300} height={300} alt={sneaker_name} priority className="mx-auto" />
                    <h1 className="text-4xl font-bold text-white p-5">{sneaker_name}</h1>
            </div>
            <div className='flex justify-center items-center'>
                    <p className="text-xl text-white">Retail Price: ${sneaker_price}</p>
                    <CartButton props={sneaker_data}></CartButton>
                    
            </div> 
            {release_year && <p className="text-sm text-gray-400 flex justify-center">Released date: {release_year}</p>}                   

            </div>
        </>


    )


}

export default page