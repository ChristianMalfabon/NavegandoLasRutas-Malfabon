import { useEffect, useState } from "react"
import {getProducts} from "../Mock/asyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) =>{
    const {greeting}=props

    const [data, setData]= useState([])
    const {categoryId}= useParams()
    console.log('Soy el itemListContainer')

    useEffect (()=>{
       
        getProducts()
        .then((respuesta)=> {
            if(categoryId){
                //filtro 
                setData(respuesta.filter((prod)=> prod.category === categoryId))
            }else{
                //sin filtro
                setData(respuesta)
            }
        })
        .catch((error)=> console.error(error))

    },[categoryId])
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