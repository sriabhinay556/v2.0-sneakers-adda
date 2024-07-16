'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from './CartContext';
import Link from 'next/link';

function Cart() {
    const {cartData} =useContext(CartContext)
    
    return (
        <div className='pl-4 pr-4 flex'>
          <Link href={'/api/auth/cartPage'} className='flex items-center'>
            <div>
              <Image width={25} height={10} src="/cart-4.png" priority className='mr-2 mb-1' alt="cart"/>
            </div>
            {cartData.itemCount != 0 && <div>
              <label className="border rounded-full w-5 h-5 bg-green-400 text-black flex items-center justify-center cursor-pointer">
                {cartData.itemCount}
              </label>
            </div>}
          </Link>
        </div>
      );
      
      
}

export default Cart;
