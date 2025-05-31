const products =[{
    id:'01',
    name: 'Regalo del día',
    price: 400,
    dscription:'Desayuno ideal para los amantes del café, va acompañado de:',
    stock: 10,
    img: '../desayuno_cafe_jugo.jpeg',
    category: 'nuevos'
    // si son 50 fotos no ponerlas todas en el proyecto, se recomienda HOTS de imagen 
    //post image y copias el enlace directo 
    // si son pocas fotos ponerlas en la carpeta public

},
{
    id:'02',
    name: 'Un toque de fresa',
    price: 450,
    dscription:'Un toque de fresa para despertar todos los sentidos:',
    stock: 20,
    img: '../desayuno_fresas.jpeg',   
    category: 'los favoritos'
},
{
    id:'03',
    name: 'Sabor de hogar',
    price: 480,
    description: 'La porción ideal para disfrutar con esa persona especial',
    stock: 20,
    img:'https://picsum.photos/200', 
    category: 'promociones'
},
{
    id: '04',
    name: 'Chispas de chocolate',
    price: 470,
    description: 'Ponle chispa al día con nuestro delicioso desayuno',
    stock: 20,
    img: 'https://www.kokoro3.com/cdn/shop/collections/IMG_20210514_125413487_HDR_1.jpg?v=1648619230',
    category: 'los favoritos'
}

]

let error = false
export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            } else{
                reject('Hubo un error')
            }
        }, .0500)
    })
}

export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        }, .5000)
    })
}

