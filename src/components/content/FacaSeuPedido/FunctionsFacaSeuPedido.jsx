import React from "react"

class MenuChoose extends React.Component {
    render() {
        return (<React.Fragment>
            <li className="each-item list-group-item d-flex justify-content-between w-100">
                <div className="d-flex div-item w-75">

                    <div class="box">
                        <span class="glyphicon glyphicon-ok-circle"></span>
                        <svg id={"check-black-" + this.props.name} data-toggle="collapse" data-target={"." + this.props.name} class={this.props.name + " checks collapse bi bi-check-circle-fill"} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <svg id={"check-white-" + this.props.name} data-toggle="collapse" data-target={"." + this.props.name} class={this.props.name + " checks collapse show bi bi-check-circle"} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                        </svg>
                    </div>

                    <label className="">
                        <h5 id={this.props.type + "-" + this.props.name}>{this.props.name}</h5>
                        <small class="form-text text-muted">{this.props.text}</small>
                    </label>
                </div>
                <div className="preco w-10 d-flex">
                    <p className="text-align-center w-10">{this.props.preco}</p>
                </div>
            </li>

            <div id={"size-" + this.props.name} className={this.props.name + " choose-size collapse"}>
                <ul>
                    <li className="d-flex justify-content-between">
                        <span className="a-size w-25" data-toggle="collapse" data-target={"." + this.props.name}>Grande</span>
                        <p className="preco-tg w-75">{parseFloat(this.props.preco) + parseFloat(5) + "0"}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span className="a-size w-25" data-toggle="collapse" data-target={"." + this.props.name}>Média</span>
                        <p className="preco-tg w-75">{this.props.preco}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span className="a-size w-25" data-toggle="collapse" data-target={"." + this.props.name}>Pequena</span>
                        <p className="preco-tg w-75">{parseFloat(this.props.preco) - parseFloat(5) + "0"}</p>
                    </li>
                </ul>
            </div>
        </React.Fragment >)
    }
}

export default MenuChoose