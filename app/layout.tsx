import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContextProvider } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Steakhouse Society",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ClerkProvider
                appearance={{
                    variables: {
                        colorPrimary: "#1f2937",
                        colorText: "black",
                    },
                }}
            >
                <html lang="en">
                    <CartContextProvider>
                        <Toaster
                            toastOptions={{
                                className: "",
                                style: {
                                    padding: "16px",
                                    background: "#e2e7f2",
                                    color: "black",
                                },
                            }}
                        />
                        <body className={inter.className}>
                            <Navbar />
                            <main className="min-h-[60vh]">{children}</main>
                            <Footer />
                        </body>
                    </CartContextProvider>
                </html>
            </ClerkProvider>
        </>
    );
}
