
import { BotonAddCarrito } from '../BotonAddCarrito/BotonAddCarrito';
import './ItemDetail.css'

export const ItemDetail = ({ detail }) => {
//    console.log(detail)

  return (
    <>
     <h1 className="titulo">Detalles y reseñas de {detail.name}</h1>
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
                                <form action="">
                                    <button className="restar"><i className="fa-solid fa-square-minus"></i></button>
                                    <input type="number" name="cant" id="cant" min="0" />
                                    <button className="sumar"><i className="fa-solid fa-square-plus"></i></button>
                                </form>
                                <BotonAddCarrito {...detail}/>
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