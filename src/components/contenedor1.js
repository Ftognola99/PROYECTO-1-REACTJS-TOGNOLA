import {useState} from "react";
import hello from "./hello";
import Hello from "./hello";


function Contenedor() {
    const [name, setName] = useState ('world')
    return(
        <>
            <Hello name></Hello>
            <button oneClick={() => setName("mundo")}>Click me!</button>
        </>
    )
}

export default Contenedor;

