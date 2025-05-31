import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../Mock/asyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

    const ItemDetailContainer =() => {

        const [detalle, setDetalle] = useState({})
        const {itemId} = useParams()
        

            // useEffect(()=>{
            //     getProducts()
            //     .then((response)=> setDetalle(response.find((item)=> item.id === '03')) )
            //     .catch((error)=> console.log(error) )
            // }, [])

             useEffect(()=>{
                getOneProduct(itemId)
                .then((response)=> setDetalle(response)) 
                .catch((error)=> console.log(error) )
            }, [])

            

        return (
          <div> 
            <ItemDetail detalle={detalle} />
          </div>
        )
    }

    export default ItemDetailContainer