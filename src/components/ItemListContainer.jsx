import { useEffect, useState } from "react"
import {getProducts} from "../Mock/asyncService"
import ItemList from "./ItemList"

const ItemListContainer = (props) =>{
    const {greeting}=props

    const [data, setData]= useState([])
    console.log('Soy el itemListContainer')

    useEffect (()=>{
        // console.log(getProducts(), 'promesa')
        //ejecutar la función e promesa
        getProducts()
        .then((respuesta)=> setData(respuesta))
        .catch((error)=> console.error(error))

    },[])
    //Ejemplo de promise

    // const error = true
    // const ejemploPromise = new Promise ((resolve, reject) => {
    //     if (error) {
    //         reject('No disponible')
    //     } else {
    //         resolve ('Elemento agregado')
    //     }
    // } )
    // console.log(ejemploPromise, 'promise')
    console.log(data)
    return(
        <div>
            <h1>{greeting}</h1>
            {/* {data.map((prod)=> <p key={prod.id} >{prod.name}</p> )} */} 
            <ItemList data={data} />

        </div>
    )

}
export default ItemListContainer