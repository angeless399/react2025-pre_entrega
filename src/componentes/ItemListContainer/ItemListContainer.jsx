import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ titulo }) => {
  //estado
  const [products, setProducts] = useState([]);
  const { category } = useParams()

  //sintaxis: useEffect(callback, array de dependencias),  useEffect(()=>{}, [])
  //sintaxis: fetch("endpoint").then(()=>{}).then(()=>{}).catch(()=>{})

  //llamado al json 
  useEffect(() => {
    fetch("https://69247dee3ad095fb8474698e.mockapi.io/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        if (category) {
          setProducts(data.filter((prod) => prod.category === category));
        } else {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <>
    
      <h1 className="titulo">{titulo}</h1>
      <section className="productos">
        <ItemList lista={products} />
      </section>
    
    </>
  );
};