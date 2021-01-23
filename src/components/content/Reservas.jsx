import React from 'react'
import './styles/Reservas.css'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Reservas = () => {
    return (
        <div>
            <Header/>
            <div id="MainContent">
                <div id="imgAndText"></div>
                <div id="FormPart">
                    <h1>Escolha a unidade que você deseja fazer a sua pré-reserva</h1>
                    <form action="post" id="MainForm">
                        <label className="InputField">
                            Nome Completo:
                             <input type="text"/>
                        </label>
                        <label className="InputField">
                            E-mail:
                             <input type="E-mail"/>
                        </label>
                        <label className="InputField">
                            Quantidade de pessoas:
                             <input type="number"/>
                        </label>
                        <label className="InputField">
                            Telefone para contato:
                             <input type="tel"/>
                        </label>
                        <label className="InputField">
                            Data da Reserva:
                             <input type="date"/>
                        </label>
                        <button>FAÇA A SUA PRÉ-RESERVA</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Reservas