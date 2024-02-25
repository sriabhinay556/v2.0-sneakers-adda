import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import logo from "./logo.jpg";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "v2.0-sneakers-adda", 
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col min-h-screen bg-black">
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 p-4  mt-1">
            <Link href={'/'} className="hover:bg-gray-700 cursor-pointer">
            <h1 className="text-center text-3xl sm:text-7xl sm: font-bold text-green-500 uppercase tracking-widest leading-loose" style={{ fontFamily: "'BlackOpsOne', monospace" }}>
              Sneakers Adda  v2.0
            </h1>
            </Link>
          </div>
       
          <div className="flex-grow">{children}</div>

         
        </div>
      </body>
    </html>
  );
}
