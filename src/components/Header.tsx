import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-[#00b33c] via-[#ccffcc] to-[#ffff99] p-6 flex items-center justify-between shadow-xl">
      
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
      </header>

      <main className="px-[15%]">
        <Outlet />
      </main>
    </>
  );
}
