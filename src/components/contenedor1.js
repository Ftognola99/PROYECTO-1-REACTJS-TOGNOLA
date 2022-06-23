import {useState} from "react";
import Hello from "./hello";


function Contenedor() {
    const [name, setName] = useState ('world')
    return(
        <>
            <Hello name></Hello>
             <button onClick={() => setName("mundo")}>Click me!</button> 
        </>
    )
}

export default Contenedor;

