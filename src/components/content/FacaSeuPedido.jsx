import React from 'react'

//funçao que adiciona os items(li) do cardapio no compnente principal do faça seu pedido
function PutTyperOfFood(props) {
        return (
            <li className="list-group-item d-flex flex-row">
                <input type="checkbox" className=""/>
                <div>
                    <label>
                        <h5>{props.name}</h5>
                        <small class="form-text text-muted">{props.text}</small>
                    </label>
                </div>
                <span className="">preço</span>
            </li>
        )
        
    }

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
                            <h3>Pizzas</h3>
                                <PutTyperOfFood 
                                type="p" 
                                name="Calabresa" 
                                text="é isso"/>
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
                            <li className="list-group-item"><h3>Sobremesas(Deserts)</h3></li>
                        </ul>
                    </li>
                </ul>
            </form >
        )
    }
}

export default SeuPedido