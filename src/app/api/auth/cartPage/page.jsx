'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { CartContext } from "@/app/client_components/CartContext";

function Page() {
  const { data: session, status } = useSession();
  const [totalValue, setTotalValue] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'loading') return; // Don't do anything while loading
    if (!session) {
      router.push('/');
    }
  }, [session, status, router]);
  
  const { cartData, addItemToCart, deleteItemToCart } = useContext(CartContext);

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (cartData.itemsData.length > 0) {
      setItems(cartData.itemsData);
    }
  }, [cartData.itemsData]);

  useEffect(() => {
    const total_price = items.reduce((acc, item) => acc + item.sneaker_price, 0);
    setTotalValue(total_price);
  }, [items]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Or any loading indicator
  }

  const handleDeleteItem = async (index) => {
    const itemToDelete = items[index];
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    await deleteItemToCart(itemToDelete); // Ensure this updates the context and backend
  };

  return (
    <div className="flex flex-col justify-center mt-8">
      <div>
        <button onClick={() => router.back()} className="text-gray-600 rounded-md hover:text-gray-200 transition duration-150 ease-in-out mb-1 px-5 lg:ml-20">
          ← 
        </button>
        <h1 className="text-2xl flex ml-4 text-gray-300 md:text-xl md:ml-64">Cart</h1>
        <hr className="border-t border-black md:mx-64 md:border-gray-600 md:my-4" />
      </div>
      {items.length !=0 && 
      items.map((item, index) => (
        <div key={index} className="m-4 flex flex-col md:ml-16 md:mr-16 sm:ml-4 sm:mr-4 lg:ml-64 lg:mr-64 border p-2 border-gray-600">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <div className="text-xl">{item.sneaker_name}</div>
              <div className="flex">
                <div className="text-gray-400">Price: ${item.sneaker_price}</div>
              </div>
            </div>
            <div className="flex-col">
              <div className="flex justify-end">
                <button width={30} height={30} onClick={() => handleDeleteItem(index)}>
                  <Image width={20} height={20} src={'/delete.png'} alt="Delete" />
                </button>
              </div>
              <div>
                <Image width={120} height={120} src={item.sneaker_img} alt={item.sneaker_name} />
              </div>
            </div>
          </div>
        </div>
      ))
      }
      {
        items.length == 0 && <div className="flex justify-center text-gray-300">Your Cart is Empty :(</div>
      }
      <hr className="border-t border-gray-600 mx-4 md:mx-64 md:my-4" />
      {items.length!=0 && <div className="pt-1 flex mx-4 md:ml-16 md:mr-16 sm:ml-4 sm:mr-4 lg:ml-64 lg:mr-64 justify-end">
        <h1 className="text-xl">Total Cart Value: <span className="text-green-400">${totalValue}</span></h1>
      </div>}
    </div>
  );
}

export default Page;
