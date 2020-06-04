import React from 'react'
import './styles/SobreNos.css'
import Header from "../layout/Header"
import Footer from "../layout/Footer"

import TL_01 from "../img/TL_01.jpg"
import TL_03 from "../img/TL_03.jpg"
import TL_04 from "../img/TL_4.jpg"
import TL_05 from "../img/TL_5.jpg"

function SobreNos() {
    return (
        <React.Fragment>
        <Header />
        <div className="container py-5">
            <h4 className="tl_title">Linha do Tempo</h4>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><img className="rounded-circle mb-5" src={TL_01} alt="Foto da Equipe" width="169" height="169"/></div>
                                <div className="content">
                                    <span className="year">1968-1992</span>
                                    <h4 className="title">Inauguração</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><img className="rounded-circle mb-5" src={TL_03} alt="Foto da Equipe" width="169" height="169"/></div>
                                <div className="content">
                                    <span className="year">1992-2006</span>
                                    <h4 className="title">Reconhecido em todo solo Nacional</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><img className="rounded-circle mb-5" src={TL_05} alt="Foto da Equipe" width="169" height="169"/></div>
                                <div className="content">
                                    <span className="year">2006-2011</span>
                                    <h4 className="title">Milhares de Franquias sao espalhadas pelo mundo</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><img className="rounded-circle mb-5" src={TL_04} alt="Foto da Equipe" width="169" height="169"/></div>
                                <div className="content">
                                    <span className="year">2011-2020</span>
                                    <h4 className="title">Web Developer</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </React.Fragment >
    )
}

export default SobreNos