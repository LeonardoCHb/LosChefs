import React from 'react'
import './styles/FacaSeuPedido.css'
import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer'


const SeuPedido = () => {
    return (
        <div>
            <Header/>
            <div id="MainContent">
                <div id="informeSeuCep">
                    <p id="cepText">Informe seu CEP e faça o pedido na unidade mais proxíma</p>
                    <div id="buttonArea">
                        <input></input>
                        <button>BUSCAR</button>
                    </div>
                    <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm" target="blank">Não sei meu CEP</a>
                </div>
                <div id="procurarFranaquia">procurarFranaquia</div>
                <div id="buttonsApp">buttonsApp</div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default SeuPedido