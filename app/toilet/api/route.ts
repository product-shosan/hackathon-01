import { NextResponse } from "next/server";

export async function GET () {
    const response = await fetch('http://192.168.13.26:8000/status');
    return NextResponse.json(response)
}