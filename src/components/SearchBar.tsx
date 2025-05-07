import Meals from "./Meals";
import { useState } from "react";

export default function SearchBar() {
  const [inputText, setInputText] = useState("")

  return (
    <>
      {/* SearchBar */}
      <form className="pt-[2%]" onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full items-center space-x-5">
          <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" className="border rounded-2xl transition ease-in-out duration-300 p-2 px-6 w-full" placeholder="Search..." />
        </div>
      </form>

      {/* Card of Meals */}
      <Meals mealName={inputText} />
    </>
  )
}

