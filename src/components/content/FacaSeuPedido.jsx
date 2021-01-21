import React from 'react'
import './styles/FacaSeuPedido.css'
import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer'
import PizzaFranquia from './ReUse/PizzaFranquia'

const SeuPedido = () => {
    return (
        <div id="MainContainer">
            <Header/>
            <div id="MainContent">
                <div id="informeSeuCep">
                    <p id="cepText">Informe seu CEP e faça o pedido na unidade mais proxíma</p>
                    <div id="buttonArea">
                        <input type="text"/>
                        <button>BUSCAR</button>
                    </div>
                    <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm" target="blank">Não sei meu CEP</a>
                </div>
                <div id="procurarFranquias">
                    <input id="porLocalInput" type="text" placeholder="Procure por cidade"/>
                    <div id="displayFranquias">
                        <PizzaFranquia Nome="AsaNorte" Endereço="SCHGN 702/703 Bloco G LOJA 47"/>
                        <PizzaFranquia Nome="Cruzeiro" Endereço="SCHGN 702/703 Bloco G LOJA 47"/>
                        <PizzaFranquia Nome="Sudoeste" Endereço="SCHGN 702/703 Bloco G LOJA 47"/>
                        <PizzaFranquia Nome="Noroeste" Endereço="SCHGN 702/703 Bloco G LOJA 47"/>
                    </div>
                </div>
                <div id="buttonsApp">buttonsApp</div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default SeuPedido