import { unstable_noStore } from "next/cache";
import getAllSneakers from "./getAllSneakers"

async function getSneaker(sneakerId, sneaker_category) {
    // unstable_noStore();
    const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`);

    if (!res.ok) throw new Error('Fetched failed sneaker data');
    
    const sneakersData =  getAllSneakers(sneaker_category);
    const  sneakersJson = await sneakersData
    //console.log(JSON.stringify(sneakersJson))

    const sneaker_img = sneakersJson.response.results.find(s => s.data.id === sneakerId).data.image_url;
    const sneaker_name = sneakersJson.response.results.find(s => s.data.id === sneakerId).value;
    const sneakerData = await res.json();

    return { sneakerData, sneaker_img, sneaker_name};
}

export default getSneaker;
