import React from "react"
import './styles/navBar.css';
import carro from './img/carro.png';
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <div>
            <nav className="barra">
            <div><h2 className="logo">NA</h2></div> 
                <ul className="menu">
                    
                        <div className="lista">
                            <li>
                                <a href="#">inicio</a>
                            </li>
                            <li>
                                <a href="#">nosotros</a>
                            </li>
                            <li>
                                <a href="#">productos</a>
                            </li>
                            <li>
                                <a href="#">contacto</a>
                                </li>
                        </div>
                </ul>
               <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar