import GetHomePageImages from "./components/GetHomePageImages"; // server code
import { Suspense } from "react";

export default function Home() {
 
  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center p-5 mt-10">
      <div className="flex justify-center border border-gray-300 w-full max-w-[1000px] h-[500px] md:w-[1000px] md:h-[400px] lg:h-[420px] md:block sm:hidden overflow-y-auto" >
        <div className="flex justify-center flex-col items-center w-full">
          <Suspense fallback={<p>loading..</p>}>
            <GetHomePageImages/>
          </Suspense>
=======
    <div className="flex justify-center items-center p-5">
      <div className="flex justify-center border border-gray-200 w-full max-w-[1000px] h-[500px] md:w-[1000px] md:h-[530px] lg:h-[400px] md:block sm:hidden overflow-y-auto" >
        <div className="flex justify-center flex-col items-center w-full">
          
          {/* <Suspense fallback={<p>loading...</p>}>
             <ServerComponent/>
          </Suspense> */}
          <Suspense fallback={<p>loading..</p>}>
            <GetHomePageImages/>
          </Suspense>
    

>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
}