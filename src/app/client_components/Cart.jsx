'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from './CartContext';
import Link from 'next/link';

function Cart() {
    const {cartData} =useContext(CartContext)
    
  return (
    <div className='pt-1 pl-4 pr-4 flex'>
    <Link href={'/api/auth/cartPage'} className='flex'>
     <div>
        <Image width={25} height={20} src="/cart-4.png" priority className='mr-2 ' />
      </div>
      <div>
        <label className="mb-1">{cartData.itemCount}</label>
      </div>
    </Link>
    </div>
  );
}

export default Cart;
