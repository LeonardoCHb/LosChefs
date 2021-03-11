function CreatePizzaria(nome,cep,endereco,estrelas){
    const Pizzaria = {
        Nome: nome,
        Cep: cep,
        Endereco: endereco,
        Estrelas: estrelas
    }
    return Pizzaria;
}

const PizzaAsaNorte = CreatePizzaria('Asa Norte',"70852510",'Quadra CLN 210 Bloco A', 4.5);//70852510
const PizzaAsaSul = CreatePizzaria('Asa Sul',"70073900", 'SBS Quadra 1 BLoco A Lote 31', 4.6);//70073-900
const PizzaLogoNorte = CreatePizzaria('Lago Norte',"71540060", 'Quadra SMLN ML Trecho 6', 4.8); //71540060
const PizzaLagoSul = CreatePizzaria('Lago Sul',"71676250",'Condomínio do Lago Sul (St Hab Dom Bosco)', 4.8);//71676250
const PizzaNoroeste = CreatePizzaria('Noroeste',"70684510", 'Quadra CRNW 506 Bloco A Lote 2', 4.7);//70684510
const PizzaSudoeste = CreatePizzaria('Sudoeste',"70670016", 'SQSW 100 Bloco F', 4.7);//70670016

export default function SetLocalStorage(){
    localStorage.setItem('0', JSON.stringify(PizzaAsaNorte))
    localStorage.setItem('1', JSON.stringify(PizzaAsaSul))
    localStorage.setItem('2', JSON.stringify(PizzaLogoNorte))
    localStorage.setItem('3', JSON.stringify(PizzaLagoSul))
    localStorage.setItem('4', JSON.stringify(PizzaNoroeste))
    localStorage.setItem('5', JSON.stringify(PizzaSudoeste))
}

export function ArrayOfData(){
    var Array = [];
    for(let i = 0; i < localStorage.length; i++){
        Array.push(JSON.parse(localStorage.getItem(JSON.stringify(i))))
    }
    return Array;
}