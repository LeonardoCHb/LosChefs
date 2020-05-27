import React from 'react'

import { NavLink } from 'react-router-dom'

function Header(){
    return (
      <nav className=" navbar navbar-light navbar-expand-lg bg-light">
        <NavLink to="" className="navbar-brand">Pizzaria X</NavLink>

           <div className="collapse navbar-collapse">
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
    )
    }

export default Header