import React from 'react'


class Reservas extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "1"
        }
    }

    render(){
        return (<h1>Omoshiroi {this.state.name}</h1>)
    }
}

export default Reservas