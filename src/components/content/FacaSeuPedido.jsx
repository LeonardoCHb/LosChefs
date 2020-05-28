import React from 'react'

class SeuPedido extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <form>
                <ul className="category-menu list-group">
                    <li className="category-items list-group-item" >
                        <ul id="category-item-01-pizza list-group">
                            <li className="list-group-item"><h3>Pizzas</h3></li>
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-02-lasagna list-group">
                            <li className="list-group-item"><h3>lasanha(Lasagna)</h3></li>
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-03-calzone list-group">
                            <li className="list-group-item"><h3>Calzone</h3></li>
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-04-drinks list-group">
                            <li className="list-group-item"><h3>Bebidas(Drinks)</h3></li>
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-04-deserts list-group">
                            <li className="list-group-item"><h3>Sobremesas(Desests)</h3></li>
                        </ul>
                    </li>
                </ul>
            </form >
        )
    }
}

export default SeuPedido