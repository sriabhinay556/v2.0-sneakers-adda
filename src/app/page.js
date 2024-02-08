async function getData() {
  const res = await fetch('https://65c43452dae2304e92e25de9.mockapi.io/TestAPI/v1/users', { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Home() {
  const data = await getData()
  //return <main>{JSON.stringify(data)}</main>
  return  <div className="flex justify-center items-center p-5">
  <div className="border border-gray-200 w-full max-w-[1000px] h-[530px] md:w-[1000px] md:h-[530px] lg:h-[620px]">
    /Home
  </div>
</div>
}