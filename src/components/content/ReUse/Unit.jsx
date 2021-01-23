import React from 'react'
import './Unit.css'

const HandleClick = (Nome) => {
    return 
}
const Unit = ({Nome}) => {
    return (
        <div onClick={HandleClick(Nome)} id="MyUnit"><span>{Nome}</span></div>
    )
}

export default Unit;