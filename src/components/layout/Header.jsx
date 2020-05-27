import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(){
    return(
        <nav className="navbar-light">
        <NavLink to="" className="navbar-brand">Pizzaria X</NavLink>
        <div >
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <NavLink to="/" className="nav-NavLink">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/SeuPedido" className="nav-NavLink">Faca seu Pedido</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Cardapio" className="nav-NavLink">Cardapio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Contatos" className="nav-NavLink">Contatos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/SobreNos" className="nav-NavLink">Sobre Nos</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Header