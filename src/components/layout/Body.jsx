import React from "react"

import Pizza4k from "../img/Pizza4k.jpg"
import FIRE from "../img/FIRE.jpg"
import kitchen from "../img/kitchen.jpg"
import ingredients from "../img/ingredients.jpg"
import recepcao from "../img/recepcao.jpg"
import Pizza_Deliciosa from "../img/Pizza_Deliciosa.jpg"

function Body() {
    return (

        <div className="carousel slide" data-ride="carousel">
            {/*Indicadores do Slider*/}
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicator" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicator" data-slide-to="1"></li>
                <li data-target="#carouselIndicator" data-slide-to="2"></li>
                <li data-target="#carouselIndicator" data-slide-to="3"></li>
                <li data-target="#carouselIndicator" data-slide-to="4"></li>
                <li data-target="#carouselIndicator" data-slide-to="5"></li>
            </ol>

            {/*Items do Slider e seus respectivos textos*/}

            <div className="caroseul-inner">

                <div className="carousel-item active">
                    <img className="d-block w-100" src={Pizza4k} alt="First" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>A Melhor Pizzaria do MUNDO!</h1>
                        <p>Mian Mian que pizza mais delicisa mian mian blab la bla</p>
                    </div>
                </div>

                <div className="carousel-item active">
                    <img className="d-block w-100" src={FIRE} alt="Second" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Os Melhores CHEFES de BRASILIA</h1>
                        <p>Mian Mian que pizza mais delicisa mian mian blab la bla</p>
                    </div>

                </div>

                <div className="carousel-item active">
                    <img className="d-block w-100" src={kitchen} alt="Third" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Ingredientes Selecionados</h1>
                        <p>Mian Mian que pizza mais delicisa mian mian blab la bla</p>
                    </div>
                </div>

                <div className="carousel-item active">
                    <img className="d-block w-100" src={ingredients} alt="Fourth" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Os Melhores CHEFES de BRASILIA</h1>
                        <p>Mian Mian que pizza mais delicisa mian mian blab la bla</p>
                    </div>
                </div>

                <div className="carousel-item active">
                    <img className="d-block w-100" src={recepcao} alt="Fifth" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Os Melhores CHEFES de BRASILIA</h1>
                        <p>Mian Mian que pizza mais delicisa mian mian blab la bla</p>
                    </div>
                </div>

                <div className="carousel-item active">
                    <img className="d-block w-100" src={Pizza_Deliciosa} alt="Sixth" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Os Melhores CHEFES de BRASILIA</h1>
                        <p>Mian Mian que pizza mais delicisa mian mian blab la bla</p>
                    </div>
                </div>

            </div>

            <a className="carousel-control-prev" href="#carouselIndicator" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            
            <a className="carousel-control-prev" href="#carouselIndicator" role="button" data-slide="prev">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Proximo</span>
            </a>
        </div>

    )
}
export default Body