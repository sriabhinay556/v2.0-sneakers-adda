'use client'
import { SessionProvider } from "next-auth/react"
import AppBar from "./client_components/AppBar"
import Search from "./client_components/Search"
import { CartContext, CartProvider } from "./client_components/CartContext"


function Providers({children}) {
  return (
    <SessionProvider>
    <CartProvider>
      <div className="flex flex-col sm:flex-row justify-between items-center text-white">
        <div className="ml-4 sm:ml-64">
          <Search />
        </div>
        <div className="mr-4 sm:mr-64 mt-4 sm:mt-0">
          <AppBar />
        </div>
      </div>
      {children}
      </CartProvider>

    </SessionProvider>
  )
}

export default Providers
