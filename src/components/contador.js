import { useState } from "react";

function Contador(){
    const [num, setNum] =useState(0)
    
    const sumar= () => {
        setNum(num+1)
    }

    const restarnum= () =>{
        setNum(num -1)

    }
    return(

        <>
        <p>{num}</p>     
        <button oneClick={sumar}>suma!</button>   

        
        </>

    )
}


export default Contador;





