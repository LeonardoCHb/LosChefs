import React from 'react'

import Body from '../layout/Body'
import Header from '../layout/Header'
import Footer from '../layout/Footer'


function Home (){
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home