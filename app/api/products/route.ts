import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Data = {
    name: string;
};

const productsData = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlahkgxj7/image/upload/v1696887651/steak_n7z0gq.jpg",
        name: "Ribeye",
        description:
            "Our succulent and juicy ribeye steaks are the perfect choice for steak connoisseurs, with its marbled texture and intense, buttery flavor. Sourced from the finest quality beef, our ribeyes are carefully aged for maximum tenderness and grilled to perfection to create a dining experience like no other.",
        price: 149,
        type: "Steaks",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dlahkgxj7/image/upload/v1696888175/a5wagyu_lcuomo.jpg",
        name: "Japanese A5 Wagyu",
        description:
            "Devour yourself in the ultimate luxury dining experience with our Japanese A5 Wagyu, renowned for its exquisite marbling, buttery texture, and exceptional flavor. Sourced from the finest Japanese cattle, our Wagyu beef is carefully hand-selected and graded to ensure the highest quality, delivering a truly unforgettable dining experience that will leave your taste buds craving for more.",
        price: 249,
        type: "Steaks",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dlahkgxj7/image/upload/v1696887643/porks_nitwn5.jpg",
        name: "Pork Chops",
        description:
            "Elevate your dining experience with our upscale pork chops, hand-selected from the finest cuts of meat and expertly prepared for a tender and flavorful meal. Indulge in the rich and succulent taste of our upscale pork chops, perfectly seasoned and cooked to perfection for an unforgettable culinary experience that will leave you wanting more.",
        price: 39,
        type: "Pork",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dlahkgxj7/image/upload/v1696888644/belugacaviar_oxn2wd.png",
        name: "Beluga Caviar",
        description:
            "Indulge in the luxurious and exquisite taste of purebred beluga caviar, meticulously sourced and hand-selected for the most discerning palate. Elevate your culinary experience with the unparalleled richness and buttery texture of purebred beluga caviar, revered by connoisseurs as the ultimate delicacy.",
        price: 799,
        type: "Seafood",
    },
];

export async function GET() {
    // Database logic
    return NextResponse.json(productsData);
}
