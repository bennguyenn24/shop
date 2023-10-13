import { NextResponse } from "next/server";

import products from "@/data/products.json";

export async function GET() {
    // Database logic
    return NextResponse.json(products);
}
