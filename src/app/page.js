import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <p>v2.0 is still building..</p>
      
      <Link href="https://sneakers-adda.vercel.app" className="text-blue-500 hover:text-blue-700 underline cursor-pointer">
      Check out my previous version! 
      </Link>
    </div>
    );
}
