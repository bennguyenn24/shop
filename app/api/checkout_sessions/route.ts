const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextRequest, NextResponse } from "next/server";

const DOMAIN_URL = process.env.HOST_URL;

export async function POST(request: NextRequest) {
    const cartItems = await request.json();

    const modifiedItems = cartItems.map((item: { stripePriceId: any; quantity: any; }) => ({
        price: item.stripePriceId,
        quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        line_items: modifiedItems,
        mode: "payment",
        success_url: `${DOMAIN_URL}/checkout/success`,
        cancel_url: `${DOMAIN_URL}/checkout/canceled`,
    });

    return NextResponse.json(session.url, { status: 201 });
}
