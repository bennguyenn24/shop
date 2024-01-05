const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextRequest, NextResponse } from "next/server";

const DOMAIN_URL = process.env.HOST_URL;

export async function POST(request: NextRequest) {
    try {
        const cartItems = await request.json();

        const modifiedItems = cartItems.map(
            (item: { stripePriceId: any; quantity: any }) => ({
                price: item.stripePriceId,
                quantity: item.quantity,
            })
        );

        const session = await stripe.checkout.sessions.create({
            line_items: modifiedItems,
            mode: "payment",
            automatic_tax: {
                enabled: true,
            },
            tax_id_collection: {
                enabled: true,
            },
            success_url: `${DOMAIN_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${DOMAIN_URL}/checkout/canceled`,
        });

        return NextResponse.json(session, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
