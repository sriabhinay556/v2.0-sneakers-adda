import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const sneakerId = params.id // params from above gives the routes
    const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`)
    const data = await res.json()
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');

    // Return the response with CORS headers and JSON data
    return new NextResponse(JSON.stringify({ prices: data }), {
        headers,
        status: 200,
        statusText: 'OK',
        contentType: 'application/json',
    });
    //return NextResponse.json({msg:'hello'})
} 