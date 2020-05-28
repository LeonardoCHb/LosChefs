import React from "react"
import './styles/Body.css'

import Pizza4k from "../img/Pizza4k.jpg"
import FIRE from "../img/FIRE.jpg"
import kitchen from "../img/kitchen.jpg"
import ingredients from "../img/ingredients.jpg"
import recepcao from "../img/recepcao.jpg"
import Pizza_Deliciosa from "../img/Pizza_Deliciosa.jpg"

function Body() {
    return (

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src={recepcao} alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
                <h1>PIZZA X</h1>
                <p>A melhor Pizza do MUNDO</p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src={Pizza_Deliciosa} alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h1>A MELHOR PIZZARIA DE BRASILIA!!</h1>
                <p>MIAN MIAN DELICIOUS WOOOOO</p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src={FIRE} alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h1>O MELHOR PREPARO PARA VOCE!</h1>
                <p>Contamos com uma estrutura especializada para o melhor atendimento ao cliente</p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src={kitchen} alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h1>Profissionais extremamente qualificados</h1>
                <p>Os grandes chefes de Brasilia estao aqui!</p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src={Pizza4k} alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h1>DO SEU GOSTO!</h1>
                <p>Aqui voce pode personalizar a pizza da forma que voce quiser!</p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src={ingredients} alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h1>Selecionados para voce!</h1>
                <p>Nossos ingredients sao cultivaos em fazendas 100% organicas</p>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

    )
}
export default Body