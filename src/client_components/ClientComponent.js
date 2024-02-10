'use client'

import React from 'react'
export default function ClientComponent({usersData}) {
  return (
    <>
    <div>
    this is client component - {
        usersData.map((item) => {
            return(
                <p>{item}</p>
            )
        })
    }
    </div>
    </>
  )
}

