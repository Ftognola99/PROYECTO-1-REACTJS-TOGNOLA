import { useState } from "react";

function Contador(){
    const [num, setNum] =useState(0)
    
    const sumar= () => {
        setNum(num+1)
    }

    const resta= () =>{
        setNum(num -1)

    }

    const reiniciar= () =>{
        setNum(0)
    }

    return(

        <>
        <p>{num}</p>     
        <button oneClick={sumar}>suma!</button>  
        <button oneClick={resta}>resta!</button>
        <button oneClick={reiniciar}>reiniciar!</button>
        </>

    )
}


export default Contador;





