import React, {useState, useRef}  from 'react'

import {FaGooglePlay} from 'react-icons/fa';
import {GiSmartphone} from 'react-icons/gi'
import './styles/FacaSeuPedido.css'
import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer'
import PizzaFranquia from './ReUse/PizzaFranquia'
import {GetLocalStorage, PizzariasQueue, SearchByLocation} from '../../Storage/LocalStorage'
const SeuPedido = () => {
    const {Locations, setLocations} = useState([{}])
    const InputLocation = useRef();
    const InputCep = useRef();
    function HandleLocations(){
        // console.log(InputLocation)
        // if( InputLocation.current.value =! undefined){
        //     const type = InputLocation.current.value
        //     console.log(type)
        // }
    }
    function HandleCep(){
        console.log(InputCep)
    }
    return (
        <div id="MainContainer">
            <Header/>
            <div id="MainContent">
                <div id="informeSeuCep">
                    <p id="cepText">Informe seu CEP e faça o pedido na unidade mais proxíma</p>
                    <div id="buttonArea">
                        <input ref={InputCep} type="text"/>
                        <button  onClick={HandleCep}>BUSCAR</button>
                    </div>
                    <a id="FaceSeuPedidoAnchor" href="http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm" target="blank">Não sei meu CEP</a>
                </div>
                <div id="procurarFranquias">
                    <input ref={InputLocation} id="porLocalInput" type="text" placeholder="Procure por cidade" onChange={HandleLocations()}/>
                    <div id="displayFranquias">
                    </div>
                </div>
                <div id="AppsPart">
                    <p>Faça o download do nosso aplicativo</p>
                    <div id="buttonsApp">
                        <div className="Stores">
                            <FaGooglePlay />
                            <p className="StoresText">Google Play</p>
                        </div>
                        <div className="Stores">
                            <GiSmartphone />
                            <p className="StoresText">App Store</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default SeuPedido