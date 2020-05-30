import React from 'react'
import './styles/FacaSeuPedido.css'

//funçao que adiciona os items(li) do cardapio no compnente principal do faça seu pedido
function CheckBox(props) {
    return (
        <label class="container">
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </label>
    )
}

function PutTyperOfFood(props) {
        return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="d-flex div-item w-75">
                    <CheckBox />
                    <label >
                        <h5 id={props.type + "-" + props.name}>{props.name}</h5>
                        <small class="form-text text-muted">{props.text}</small>
                    </label>
                </div>
                <div className="preco h-100 d-flex">
                    <p className="text-align-center">100,50</p>
                </div>
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
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTyperOfFood
                                type="p"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-02-lasagna list-group">
                            <h3>lasanha(Lasagna)</h3>
                            <PutTyperOfFood
                                type="l"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTyperOfFood
                                type="l"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-03-calzone list-group">
                            <h3>Calzone</h3>
                            <PutTyperOfFood
                                type="c"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTyperOfFood
                                type="c"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-04-drinks list-group">
                            <h3>Bebidas(Drinks)</h3>
                            <PutTyperOfFood
                                type="b"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTyperOfFood
                                type="b"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-04-deserts list-group">
                            <h3>Sobremesas(Deserts)</h3>
                            <PutTyperOfFood
                                type="d"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTyperOfFood
                                type="d"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                </ul>
            </form >
        )
    }
}

export default SeuPedido