import { FilterList } from "@/api/listOfCategory"
import { Link, Outlet } from "react-router-dom"
export default function Header() {
  const { list: categories } = FilterList("c")
  const { list: area } = FilterList("a")

  return (
    <>
      <header className="sticky top-0 bg-linear-to-b from-black from-40% py-6 px-[10%] flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/home" className="text-white text-5xl font-semibold font-serif hover:shadow-white transition" >
            Undecided
          </Link>
        </div>

        <div className="flex space-x-10 text-lg text-white font-ligt">
          <Link to={"/home"} className="hover:text-[#FF9058] transition ease-in-out duration-300">
            Home
          </Link>
          <div className="relative group/category cursor-pointer">
            <p>Category</p>
            <div className="absolute bg-gray-900 rounded group-hover/category:opacity-100 group-hover/category:pointer-events-auto opacity-0 pointer-events-none transition ease-in-out duration-300">
              {categories.map((meal, key) => (
                <Link to={`/home/c/${meal["strCategory"]}`} key={key}>
                  <p className="hover:bg-[#FF9058] p-2 transition ease-in-out duration-300" key={key}>{meal["strCategory"]}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative group/category cursor-pointer">
            <p>Area</p>
            <div className="h-[615px] overflow-auto absolute bg-gray-900 rounded group-hover/category:opacity-100 group-hover/category:pointer-events-auto opacity-0 pointer-events-none transition ease-in-out duration-300">
              {area.map((meal, key) => (
                <Link to={`/home/a/${meal["strArea"]}`} key={key}>
                  <p className="hover:bg-[#FF9058] p-2 transition ease-in-out duration-300" key={key}>{meal["strArea"]}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
