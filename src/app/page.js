export default function Home() {
  const items = ["AJ 1 Lows", "Yeezy 350's", "Air Jordan 3's", "Yeezy 500's", "AJ 1 Lows", "Yeezy 350's", "Air Jordan 3's", "Yeezy 500's", "AJ 1 Lows", "Yeezy 350's"];
  return (
    <div className="flex justify-center items-center p-5">
      <div className="border border-gray-200 w-full max-w-[1000px] h-[530px] md:w-[1000px] md:h-[530px] lg:h-[620px] overflow-auto">
        <div className="flex flex-col items-center w-full">
          {
            items.map((item, index) => (
              // Adjust button width: full width on smaller screens, 1/4 width on larger screens
              <button key={index} className="bg-blue-500 text-white w-full md:w-1/4 py-2 my-2 hover:bg-blue-700 transition-colors duration-150 ease-in-out">
                {item}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
}
