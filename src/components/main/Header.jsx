import React from 'react'

function Header (){
    return(
        <nav className="navbar-light">
            <a href="#" className="navbar-brand">Pizzaria X</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Faca seu Pedido</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contatos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Sobre Nos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header