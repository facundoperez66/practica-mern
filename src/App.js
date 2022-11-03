import './App.css';
import InformacionGneral from './components/InformacionGeneral';
import RestoDatos from './components/RestoDatos';
import Flechita from './components/Flechita';
import data from './data/datos.Eventos'
import { useState } from 'react';
function App() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false)

  let [numeroACambiar, setNumeroACambiar] = useState(0)

  let hide = () =>{
    setMostrarOcultar(!mostrarOcultar)
  }
 
  let next = (e) =>{
    if(numeroACambiar<data.length-1){
    setNumeroACambiar(++numeroACambiar)
    }else{
      setNumeroACambiar(0)
    }
  }
  let prev = (e) =>{
    if(numeroACambiar>0){
    setNumeroACambiar(--numeroACambiar)
    }else{
      setNumeroACambiar(data.length-1)
    }
  }
  return (
    <div className='card black'>
      <InformacionGneral categoria = {data[numeroACambiar].category} imagen = {data[numeroACambiar].image}/>
      
      {
        mostrarOcultar ?
        (
        <>
        
        <RestoDatos datos = {data[numeroACambiar].name} />
        <RestoDatos datos = {data[numeroACambiar].description}/>
        <p className='gray flex j-center a-center'onClick={hide}>ocultar info</p>
        </>
        ):
        (<p className='gray flex j-center a-center'onClick={hide}>mostrar info</p>)
      }
      
      <div className='flex j-center a-center'>
      <Flechita verbo ='Anterior' estilo= 'r25' onClick={prev}/>
      <Flechita verbo ='Siguiente' estilo= 'l25' onClick={next} />
      
      </div>
    </div>
  )
}

export default App

//<div className='gray flecha l25 flex j-center a-center'> siguiente </div>