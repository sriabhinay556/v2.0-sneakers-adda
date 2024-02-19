// 'use client'

// import { useEffect } from "react";

// export default async function page(){
//     const [data,setData] = useEffect()
//     const fetchDataFromApi = async() =>{
//         try{
//             const res = await fetch('/api/proxy_fetch_prices',{
//                 headers:{
//                     Accept: "application/json",
//                     method: "GET",
//                 },
//             });
        
//         if (res){
//             const response = await res.json();
//             setData(response)
//         } 
        
//         }   catch(err){
//             console.log(err)
//         }
//     }
//     fetchDataFromApi();

//     return(
//         <div>/demo
//             {data}
//         </div>
//     )
// }