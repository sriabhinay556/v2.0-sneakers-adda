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
      <body className={inter.className} bg-white>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 p-4  mt-1">
            <h1 className="text-center text-3xl sm:text-5xl sm: font-bold text-green-500 uppercase tracking-widest leading-loose" style={{ fontFamily: "'BlackOpsOne', monospace" }}>
              Sneakers Adda v2.0
            </h1>
          </div>
       
          <div className="flex-grow">{children}</div>

          <div className="flex justify-center p-3 text-sm text-center">
            v2.0 is still developing- {" "}
            
            <Link href="https://sneakers-adda.vercel.app" className="text-blue-500 hover:text-blue-700 underline cursor-pointer">
              Check out my previous version!
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
