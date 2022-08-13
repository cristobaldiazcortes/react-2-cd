import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Formulario from './Components/Formulario';
import BotonFinal from './Components/BotonFinal';
import { useState } from 'react';


function App() {
  const [nombre, setNombre] = useState('')
  const [password] = useState('252525' )
  const [passwordvalida, setPasswordvalida] = useState(false)
  
  //const actualizarNombre = (e) => setNombre(e.target.value);

  return (
  <div className='container'>
    < Formulario 
    titulo = "Formulario de ingreso"
    descripcion = "ingresa un nombre"
    actualizarNombre = {(e) => setNombre(e.target.value)}
    nombre = {nombre}
    password ={password}
    setPasswordvalida = {setPasswordvalida} 
    />
    { passwordvalida  ? <BotonFinal/>: null } 
    
  </div>  
  );
  }
  export default App;