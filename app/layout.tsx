import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Steakhouse Society",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <ClerkProvider>
            <html lang="en">
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
                    {children}
                    <Footer />
                </body>
            </html>
            </ClerkProvider>
        </>
    );
}
