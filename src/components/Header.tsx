import { ListOfCategory } from "@/api/listOfCategory"
import { Link, Outlet } from "react-router-dom"
export default function Header() {
  const { categories } = ListOfCategory()
  return (
    <>
      <header className="sticky top-0 bg-linear-to-b from-black from-40% py-6 px-[10%] flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center transition duration-300 hover:shadow-[0_0_30px_15px_rgba(255,255,255,0.8)]">
            <Link
              to="/home"
              className="text-white text-5xl font-semibold font-serif hover:shadow-white transition"
            >
              <img
                src="/src/assets/Logo.png"
                alt="Thinking Vegetable Logo"
                className="w-20 h-20 object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="flex space-x-10 text-lg text-white font-ligt">
          <Link to={"/home"} className="hover:text-[#FF9058] transition ease-in-out duration-300">
            Home
          </Link>
          <div className="relative group/category cursor-pointer">
            <p>Category</p>
            <div className="absolute bg-gray-900 rounded group-hover/category:opacity-100 group-hover/category:pointer-events-auto opacity-0 pointer-events-none transition ease-in-out duration-300">
              {categories.map((meal, key) => (
                <Link to={`/home/${meal["strCategory"]}`} key={key}>
                  <p className="hover:bg-[#FF9058] p-2 transition ease-in-out duration-300" key={key}>{meal["strCategory"]}</p>
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
