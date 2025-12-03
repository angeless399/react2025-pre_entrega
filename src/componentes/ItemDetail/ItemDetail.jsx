

import './ItemDetail.css'
//nuevo
import { useCartContext } from "../../context/CartContext/UseCartContext";

import { Count } from '../Count/Count'
import { Link } from 'react-router-dom';

export const ItemDetail = ({ detail }) => {
    //    console.log(detail)
    //nuevo
    const { addItem } = useCartContext()

    const handleAdd = (quantity) => {
        addItem({ ...detail, quantity })
    }

    return (
        <>
            
            <h1 className="titulo">Detalles y reseñas de {detail.name}</h1>
             <Link className="btn" to="/"> <span className='volver'> <i className="fa-solid fa-arrow-left-long"></i> Volver </span></Link>
            <section className="productos2">
                <div className="card2">
                    <div className="detalles">
                        <div className="top">
                            <img src={detail.imageUrl} alt="" />
                            <p className="titProd">{detail.name}</p>
                            <p className="descrpcion">{detail.description} </p>
                        </div>
                        <div className="bottom">
                            <p className="precio">${detail.price} <button className="favorito"><i className="fa-solid fa-heart"></i></button></p>
                            <div className="agregar">
                                {/* //nuevo */}
                                <Count onConfirm={handleAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="opiniones">
                        <div className="resenia">
                            <p className="usuario">Usuario1</p>
                            <p className="estrellas">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </p>
                            <p className="comentario">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
                                dicta omnis consequuntur, dolore iusto molestias unde quidem aliquid nulla velit!
                                Aliquid in error fugiat natus.</p>
                        </div>

                        <div className="resenia">
                            <p className="usuario">Usuario2</p>
                            <p className="estrellas">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </p>
                            <p className="comentario">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>

                        <div className="resenia">
                            <p className="usuario">Usuario3</p>
                            <p className="estrellas">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </p>
                            <p className="comentario">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
                                dicta omnis consequuntur, dolore iusto molestias unde quidem aliquid nulla velit!</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};