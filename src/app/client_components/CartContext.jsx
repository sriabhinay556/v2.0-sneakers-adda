'use client'
import { useSession } from 'next-auth/react';
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { fetchUserData, updateUserData } from '@/app/server_components/cartService';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { data: session } = useSession();
  const [cartData, setCartData] = useState({
    itemCount: 0,
    itemsData: [],
  });

  useEffect(() => {
    const getUserData = async () => {
      if (session?.user?.name) {
        const data = await fetchUserData(session.user.name);
        if (data) {
          setCartData({
            itemCount: data.userItemCount || 0,
            itemsData: data.userItems || [],
          });
        }
      }
    };

    getUserData();
  }, [session]);

  const addItemToCart = useCallback(async (item) => {
    setCartData((prevData) => {
      const updatedData = {
        itemCount: prevData.itemCount + 1,
        itemsData: [...prevData.itemsData, item],
      };
      // Update the user's cart data in the database
      updateUserData(session.user.name, updatedData.itemCount, updatedData.itemsData);

      return updatedData;
    });
  }, [session]);

  const deleteItemToCart = useCallback(async (index) => {
    setCartData((prevData) => {
  
      // Create a new array excluding the item at the specified index
      const updatedItemsData = prevData.itemsData.filter((_, i) => i !== index);
  
      const updatedData = {
        itemCount: prevData.itemCount - 1,
        itemsData: updatedItemsData,
      };
  
      updateUserData(session.user.name, updatedData.itemCount, updatedData.itemsData);
  
      return updatedData;
    });
  }, [session]);
  

  return (
    <CartContext.Provider value={{ cartData, addItemToCart, deleteItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
