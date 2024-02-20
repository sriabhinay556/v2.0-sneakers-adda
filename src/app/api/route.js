import { NextResponse } from "next/server"

export async function GET(request){
    console.log('hi')
    return NextResponse.json({message: 'hello'})
}