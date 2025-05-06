import { Button } from "./ui/button";

export default function SearchBar() {

  return (
    <form className="px-[15%] pt-[2%]">
      <div className="flex w-full items-center space-x-5">
        <input type="text" className="border rounded-2xl transition ease-in-out duration-300 p-2 px-6 w-full" />
        <Button className="hover:cursor-pointer">Search</Button>
      </div>
    </form>
  )


}
