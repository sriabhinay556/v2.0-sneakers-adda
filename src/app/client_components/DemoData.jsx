import React from 'react'

async function DemoData({props}) {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 3600 } })
    const data = await res.json()
    await new Promise(resolve => setTimeout(resolve, 3000));

    const jsonData = await data;
    
  return (
    <div>DemoData 
        {jsonData.map((item) => {
            return <p key={item.id}>{item.name}</p>
        })}

    </div>
  )
}

export default DemoData