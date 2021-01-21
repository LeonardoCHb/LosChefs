import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import './PizzaFranquia.css'
import logo from '../../img/logo.png'
const PizzaFranquia = ({Nome, Endereço}) => {
    return (
        <div id="Container">
            <img id="logoFranquia" src={logo} alt="logo"/>
            <div id="ContentDiv">
                <h1>{`Los Chef's  -  ` + Nome}</h1>
                <p>{Endereço}</p>
                <div id="IconsPart">
                    <div className="Icons">
                        <AiFillStar/>
                        <p>4.8</p>
                    </div>
                    <div className="Icons">
                        <BiTimeFive/>
                        <p>25-35 min</p>
                    </div>
                </div>
                <p id="HorarioText">Aberto das 18:00 às 22:00</p>
            </div>
        </div>
    )
}

export default PizzaFranquia;