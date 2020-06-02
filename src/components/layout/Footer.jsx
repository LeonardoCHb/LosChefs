import React from "react"
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <footer className="page-footer font-small unique-color-dark">

            <div Style="background-color: black">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">

                        <div className="col-md-6 col-lg-5 text-center text-mdpleft mb-4 mb-md-0">

                            <h6 className="mb-0 text-light">Acesse Nossas redes sociais para mais novidades!</h6>

                        </div>

                        <div class="col-md-6 col-lg-7 text-center text-md-right">

                            <a className="fb-ic" href="https://facebook.com">
                            <i className="fa fa-facebook-square mr-4"></i>
                            </a>

                            <a className="ins-ic" href="https://instagram.com">
                            <i class="fa fa-instagram"></i>
                            </a>


                        </div>

                    </div>
                </div>
            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class=" font-weight-bold">Los Chefs</h6>

                        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />

                        <p>blalbablalbalblblabllbalbalblablabla</p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase font-weight-bold">FRANQUIAS</h6>
                        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />
                        <p>
                            <NavLink to="" className="footer-link">Los Chefs (SP)</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link">Los Chefs (PR)</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link">Los Chefs (RJ)</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link">Los Chefs (AC)</NavLink>
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Links Úteis</h6>
                        <hr class="deep-red accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />
                        <p>
                            <NavLink to="" className="footer-link">Seja um Investido!</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link">Projetos Sociais</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link">Shipping Rate</NavLink>
                        </p>
                        <p>
                            <NavLink to="" className="footer-link">Podemos Ajudar?</NavLink>
                        </p>

                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" Style="width: 60px;" />
                        <p>
                            <i className="fa fa-home mr-3"></i> Brasilia DF, Lago Sul, BR</p>
                        <p>
                            <i className="fa fa-envelope mr-3"></i> LosChefs@gmail.com</p>
                        <p>
                            <i className="fa fa-phone mr-3"></i> + 55 061 95489321</p>
                        <p>
                        <i className="fa fa-mobile mr-3"></i> + 55 061 95862314</p>

                    </div>


                </div>
            </div>
        </footer>
    )
}
export default Footer