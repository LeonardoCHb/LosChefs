import React from 'react'
import './styles/FacaSeuPedido.css'
import Header from '../layout/Header.jsx'

//funçao que adiciona os items(li) do cardapio no compnente principal do faça seu pedido
function CheckBox(props) {

    return (
        <div class="box">

            <span class="glyphicon glyphicon-ok-circle"></span>
            <svg id={"check-black-" + props.name} data-toggle="collapse" data-target={"." + props.name} class={props.name + " checks collapse mult-collapse bi bi-check-circle-fill"} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <svg id={"check-white-" + props.name} data-toggle="collapse" data-target={"." + props.name} class={props.name + " checks collapse show bi bi-check-circle"} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
            </svg>
        </div>
    )
}

function PutTyperOfFood(props) {
    return (

        <li className="list-group-item d-flex justify-content-between">
            <div className="d-flex div-item w-75">
                <CheckBox name={props.name} />
                <label >
                    <h5 id={props.type + "-" + props.name}>{props.name}</h5>
                    <small class="form-text text-muted">{props.text}</small>
                </label>
            </div>
            <div className="preco h-100 d-flex">
                <p className="text-align-center">{props.preco}</p>
            </div>
        </li>
    )

}

class SeuPedido extends React.Component {

    render() {
        return (
            
        <React.Fragment>
            <Header />
            <main role="main"> 
                <form>
                    <ul className="category-menu list-group">
                        <li className="category-items list-group-item" >
                            <ul id="category-item-01-pizza list-group">
                                <h3>Pizzas</h3>
                                <PutTyperOfFood
                                    type="p"
                                    name="Calabresa"
                                    text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas."
                                    preco="65,50"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="QuatroQueijos"
                                    text="Mussarela, requeijão, parmesão ralado, provolone."
                                    preco="60,70"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="FrangeComRequijão"
                                    text="Frango desfiado, cebola e requeijão"
                                    preco="65,70"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="Margherita"
                                    text="Mussarela, tomate e manjericão."
                                    preco="55,70"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="Pepperoni"
                                    text="Mussarela e pepperoni"
                                    preco="60,50"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="Presunto"
                                    text="Mussarela e presunto"
                                    preco="50,70"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="Napolitana"
                                    text="Mussarela, tomate e parmesão ralado."
                                    preco="55,70"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="Américana"
                                    text="Mussarela, pepperoni, champignon, cebola e pimentão verde."
                                    preco="80,00"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="FrangoPhiladelphia"
                                    text="Mussarela, frango desfiado, Philadelphia e parmesão ralado."
                                    preco="85,70"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="Toscana"
                                    text="Mussarela, calabresa, requeijão, azeitona preta, cebola, tomate e manjericão."
                                    preco="75,00"
                                />
                                <PutTyperOfFood
                                    type="p"
                                    name="DeLuxe"
                                    text="Mussarela, pepperoni, calabresa, champignon, cebola e pimentão verde."
                                    preco="85,70"
                                />
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
            </main>
        </React.Fragment>
        )
    }
}

export default SeuPedido