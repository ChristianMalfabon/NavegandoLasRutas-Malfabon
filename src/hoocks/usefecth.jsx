import { useEffect, useState } from "react"

export const usefetch =(url) =>{
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false)
    const [eror, setError] = useState(null)

    useEffect(() =>{
        setLoading(true)
        fetch(url)
        .then((res)=> res.json())
        .then((response)=> setData(response))
        .catch((error)=> setError(error))
        .finally(() => setLoading(false))

    },[url])

    return{data, loading, error}

}