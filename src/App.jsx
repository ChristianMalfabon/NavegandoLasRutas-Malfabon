import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
//import BotonMultiuso from './components/Ejemplos/BotonMultiuso'
import NavBar from './components/NavBar'

import{BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer'

function App() {

  const guardarData = () =>{
    alert('Datos Guardados')
  }

  const borrarData = () =>{
    console.log('borrado con exito')
  }

  return (
    <BrowserRouter>
    {/* <BotonMultiuso texto="Guardar" estilo="red-button" manejadorDelOnclick={guardarData} />  
    <BotonMultiuso texto="Borrar" estilo="delete-button" manejadorDelOnclick={borrarData} />
    */}
    <NavBar/> 
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi app" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estás en la categoría:  " />} />
        <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
        <Route path= '*'  element= {<Error/>} />
      </Routes>
    <ItemDetailContainer/>
    <ItemCount stock={12} /> 
    <ItemCount stock={10} /> 
    
    </BrowserRouter>
  )
}

export default App
