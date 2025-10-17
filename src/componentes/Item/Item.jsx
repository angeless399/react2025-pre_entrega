import { ItemDetail } from '../ItemDetail/ItemDetail'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { Link } from 'react-router-dom'
import './Item.css'
import { BotonAddCarrito } from '../BotonAddCarrito/BotonAddCarrito'


export const Item = ({ prod, children }) => {

    return (
        <div className="card">
            <div className="top">
                <img src={prod.imageUrl} alt="" />
                <p className="titProd">{prod.name}</p>
                <p className="descrpcion">{prod.description}</p>
                <Link to={`/detail/${prod.id}`}> <p>detalles y reseñas</p> </Link>
                {/* <a href="" className="resenias">detalles y reseñas `/detail/{id}`</a> */}
            </div>
            <div className="bottom">
                <div className="precio">
                    <span>${prod.price}</span>
                    <button className="favorito"><i className="fa-solid fa-heart"></i></button>
                </div>
                <div className="agregar">
                    <div className="amount">
                        <span className="descrpcion"> Cant </span>
                        <input type="number" name="cant" id="cant" min="0" />
                    </div>
                    <BotonAddCarrito {...prod} />
                </div>
            </div>
            {children}
        </div>
    )
}