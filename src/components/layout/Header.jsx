import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

import { NavLink } from 'react-router-dom'
import home_logo from '../img/home_Logo.png'
import './styles/Header.css';

function Header() {
    return (
        /*tras responsividade a nav em certos tipos de tamanho e alguns estilos*/
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                    
            
                    <NavLink to="" className="navbar-brand">
                        <img className="home_logo" src={home_logo} alt="" />
                    </NavLink>
        
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                            <i className="fa fa-bars"></i>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarMenu">
        
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link" id="nav_item">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/SeuPedido" className="nav-link " id="nav_item">Faca seu Pedido</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Cardapio" className="nav-link" id="nav_item">Reservas</NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="#main_footer" className="nav-link" id="nav_item">Contatos</a>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/SobreNos" className="nav-link" id="nav_item">Sobre Nos</NavLink>
                            </li>
                        </ul>
                    </div>
                
            </nav>
    )
}

export default Header