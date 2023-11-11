import { NextRequest, NextResponse } from "next/server";

import products from "@/data/products.json";

export async function GET(req: NextRequest) {
    console.log("hit");
    // const productId = params.productId;
    // console.log(productId)

    // const product = products.filter(
    //     (product) => product.id === Number(productId)
    // )[0];

    return NextResponse.json(1);
}
