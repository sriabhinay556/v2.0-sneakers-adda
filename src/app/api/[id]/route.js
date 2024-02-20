
import { NextResponse } from "next/server";
import { NextApiResponse } from 'next';
import { headers } from "next/headers";
export async function GET(request,{params}){
    let data
    try {
        
        const sneakerId = params.id // params from above gives the routes
        const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`
        ,{cache: "no-store"})
        data = await res.json()
        if(data.ok){
            console.log(data)
        }
        else{
            throw new Error('didnt fetch at route.js')
        }
    }
    catch (error) {
        console.log(error)
    }
    // Return the response with CORS headers and JSON data
    return new NextResponse(JSON.stringify({ prices: data }));
    // return NextResponse.json({msg:'hello'})
} 