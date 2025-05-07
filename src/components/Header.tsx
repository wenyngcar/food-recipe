import { Link, Outlet } from "react-router-dom"
export default function Header() {
  return (
    <>
      <header className="bg-green-600 p-[3%] text-5xl font-bold text-white">
        <Link to={"/home"}>
          Cooking Ng Ina Mo
        </Link>
      </header>
      <main className="px-[15%]">
        <Outlet />
      </main>
    </>
  )
}
