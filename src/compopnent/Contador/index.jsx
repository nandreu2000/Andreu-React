import React, {useState} from "react";
import './contador.css'; 

function Contador() {
    const [counter, setCounter] = useState(0);

    const sumarClick = () =>  {
        setCounter(counter + 1)
    };

    const restarClick = () => {
        setCounter(counter - 1)
    };

return (
    <div className="contador">
        <h3 className="numero">{counter}</h3>
        <button className="buttons" onClick={restarClick}>-</button>
        <button className="buttons" onClick={sumarClick}>+</button>
    </div>
);
};

export default Contador;