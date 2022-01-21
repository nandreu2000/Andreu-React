import Contador from "../Contador";
import "./item.css";
import crema from "../img/crema.png";

const Item = ({ product }) => {
  return (
    <div className="tarjeeta">
      <img src={crema} height={150} />
      <p className="tituloo">{product.name}</p>
      <p>{product.descripcion}</p>
      <p className="precioo">$ {product.precio}</p>

      <button>Agregar</button>

      <Contador />
    </div>
  );
};

export default Item;
