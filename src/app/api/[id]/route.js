import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    let data, errorMessage;

    try {
        const sneakerId = params.id; // params from above gives the routes
        const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`, { cache: "no-store" });

        // Check if the response was ok (status in the range 200-299)
        if (!res.ok) {
            // Throw an error with response status to be caught in the catch block
            throw new Error(`API request failed with status: ${res.status}`);
        }

        data = await res.json();
    } catch (error) {
        console.error(error);
        errorMessage = error.message; // Store error message to include in the response
    }

    // Include the error message in the response if there was an error
    return new NextResponse(JSON.stringify({ prices: data, dummymessage: "data from route.js", error: errorMessage }));
}
