'use server'
import { NextResponse } from "next/server";
import { NextApiResponse } from 'next';
import { headers } from "next/headers";
export async function GET(request,{params}){
   // console.log('hello')
    let data
    try {
        const sneakerId = params.id // params from above gives the routes
        const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`
        , {   method: 'GET', // Specify the method
        mode: 'cors', // This should be 'cors' for CORS requests. Use 'no-cors' only if you understand the limitations.
        cache: 'no-store', // Tells the browser not to cache the response. })
        })
        data = await res.json()
        // const headers = new Headers(request.headers);
        // headers.set('Access-Control-Allow-Origin', '*');
       //console.log("headers: " , headers())
      
    }
    catch (error) {
        console.log(error)
    }
    // Return the response with CORS headers and JSON data
    return new NextResponse(JSON.stringify({ prices: data }), {
        headers,
        status: 200,
        statusText: 'OK',
        contentType: 'application/json',
    });
    // return NextResponse.json({msg:'hello'})
} 