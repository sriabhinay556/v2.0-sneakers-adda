'use client'
import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function Quantity_Button() {
    const context = useContext(CartContext);
  return (
    <div className='flex justify-end '>
        <div>
            <label for="shoes">Quantity:</label>

            <select name="shoes" id="shoes">

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

            </select>
        </div>
        
    </div>
  )
}
