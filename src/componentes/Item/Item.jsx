
import { Link } from 'react-router-dom'
import './Item.css'

//nuevo
import { useCartContext } from "../../context/CartContext/UseCartContext";

import { Count } from '../Count/Count'



export const Item = ({ prod, children }) => {
   
//nuevo
    const {addItem} = useCartContext()

    const handleAdd = (quantity) => {   
    addItem({...prod, quantity})
      }


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
                  
                    {/* //nuevo */}
                    <Count onConfirm={handleAdd} />
                   
                </div>
            </div>
            {children}
        </div>
    )
}