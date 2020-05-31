import React from 'react'
import './styles/FacaSeuPedido.css'

//funçao que adiciona os items(li) do cardapio no compnente principal do faça seu pedido
/*function CheckBox(props) {
    return (
        <label class="container w-1">
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </label>
    )
}*/

function PutTypeOfFood(props) {
        return (
            <li className="li-container list-group-item d-flex justify-content-between">
                <div className="div-item w-75">
                    <i class="fas fa-check"></i>
                    <label className="ml-5 texts-food">
                        <h5 id={props.type + "-" + props.name}>{props.name}</h5>
                        <small class="form-text text-muted">{props.text}</small>
                    </label>
                </div>
                <div className="preco h-100">
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
                            <PutTypeOfFood
                                type="p"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTypeOfFood
                                type="p"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-02-lasagna list-group">
                            <h3>lasanha(Lasagna)</h3>
                            <PutTypeOfFood
                                type="l"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTypeOfFood
                                type="l"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-03-calzone list-group">
                            <h3>Calzone</h3>
                            <PutTypeOfFood
                                type="c"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTypeOfFood
                                type="c"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-04-drinks list-group">
                            <h3>Bebidas(Drinks)</h3>
                            <PutTypeOfFood
                                type="b"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTypeOfFood
                                type="b"
                                name="4Queijos"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                        </ul>
                    </li>
                    <li className="category-items list-group-item" >
                        <ul id="category-item-04-deserts list-group">
                            <h3>Sobremesas(Deserts)</h3>
                            <PutTypeOfFood
                                type="d"
                                name="Calabresa"
                                text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas." />
                            <PutTypeOfFood
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