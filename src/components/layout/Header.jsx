import React from 'react'

import { NavLink } from 'react-router-dom'
import './styles/Header.css';

function Header() {
    return (
        /*tras responsividade a nav em certos tipos de tamanho e alguns estilos*/
        <header>
            <nav className=" navbar navbar-expand-sm navbar-dark bg-dark text-dark">
    
                <NavLink to="" className="navbar-brand">Pizzaria X</NavLink>
    
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/SeuPedido" className="nav-link">Faca seu Pedido</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Cardapio" className="nav-link">Cardapio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contatos" className="nav-link">Contatos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/SobreNos" className="nav-link">Sobre Nos</NavLink>
                        </li>
                    </ul>
                </div>
    
            </nav>
        </header>
    )
}

export default Header