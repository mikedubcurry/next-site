import Navbar from "./Navbar";
import MobileNav from "@/lib/MobileNav";
import "./globals.css";
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
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between mx-auto md:w-11/12 lg:w-8/12 px-2 py-4">
          <Link href="/" className="flex justify-center items-center">
            <h1 className="text-2xl font-bold">Michael Curry</h1>
          </Link>

          <MobileNav>
            <Navbar />
          </MobileNav>
        </nav>
        <main className="mx-auto px-2 md:w-11/12 lg:w-8/12">{children}</main>
      </body>
    </html>
  );
}
