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
        <main role="main">
                {/*---------Background(bg) Slider--------*/}
            <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="4000">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                    <li data-target="#carousel" data-slide-to="4"></li>
                    <li data-target="#carousel" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">

                    {/*--------Items do bg slider--------*/}
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={recepcao} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>PIZZA X</h3>
                            <p>A melhor Pizza do MUNDO</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={Pizza_Deliciosa} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>A MELHOR PIZZARIA DE BRASILIA!!</h3>
                            <p>MIAN MIAN DELICIOUS WOOOOO</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={FIRE} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>O MELHOR PREPARO PARA VOCE!</h3>
                            <p>Contamos com uma estrutura especializada para o melhor atendimento ao cliente</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={kitchen} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Profissionais extremamente qualificados</h3>
                            <p>Os grandes chefes de Brasilia estao aqui!</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={Pizza4k} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>DO SEU GOSTO!</h3>
                            <p>Aqui voce pode personalizar a pizza da forma que voce quiser!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={ingredients} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Selecionados para voce!</h3>
                            <p>Nossos ingredients sao cultivaos em fazendas 100% organicas</p>
                        </div>
                    </div>

                </div>{/*carousel-inner*/}

                {/*--------Controles do bg slider-----------*/}
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    {/*Arrows do Bootstrap*/}
                <svg class="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
               <span class="sr-only">Previous</span>
                </a>


                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    {/*Arrows do Bootstrap*/}
                <svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                </svg>
                    <span className="sr-only">Next</span>
                </a>

            </div>{/*carousel*/}

            <section className="page-section" >
                <div className="container-fluid mt-5 py-5">

                    <div className="text-center mt-5 py-5">
                        <h2 className="section-heading text-uppercase overflow-hidden">Porque escolher a gente?</h2>
                    </div>

                    <div className="row text-center ">
                        <div className="col-md-4">
                            <h4 className="overflow-hidden">Fazendas Particulares</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>

                        <div className="col-md-4">
                            <h4 className="overflow-hidden">Estrutura de Ponta</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                        </div>

                        <div className="col-md-4">
                            <h4 className="overflow-hidden">Eleita a melhor Equipe de Brasilia</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                        </div>
                    </div>

                    

                </div>

            </section>
        </main>
    )
}
export default Body