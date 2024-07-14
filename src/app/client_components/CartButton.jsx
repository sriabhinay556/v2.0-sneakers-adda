'use client'

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
function CartButton({ props }) {
    const { addItemToCart } = useContext(CartContext);
    const session = useSession();
    const router = useRouter();
    return (
       <div className='text-sm mt-1'>
            {  (session.status=="authenticated") 
                &&
                <button className='border hover:bg-gray-400 hover:text-black'  onClick={() => addItemToCart(props)}>
                Add to Cart
                </button>
            }
            {
                (session.status!="authenticated")
                &&
                <button className='border hover:bg-gray-400 hover:text-black' onClick={() => {
                    router.push('/signup',{message: "Log In to Add items to the Cart"})
                }}>
                Add to Cart
                </button>
            
            }  
        </div>
    );
}

export default CartButton;
