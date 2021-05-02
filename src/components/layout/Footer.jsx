import React from "react"
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

import './styles/Footer.css';

function Footer() {
    return (
        <footer className="md-6" id="main_footer">

            <div Style="background-color: red">
                <div className="container" id="social_footer">
                    <div className="row py-3 d-flex align-items-center">

                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">

                            <h6 className="mb-0 text-light" id="footer_main">Acesse Nossas redes sociais para mais novidades!</h6>

                        </div>

                        <div className="col-md-4 col-lg-7 text-center text-md-right">

                            <a className="fb-ic" href="https://facebook.com" >
                                <i className="icone fa fa-facebook-square mr-4" id="footer_text" ></i>
                            </a>

                            <a className="ins-ic" href="https://instagram.com" >
                                <i className="icone fa fa-instagram" id="footer_text" ></i>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
            <div className="container text-center text-md-left mt-3" >

                <div className="row mt-2">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                        <h6 id="footer_title">Los Chefs</h6>

                        <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />

                        <p id="footer_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 id="footer_title">Franquias</h6>
                        <hr className="deep-red accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Los Chefs (SP)</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Los Chefs (PR)</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Los Chefs (RJ)</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Los Chefs (AC)</NavLink>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 id="footer_title">Links Úteis</h6>

                        <hr className="deep-red accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Seja um Investidor!</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Projetos Sociais</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Shipping Rate</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link" id="footer_text">Podemos Ajudar?</NavLink>
                        </p>

                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                        <h6 id="footer_title">Contatos</h6>
                        <hr className="deep-red accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />

                        <p id="footer_text"><i className="fa fa-home mr-3" id="footer_text"></i> Brasilia DF, Lago Sul, BR</p>

                        <p id="footer_text"><i className="fa fa-envelope mr-3" id="footer_text"></i> LosChefs@gmail.com</p>

                        <p id="footer_text"><i className="fa fa-phone mr-3" id="footer_text"></i> + 55 061 95489321</p>

                        <p id="footer_text"><i className="fa fa-mobile mr-3" id="footer_text"></i> + 55 061 95862314</p>

                    </div>

                </div>
            </div>

            <div className="footer-copyright text-center pt-2 " Style="background-color: white" id="footer_botton"><h6>© 2020 Copyright:Los Chefs</h6></div>
        </footer>
    )
}
export default Footer