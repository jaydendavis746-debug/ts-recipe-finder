
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>
        <nav>
            <NavLink className="nav-links" to='/'>Home</NavLink>
            <NavLink className="nav-links" to='/recipes'>All recipes</NavLink>
            <NavLink className="nav-links" to='/search'>Search recipes</NavLink>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}
