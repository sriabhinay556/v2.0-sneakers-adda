'use client'

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartButton({ props }) {
    const { addItemToCart } = useContext(CartContext);

    return (
        <div>
            <button className='border' onClick={() => addItemToCart(props)}>
                Add to Cart
            </button>
        </div>
    );
}

export default CartButton;
