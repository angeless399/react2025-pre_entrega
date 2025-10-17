import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ titulo }) => {
  //estado
  const [products, setProducts] = useState([]);

  //sintaxis: useEffect(callback, array de dependencias),  useEffect(()=>{}, [])
  //sintaxis: fetch("endpoint").then(()=>{}).then(()=>{}).catch(()=>{})

  //llamado al json 
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    
      <h1 className="titulo">{titulo}</h1>
      <section className="productos">
        <ItemList lista={products} />
      </section>
    
    </>
  );
};