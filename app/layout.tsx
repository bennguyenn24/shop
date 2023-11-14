import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Steakhouse Society",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = (await currentUser()) as User;
    return (
        <>
            <ClerkProvider
                appearance={{
                    baseTheme: [dark, neobrutalism],
                    variables: { colorPrimary: "red" },
                    signIn: {
                        baseTheme: [shadesOfPurple],
                        variables: { colorPrimary: "blue" },
                    },
                }}
            >
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
                        <Navbar user={user} />
                        <main className="min-h-[60vh]">{children}</main>
                        <Footer />
                    </body>
                </html>
            </ClerkProvider>
        </>
    );
}
