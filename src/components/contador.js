import { useState } from "react";

function Contador(){
    const [num, setNum] =useState(0);
    
    const sumar= () => {
        setNum(num + 1)
    }

    const resta= () =>{
        setNum(num - 1)

    }

    const reiniciar= () =>{
        setNum(0)
    }

    return(

        <>
        <p>{num}</p>     
        <button onClick={sumar}>suma!</button>  
        <button onClick={resta}>resta!</button>
        <button onClick={reiniciar}>reiniciar!</button>
        </>

    )
}


export default Contador;





