import { Link } from "react-router-dom"
export default function Header() {
  return (
    <Link to={"/home"}>
      <header className="bg-green-600 p-[3%] text-5xl font-bold text-white">
        Cooking Ng Ina Mo
      </header>
    </Link>
  )
}
