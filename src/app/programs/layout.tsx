import Navbar from "../Navbar";
import MobileNav from "@/lib/MobileNav";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Michael Curry",
    description: "Michael Curry is a software engineer based in New York.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <nav className="flex justify-between mx-auto md:w-11/12 lg:w-8/12 px-2 py-4">
                <MobileNav>
                    <Navbar />
                </MobileNav>
            </nav>
            {children}
        </>
    );
}

