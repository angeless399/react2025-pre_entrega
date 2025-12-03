
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return <nav> <input type="checkbox" id="open-menu" />
        <label htmlFor="open-menu">
            <i className="fa-solid fa-bars btn"></i>
            <div className="formBuscar">
                <form action="">
                    <input type="search" name="" id="buscar" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
        </label>

        <div className="link">
            {/* <a href=""><i className="fa-solid fa-house"></i>Bienvenidos</a> */}
            {/* <a href=""><i className="fa-solid fa-store"></i>Tienda</a>
            <a href=""><i className="fa-solid fa-envelope"></i>Contáctenos</a>
            <a href=""><i className="fa-solid fa-toolbox"></i>Administración</a> */}
            <Link to={"/"}><i className="fa-solid fa-store"></i>Tienda</Link>
            <Link to={"/category/categoria_1"}><i className="fa-solid fa-store"></i>Categoria-1</Link>
            <Link to={"/category/categoria_2"}><i className="fa-solid fa-store"></i>Categoria-2</Link>
        </div>
    </nav>
}