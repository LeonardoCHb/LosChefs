import React from 'react'
import '../styles/FacaSeuPedido.css'
import Header from '../../layout/Header.jsx'
import Footer from '../../layout/Footer'
import MenuChooseFood from './MenuChooseFood'
import MenuChooseDD from './MenuChooseDD'


class SeuPedido extends React.Component {
    render() {
        return (
            <div id="cardapio">
                <Header />
                <main role="main" className="container py-5 my-5" >
                    <form>
                        <ul className="category-menu list-group">
                            <li className="category-items list-group-item" >
                                <ul className="category-item-01-pizza list-group">
                                    <h3>Pizzas</h3>
                                    <MenuChooseFood
                                        type="p"
                                        name="Calabresa"
                                        text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas."
                                        preco="65.50"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="QuatroQueijos"
                                        text="Mussarela, requeijão, parmesão ralado, provolone."
                                        preco="60.70"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="FrangeComRequijão"
                                        text="Frango desfiado, cebola e requeijão"
                                        preco="65.70"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="Margherita"
                                        text="Mussarela, tomate e manjericão."
                                        preco="55.70"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="Pepperoni"
                                        text="Mussarela e pepperoni"
                                        preco="60.50"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="Presunto"
                                        text="Mussarela e presunto"
                                        preco="50.70"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="Napolitana"
                                        text="Mussarela, tomate e parmesão ralado."
                                        preco="55.70"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="Américana"
                                        text="Mussarela, pepperoni, champignon, cebola e pimentão verde."
                                        preco="82.50"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="FrangoPhiladelphia"
                                        text="Mussarela, frango desfiado, Philadelphia e parmesão ralado."
                                        preco="85.70"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="Toscana"
                                        text="Mussarela, calabresa, requeijão, azeitona preta, cebola, tomate e manjericão."
                                        preco="75.50"
                                    />
                                    <MenuChooseFood
                                        type="p"
                                        name="DeLuxe"
                                        text="Mussarela, pepperoni, calabresa, champignon, cebola e pimentão verde."
                                        preco="85.70"
                                    />
                                </ul>
                            </li>
                            <li className="category-items list-group-item" >
                                <ul className="category-item-02-lasagna list-group">
                                    <h3>lasanha(Lasagna)</h3>
                                    <MenuChooseFood
                                        type="l"
                                        name="Bolonhesa"
                                        text="Massa italiana com carne moída artesanal e um molho bolonhesa"
                                        preco="40.50"
                                    />
                                    <MenuChooseFood
                                        type="l"
                                        name="FrangoComRequeijão"
                                        text="Massa italiana com frango assado e um molho de requeijão com alho poró"
                                        preco="45.50"
                                    />
                                    <MenuChooseFood
                                        type="l"
                                        name="QuatroQueijos"
                                        text="Massa italiana com parmesão,mussarela,requeijão e provolone"
                                        preco="40.50"
                                    />
                                    <MenuChooseFood
                                        type="l"
                                        name="PeitoDePeru"
                                        text="Mozarela, linguiça calabresa artesanal, molho de tomates frescos e azeitonas pretas."
                                        preco="42.50"
                                    />
                                    <MenuChooseFood
                                        type="l"
                                        name="Calabresa"
                                        text="Massa italiana com finas fatias de calabresa artesanal,mussarela e parmesão"
                                        preco="42.50"
                                    />
                                    <MenuChooseFood
                                        type="l"
                                        name="CamarãoAoMolhoBranco"
                                        text="Massa italiana com cremoso molho camarões e alho poró, mussarela e parmesão."
                                        preco="50.00"
                                    />
                                </ul>
                            </li>
                            <li className="category-items list-group-item" >
                                <ul className="category-item-04-drinks list-group">
                                    <h3>Bebidas(Drinks)</h3>
                                    <MenuChooseDD
                                        type="b"
                                        name="ÁguaNatural-300ml"
                                        text=""
                                        preco="7.50"
                                    />
                                    <MenuChooseDD
                                        type="b"
                                        name="ÁguaComGás-300ml"
                                        text=""
                                        preco="8.50"
                                    />
                                    <MenuChooseDD
                                        type="b"
                                        name="CastilloMurviedro-Espanha"
                                        text=""
                                        preco="75.00"
                                    />
                                    <MenuChooseDD
                                        type="b"
                                        name="Corinto-Chile"
                                        text=""
                                        preco="73.00"
                                    />
                                    <MenuChooseDD
                                        type="b"
                                        name="CatenaMalbec-2017"
                                        text=""
                                        preco="185.00"
                                    />

                                </ul>
                            </li>
                            <li className="category-items list-group-item" >
                                <ul className="category-item-04-deserts list-group">
                                    <h3>Sobremesas(Deserts)</h3>
                                    <MenuChooseDD
                                        type="d"
                                        name="PetitGâteau"
                                        text=""
                                        preco="20.00"
                                    />
                                    <MenuChooseDD
                                        type="d"
                                        name="MousseDeLimão"
                                        text=""
                                        preco="15.00" />
                                    <MenuChooseDD
                                        type="d"
                                        name="CheeseCake"
                                        text=""
                                        preco="20.00" />
                                    <MenuChooseDD
                                        type="d"
                                        name="TortaDeChocolate"
                                        text=""
                                        preco="15,00" />
                                </ul>
                            </li>
                        </ul>
                    </form >
                </main>
                <Footer />
            </div>
        )
    }
}

export default SeuPedido