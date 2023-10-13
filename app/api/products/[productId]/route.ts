import { NextRequest, NextResponse } from "next/server";

import products from "@/data/products.json";

export async function GET(
    req: NextRequest,
    { params }: { params: { productId: string } }
) {
    const productId = params.productId;

    const product = products.filter(
        (product) => product.id === Number(productId)
    )[0];

    return NextResponse.json(product);
}
