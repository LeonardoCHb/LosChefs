import React, {useRef} from 'react'
import './Unit.css'


const Unit = ({Nome}) => {
    const DivRef = useRef();
    const HandleClick = () => {
        // DivRef.current.style
        if(DivRef.current.style.color === "red"){
            DivRef.current.style.backgroundColor = "black";
            DivRef.current.style.color = "white";
            DivRef.current.style.borderColor = "black";
        }  
        DivRef.current.style.backgroundColor = "#ebebeb";
        DivRef.current.style.color = "red";
        DivRef.current.style.borderColor = "red";
        
    }
    return (
        <div ref={DivRef} onClick={HandleClick} className="MyUnit"><span>{Nome}</span></div>
    )
}

export default Unit;

