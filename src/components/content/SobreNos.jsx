import React from 'react'
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import TL_01 from "../img/TL_01.jpg"

function SobreNos() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-main">
                            <ul className="stepper stepper-vertical timeline timeline-simple timeline-images pl-0">
                                <li>
                                    <a href="/">
                                        <span className="circle red lighten-1">1</span>
                                    </a>

                                    <div className="step-content ml-3 p-0 hoverable">
                                        <img className="img-fluid" src={TL_01} alt="Primeira img" />
                                        <h4 className="px-4 mb-0">Inauguração da Pizzaria</h4>
                                        <p className="px-4 mb-0"><i className="fa fa-clock" aria-hidden="true"></i>1932</p>
                                        <p class="mb-0 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default SobreNos