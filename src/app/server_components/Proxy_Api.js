'use server'
async function Proxy_Api(sneakerId) {
  try{   
  const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`
    , {cache:'no-store'});

    if (!res.ok) throw new Error('Fetched failed sneaker data');

    const sneakerData = await res.json();
    sneakerData.setHeader('Access-Control-Allow-Origin', '*');

    return sneakerData;

  }catch (error) {
   console.log({ message: error.message });
  }
}

export default Proxy_Api