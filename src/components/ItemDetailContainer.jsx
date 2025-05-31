import React, { useEffect, useState } from 'react'
import { getProducts } from '../Mock/asyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

    const ItemDetailContainer =() => {

        const [detalle, setDetalle] = useState({})
        const param = useParams()
        console.log(param)

            useEffect(()=>{
                getProducts()
                .then((response)=> setDetalle(response.find((item)=> item.id === '03')) )
                .catch((error)=> console.log(error) )
            }, [])

            //  useEffect(()=>{
            //     getOneProduct('02')
            //     .then((response)=> setDetalle(response)) 
            //     .catch((error)=> console.log(error) )
            // }, [])

            

        return (
          <div> <ItemDetail detalle={detalle} /></div>
        )
    }

    export default ItemDetailContainer