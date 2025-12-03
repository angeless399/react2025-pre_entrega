import LogoTienda from './tienda.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext/UseCartContext";

export const Header = () => {
    const { getTotalItems} = useCartContext()
    return <header>
         <Link to={"/"} className='inicio'>
        <div className="logo">
           
            <img src={LogoTienda} alt="logoTienda" />
            <p className="marca">LaTienda</p>
            
        </div>
        </Link>

        <div className="formBuscar">
            <form>
                <input type="search" name="" id="buscar" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
        </div>

        <div className="usuario">
            <a href=""><i className="fa-solid fa-heart"></i></a>
            {/* <a href=""><i className="fa-solid fa-cart-shopping"></i></a> */}
            <div className='cartIcon'>
            {getTotalItems() > 0 && (
                 <span className="in-cart">{getTotalItems()}</span>
            )}
            <Link to={"/carrito"}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <a href=""><i className="fa-solid fa-user"></i></a>
            {/* <a href="" style="display: none;"><i className="fa-solid fa-right-from-bracket"
                    id="btn-salir"></i></a> CONFLICTO CON EL STYLE EN LINEA */}
        </div>
    </header>
}