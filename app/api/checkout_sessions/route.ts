const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

const DOMAIN_URL = process.env.HOST_URL;

export async function POST(request: NextRequest) {
    const body = await request.json();

    // Map through your cart items and return an array of objects containing priceId and quantity

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: "price_1Nf7vDAbUXjP2ReYleu5QF62",
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `${DOMAIN_URL}?success=true`,
        cancel_url: `${DOMAIN_URL}?canceled=true`,
    });

    return NextResponse.json(session.url, { status: 201 });
}
