import React from "react"
import './styles/navBar.css';

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
            </nav>
        </div>
    )
}

export default NavBar