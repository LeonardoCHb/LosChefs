import React from 'react'
import { Switch, Route } from 'react-router-dom'

import  Home  from '../content/Home'
import  SeuPedido  from '../content/FacaSeuPedido/FacaSeuPedido'
import Contatos from '../content/Contatos'
import SobreNos from '../content/SobreNos'
import Reservas from '../content/Reservas'

 export const Routes = () =>{
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/SeuPedido" component={SeuPedido} />
            <Route path="/Cardapio" component={Reservas} />
            <Route path="/Contatos" component={Contatos} />
            <Route path="/SobreNos" component={SobreNos} />
            <Route component={() => <h1>Page 404!</h1>} />   
        </Switch>
    )
}