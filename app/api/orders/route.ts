import { prisma } from "@/db/script";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function POST(request: NextRequest) {
    const body = await request.json();

    const user = await currentUser();

    if (!user) {
        return NextResponse.json("Not Authorized", { status: 401 });
    }

    const userId = user.id;

    const orderId = uuidv4();

    const modifiedCartItems = body.cart.map((cartItem: CartItem) => ({
        quantity: cartItem.quantity,
        productId: cartItem.id,
    }));

    console.log(modifiedCartItems)
    const userOrder = await prisma.order.create({
        data: {
            id: orderId,
            user_id: userId,
            cart_items: {
                create: modifiedCartItems,
            },
            total_price: body.total_price,
            checkout_session: body.checkout_session
        },
    });

    return NextResponse.json(userOrder, { status: 201 });
}
