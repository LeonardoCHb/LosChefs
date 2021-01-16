import React from 'react'
import './styles/FacaSeuPedido.css'
import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer'


const SeuPedido = () => {
    return (
        <div>
            <Header/>
            <div id="MainContent">
                <div id="informeSeuCep">informeSeuCep</div>
                <div id="procurarFranaquia">procurarFranaquia</div>
                <div id="buttonsApp">buttonsApp</div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default SeuPedido