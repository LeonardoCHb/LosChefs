import React, {useState, useRef}  from 'react'

import {FaGooglePlay} from 'react-icons/fa';
import {GiSmartphone} from 'react-icons/gi'
import './styles/FacaSeuPedido.css'
import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer'
import PizzaFranquia from './ReUse/PizzaFranquia'
import SetLocalStorage,{ArrayOfData} from '../../Storage/LocalStorage'
const SeuPedido = () => {  
    SetLocalStorage()
    const DataPizzarias = ArrayOfData();
    const [Locations, setLocations] = useState(() => {
        return DataPizzarias;
    })
    const InputLocation = useRef(null);
    const InputCep = useRef(null);
    async function HandleLocations(){
        const CurrentArray = [];
        await DataPizzarias.map((element) => {
            const NewElement = element.Nome.toLowerCase().replace(" ", "")
            const NewInput = InputLocation.current.value.toLowerCase().replace(" ", "")
            const lenghInput = NewInput.length
            if(NewInput === NewElement.substring(0, lenghInput))
                CurrentArray.push(element)
        })
        setLocations(CurrentArray)
    }
    async function HandleCep(){
        const CurrentArray = [];
        await DataPizzarias.map((element) => {
            if(element.Cep.substring(0, 3) == InputCep.current.value.substring(0, 3))
                CurrentArray.push(element)
        })
        setLocations(CurrentArray)
    }
    return (
        <div id="MainContainer">
            <Header/>
            <div id="MainContent">
                <div id="informeSeuCep">
                    <p id="cepText">Informe seu CEP e faça o pedido na unidade mais proxíma</p>
                    <div id="buttonArea">
                        <input ref={InputCep} type="text"/>
                        <button id="CepButton"  onClick={HandleCep}>BUSCAR</button>
                    </div>
                    <a id="CepAnchor" href="http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm" target="blank">Não sei meu CEP</a>
                </div>
                <div id="procurarFranquias">
                    <input ref={InputLocation} id="porLocalInput" type="text" placeholder="Procure por cidade" onChange={HandleLocations}/>
                    <div id="displayFranquias">
                        {Locations.map((element) => {
                            return <PizzaFranquia Nome={element.Nome} Endereço={element.Endereco} Estrelas={element.Estrelas} ></PizzaFranquia>
                        })}
                    </div>
                </div>
                <div id="AppsPart">
                    <p id="AppText">Faça o download do nosso aplicativo</p>
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