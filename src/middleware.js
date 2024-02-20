import { NextResponse } from 'next/server';
import { pathToRegexp } from 'path-to-regexp';

export function middleware(request) {
    // Define the dynamic path pattern
    const pattern = '/sneakers/:sneaker_category/sneaker_page/:sneaker_id';

    // Create the regular expression for the path
    const regexp = pathToRegexp(pattern);

    // Test if the request path matches the pattern
    if (regexp.test(request.nextUrl.pathname)) {
        // Create a response object using NextResponse
        const response = NextResponse.next();
        
        // Set CORS headers
        response.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
        response.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Specify allowed request methods
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // Specify allowed headers
        
        // Return the modified response
        return response;
    }

    // Return undefined to continue with the default behavior for non-matching requests
    return undefined;
}
