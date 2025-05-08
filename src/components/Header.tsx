import { ListOfCategory } from "@/api/listOfCategory"
import { Link, Outlet } from "react-router-dom"
export default function Header() {
  const { categories } = ListOfCategory()
  return (
    <>
      <header className="bg-gradient-to-r from-[#00b33c] via-[#ccffcc] to-[#ffff99] p-6 px-[10%] flex items-center justify-between shadow-xl">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 rounded-full flex items-center justify-center transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_15px_rgba(255,255,255,0.8)]">
            <img
              src="/logo2.png"
              alt="Thinking Vegetable Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
          <Link
            to="/home"
            className="text-white text-5xl font-semibold font-serif tracking-wider hover:text-white hover:shadow-white transition"
          >
            <h4>Undecided</h4>
          </Link>
        </div>

        <div className="flex space-x-10 text-lg text-gray-600 font-semibold">
          <Link to={"/home"}>
            Home
          </Link>
          <div className="relative group/category">
            <p>Category</p>
            <div className="absolute bg-slate-100 rounded group-hover/category:opacity-100 opacity-0 transition ease-in-out duration-300">
              {categories.map((meal, key) => (
                <Link to={`/home/${meal["strCategory"]}`} key={key}>
                  <p className="cursor-pointer hover:bg-gray-300 p-2 transition ease-in-out duration-300" key={key}>{meal["strCategory"]}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="px-[15%]" >
        <Outlet />
      </main>
    </>
  );
}
