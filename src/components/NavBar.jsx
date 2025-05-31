import "../css/NavBar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
const NavBar =() =>{

    return(
        <nav className="nav-container" >
            
            <NavLink to='/' >
                <img className="logo-header" src="../Logo.png" alt="Logo de Dulce Infinito" />
            </NavLink>

            
            <div className="categories">
                <NavLink className="nav-link" to="/category/nuevos">Nuevos</NavLink>
                <NavLink className="nav-link" to="/category/los favoritos">Los favoritos</NavLink>
                <NavLink className="nav-link" to="/category/promociones">Promociones</NavLink>
            </div>
            <CartWidget/>
        </nav>
   )

}

export default NavBar