import Meals from "./Meals";
import { useState } from "react";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");

  return (
    <>

      <form className="pt-[2%]" onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full items-center space-x-5">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            className="border-2 border-gray-200 p-2 px-6 w-full rounded-2xl transition ease-in-out duration-300 placeholder:text-gray-400 hover:border-l-4 hover:border-r-4 hover:border-neonGreen hover:text-white hover:shadow-[0_0_8px_2px_#39FF14] focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
            placeholder="Search..."
          />
        </div>
      </form>

      <Meals mealName={inputText} />
    </>
  );
}
