import { NextResponse, NextRequest } from "next/server";


const ProtectedRoutes = [
    "/dashboard"
]

export async function middleware(request: NextRequest) {
    return NextResponse.next();
}