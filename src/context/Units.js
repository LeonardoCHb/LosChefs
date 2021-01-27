import React, {createContext} from 'react'
export const UnitsData = [
    {
        CEP: 70720600,
        Nome: "dfghdfg",
        Endereço: "",
        Estrelas: 4.8,
        TempoDePreparo: "",
        Horario: ""
    },
    {
        CEP: 70720600,
        Nome: "dfghdf",
        Endereço: "",
        Estrelas: 4.7,
        TempoDePreparo: "",
        Horario: ""
    },
    {
        CEP: 70720600,
        Nome: "dfghdf",
        Endereço: "",
        Estrelas: 4.6,
        TempoDePreparo: "",
        Horario: ""
    },
    {
        CEP: 70720600,
        Nome: "asdfasd",
        Endereço: "asdfasdf",
        Estrelas: 4.5,
        TempoDePreparo: "",
        Horario: ""
    },
    {
        CEP: 70720600,
        Nome: "asdfaa",
        Endereço: "asdfas",
        Estrelas: 4.4,
        TempoDePreparo: "",
        Horario: ""
    },
    {
        CEP: 70720600,
        Nome: "hghgh",
        Endereço: "ghghgh",
        Estrelas: 4.3,
        TempoDePreparo: "",
        Horario: ""
    }
]
export const UnitsContext = createContext([{}]);

export default function UnitsProvider({children}) {
    return(
        <UnitsContext.Provider value={UnitsData} >
            {children}
        </UnitsContext.Provider>
    )
}