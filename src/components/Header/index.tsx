
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/recipes'>All recipes</NavLink>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}
