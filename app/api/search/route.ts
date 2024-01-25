// import { prisma } from "@/db/script";
// import { NextRequest, NextResponse } from "next/server"
// import { ChangeEvent, useState } from "react";

// export async function POST(request: NextRequest) {
//     const {query} = await request.query;

//     const results = await prisma.product.findMany({
//         where: {
//             name: {
//                 contains: query,
//                 mode: 'insensitive'
//             }
//         }
//     });
//     return NextResponse.json(results, { status: 201 });
// }

// const [searchTerm, setSearchTerm] = useState("");
// const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

// const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     setFilteredProducts(
//         products.filter((product) =>
//             product.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//     )};

//     axios.get(`/search?q=${searchTerm}`).then((res) => {
//     setFilteredProducts(res.data);
//     });