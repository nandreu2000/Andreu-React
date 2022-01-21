import { useEffect, useState } from "react";
//import { getProductos } from "../../baseDeDatos";
import { getProductos } from "../itemList/itemList";
import Item from "../item";
import './card.css';

const CardProduct = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        setIsLoading(true);
        getProductos()
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="App">
        {isLoading ? (
            <p>Cargando...</p>
        ) : (
            products.map((product) => <Item key={product.id} product={product} />)
        )}
        </div>
    );
};

export default CardProduct;