const BotonMultiuso = ({texto, estilo, manejadorDelOnclick}) => {
   // console.log(props)

    //destructurar para no poner tantos props
    //const {texto, estilo, manejadorDelOnclick}= props

    return(
        <button className={estilo} onClick={manejadorDelOnclick}
         >{texto}</button>
    )
}

export default BotonMultiuso