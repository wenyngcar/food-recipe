import FilteredMeals from "./FilteredMeals";
// import { useState } from "react";

export default function SearchBar() {
  // const [inputText, setInputText] = useState("");

  return (
    <div className="-mt-1 bg-[url(/src/assets/mealsBg.svg)] bg-no-repeat bg-cover px-[15%]">
      {/* <form className="pt-[2%]" onSubmit={(e) => e.preventDefault()}> */}
      {/*   <div className="flex w-full items-center space-x-5"> */}
      {/*     <input */}
      {/*       value={inputText} */}
      {/*       onChange={(e) => setInputText(e.target.value)} */}
      {/*       type="text" */}
      {/*       className="px-10 py-4 bg-gray-200 w-full rounded" */}
      {/*       placeholder="Search..." */}
      {/*     /> */}
      {/*   </div> */}
      {/* </form> */}

      <FilteredMeals />
    </div>

  );
}
