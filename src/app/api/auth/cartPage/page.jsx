'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { CartContext } from "@/app/client_components/CartContext";
import { Quando } from "next/font/google";
import Quantity_Button from "@/app/client_components/Quantity_Button";

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
  
  const { cartData, addItemToCart } = useContext(CartContext);
  const cart_items = cartData.itemsData;
  
  useEffect(() => {
    const total_price = cart_items.reduce((acc, item) => acc + item.sneaker_price, 0);
    setTotalValue(total_price);
  }, [cart_items]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <div className="flex flex-col justify-center mt-8">
      <div>
        <h1 className="text-2xl flex ml-64 text-gray-300 ">Cart</h1>
      </div>
      {cart_items.map((item, index) => (
        <div key={index} className="m-4 flex flex-col md:ml-16 md:mr-16 sm:ml-4 sm:mr-4 lg:ml-64 lg:mr-64">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <div className="text-xl">{item.sneaker_name}</div>
              <div className="flex">
                <div className="text-gray-400">Price: ${item.sneaker_price}</div>
                <div>
                  {/* <Quantity_Button></Quantity_Button> */}
                </div>
              </div>
            </div>
            <div>
              <Image width={120} height={120} src={item.sneaker_img} alt={item.sneaker_name}/>
            </div>
          </div>
        </div>
      ))}
      
      <hr className="border-t border-gray-600 md:mx-16 sm:mx-4 lg:mx-64 my-4" />

      <div className="flex md:ml-16 md:mr-16 sm:ml-4 sm:mr-4 lg:ml-64 lg:mr-64 justify-end">
        <h1 className="text-xl">Total Cart Value: ${totalValue}</h1>
      </div>
    </div>
  );
}

export default Page;
