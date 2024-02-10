import React from 'react'
import ClientComponent from '@/client_components/ClientComponent'

export default async function ServerComponent() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users',{cache: "no-store",}).then(res =>res.json())
    const users = data.map((item)=>{
        return item.name
    })
    console.log(users)
  return (
    <ClientComponent usersData={users}/>
  )
}

