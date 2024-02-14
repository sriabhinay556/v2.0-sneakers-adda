import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center'>
      <div><p>Could not find requested resource.</p></div>
    <div><Link href="/" className='text-blue-500 hover:text-blue-700 underline cursor-pointer'>Return Home</Link></div>
    </div>
  )
}