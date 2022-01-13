import './card.css';
import crema from '../img/crema.png';
import Contador from "../Contador";

function CardProduct ({name, description}) {
    return (
    <div className="card">
    <div className="card-img">
    <img src={crema} height={150} />
    </div>
    <div className="card-content">
      <h2>{name}</h2>  
      <p>{description}</p>
    </div>

    <Contador />
</div>
);
}

export default CardProduct;