'use server'
import React from 'react'
import Image from 'next/image'
function CarouselApp2({props}) {
  return (
    <div>{
        props.map((item)=>{
         return <div key={item.alt}>
        <p>
            {item.alt}
        </p>
        <Image src={item.src} width={300} height={300}>
        </Image>
         </div>
        })
      }</div>
  )
}

export default CarouselApp2