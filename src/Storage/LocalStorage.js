function CreatePizzaria(nome,endereço,estrelas){
    const Pizzaria = {
        Nome: nome,
        Endereço: endereço,
        Estrelas: estrelas
    }
    return Pizzaria;
}

const PizzaAsaNorte = CreatePizzaria('Asa Norte','Quadra CLN 210 Bloco A', 4.5);//70852510
const PizzaAsaSul = CreatePizzaria('Asa Sul', 'SBS Quadra 1 BLoco A Lote 31', 4.6);//70073-900
const PizzaLogoNorte = CreatePizzaria('Lago Norte', 'Quadra SMLN ML Trecho 6', 4.8); //71540060
const PizzaLagoSul = CreatePizzaria('Lago Sul', 'Condomínio do Lago Sul (St Hab Dom Bosco)', 4.8);//71676250
const PizzaNoroeste = CreatePizzaria('Noroeste', 'Quadra CRNW 506 Bloco A Lote 2', 4.7);//70684510
const PizzaSudoeste = CreatePizzaria('Sudoeste', 'SQSW 100 Bloco F', 4.7);//70670016
export const PizzariasQueue = [{Nome:"Asa Norte",Cep:70852510},{Nome:"Asa Sul",Cep:70073900},{Nome:"Lago Norte",Cep:71540060},{Nome:"Lago Sul",Cep:71676250},{Nome:"Noroeste",Cep:70684510},{Nome:"Sudoeste",Cep:70670016}]

export default function SetLocalStorage(){
    localStorage.setItem('70852510', JSON.stringify(PizzaAsaNorte))
    localStorage.setItem('70073900', JSON.stringify(PizzaAsaSul))
    localStorage.setItem('71540060', JSON.stringify(PizzaLogoNorte))
    localStorage.setItem('71676250', JSON.stringify(PizzaLagoSul))
    localStorage.setItem('70684510', JSON.stringify(PizzaNoroeste))
    localStorage.setItem('70670016', JSON.stringify(PizzaSudoeste))
}
export function GetLocalStorage(Cep){
    const LocalItem = localStorage.getItem(Cep);
    return JSON.parse(LocalItem);
}
export function SearchByLocation(Input){
    const input = String.prototype.toLowerCase(Input)
    PizzariasQueue.map(obj => {
        const Nome = String.prototype.toLowerCase(obj.nome)
        if(Nome === input)
            return GetLocalStorage(obj.Cep)
    })

}


