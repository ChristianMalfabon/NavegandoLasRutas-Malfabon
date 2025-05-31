import "../css/Items.css"
import { useEffect, useState } from "react"

const ItemCount =({stock}) =>{
    const [count, setCount] = useState(1)
    //logica, funciones, hooks

    //explicación useeffect
    // llevan array dependencia. si no se pone es infinito, si se pone vacío es una vez
    // si se pone escuchando un dato, se ejecuta siempre que cambie el dato 
    // el más comun y se ejecuta una sola vez... APIS

    useEffect(()=>{

    },[])

    //se ejecuta cuando se monta el componente y cada vez que se modifica lo que está escuchando


    const restar =() =>{
        if (count>0){
        setCount(count -1)
        }
    }

    const sumar =() =>{
        if (count<stock){
        setCount(count+1)
        }
    }

    return(
        
        <div className="contadores" >
            <div className="cantidad" >
                <button className="btn-menos" onClick={restar} >-</button>
                <span  >{count}</span>
                <button className="btn-mas" onClick={sumar} >+</button>
            </div>
            <button className="btn-primary" >Agregar al carrito</button>
        </div>
        

    )
}
// exportamos componentes
export default ItemCount