import { useState } from "react";

function Contador(){
const [suma, setSuma] = useState(0)
const [otraSuma, setOtrasuma] = useState(0)

useEffect(()=>{
    console.log('efecto');
})

userEffect(()=>{
    console.log('efecto en mounting');
})

useEffect(()=>{
    console.log('efecto en cambio de suma');
})

const onClickHander=()=>{
    console.log('click onClickHander')
    setSuma(suma + 1)
}

const otraSumaHandler = () =>{
    console.log('click onOtraSumaHandler')
    setOtrasuma(Otrasuma + 1 )
}
return (
    <div>
        <button onClick={onClickHander} classname="btn">Click Aqui!!</button> 
        <button onClick={otraSumaHandler} classname="btn">Otra suma</button> 
    </div>
)
    
}


export default Contador;





