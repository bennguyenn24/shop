import { prisma } from "@/db/script";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function POST(request: NextRequest) {
    const body = await request.json();

    // create a new user order : matches order table
    // return the order # confirmation number generated
    // store orderId as id
    // grab our cart
    // after we grab our cart, make the calculations for total

    const user = await currentUser();

    // Handle cases where user is not found or null (Not signed in).
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
