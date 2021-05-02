import React from "react"
import './styles/Body.css'

/*Import das imagens*/
import Pizza4k from "../img/CL_Pizza4k.jpg"
<<<<<<< HEAD
import FIRE from "../img/CL_FIRE.svg"
=======
import FIRE from "../img/CL_FIRE.jpg"
>>>>>>> master
import kitchen from "../img/CL_kitchen.jpg"
import ingredients from "../img/CL_ingredients.jpg"
import recepcao from "../img/CL_recepcao.jpg"
import Pizza_Deliciosa from "../img/CL_Pizza_Deliciosa.jpg"
import Botton_Chefs from "../img/Botton_Chefs.jpg"
import Botton_Estrutura2 from "../img/Botton_Estrutura.jpg"
import Botton_Food from "../img/Botton_Food.jpg"
import logo from "../img/logo.png"


function Body() {
    return (
        <main role="main">
                {/*---------Background(bg) Slider--------*/}
            <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="400000">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                    <li data-target="#carousel" data-slide-to="4"></li>
                    <li data-target="#carousel" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">

                    {/*--------Itens do bg slider--------*/}
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={recepcao} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block" id="logo_caption">
                        <img className="rounded-circle img-fluid" id="logo_img" src={logo} alt="logo" height="5"/>
                            
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={Pizza_Deliciosa} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 id="title">A MELHOR PIZZARIA DE BRASILIA!!</h3>
                            <p>MIAN MIAN DELICIOUS WOOOOO</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={FIRE} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 id="title">O MELHOR PREPARO PARA VOCE!</h3>
                            <p>Contamos com uma estrutura especializada para o melhor atendimento ao cliente</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={kitchen} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 id="title">Profissionais extremamente qualificados</h3>
                            <p>Os grandes chefes de Brasilia estao aqui!</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={Pizza4k} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 id="title">DO SEU GOSTO!</h3>
                            <p>Aqui voce pode personalizar a pizza da forma que voce quiser!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={ingredients} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 id="title">Selecionados para voce!</h3>
                            <p>Nossos ingredients sao cultivaos em fazendas 100% organicas</p>
                        </div>
                    </div>

                </div>{/*carousel-inner*/}

                {/*--------Controles do bg slider-----------*/}
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    {/*Arrows do Bootstrap*/}
                    <i class="fa fa-arrow-left" id="arrow_l"></i>
               <span class="sr-only">Previous</span>
                </a>


                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    {/*Arrows do Bootstrap*/}
                    <i class="fa fa-arrow-right" id="arrow_r"></i>
                    <span className="sr-only">Next</span>
                </a>

            </div>{/*carousel*/}

            {/*-------------Main section com display das imagens redondas--------------*/}
            <section className="page-section" >
                <div className="container-fluid my-5 py-5">
                    {/*Titulo*/}    
                    <div className="text-center mt-5 py-5">
                        <h2 className="section-heading text-uppercase overflow-hidden" id="section_title">Porque escolher a gente?</h2>
                    </div>
                     {/*-----------Items da Main section-------*/}  
                    <div className="row text-center ">
                        <div className="col-md-4">
                        <img id="BottonBodyImg" className="rounded-circle mb-5" src={Botton_Food} alt="Foto da Equipe" width="140" height="140"/>
                            <h4 id="section_item">Fazendas Particulares</h4>
                            <p id="item_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>

                        <div className="col-md-4">
                        <img id="BottonBodyImg" className="rounded-circle mb-5" src={Botton_Estrutura2} alt="Foto da Equipe" width="140" height="140"/>
                            <h4 id="section_item">Estrutura de Ponta</h4>
                            <p id="item_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                        </div>

                        <div className="col-md-4">
                        <img id="BottonBodyImg" className="rounded-circle mb-5" src={Botton_Chefs} alt="Foto da Equipe" width="140" height="140"/>
                            <h4 id="section_item">Eleita a melhor Equipe de Brasilia</h4>
                            <p id="item_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                        </div>
                    </div>

                    

                </div>

            </section>
        </main>
    )
}
export default Body