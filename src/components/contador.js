import React ,{ useState } from "react"

const ItemCounter = ({stock,initial,onAdd}) => {
    const [contador,setContador] = useState(initial)
    
}

const fnSumar =() => {
    if(contador < stock){
        setContador(contador + 1)
    }
}

const fnRestar = () => {
    if(contador > stock){
        setContador(contador - 1)
    }
}

return (
    <>
    <div>
        <button onClick={fnrestar}> click aqui para restar!!  </button>
        <span>{contador}</span>
        <button onClick={fnSumar}>Click aqui para sumar!!</button>
    </div>
    <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito!!</button>
    
    </>
    
)






export default Contador;





