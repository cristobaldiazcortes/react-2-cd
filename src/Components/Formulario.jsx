import React from 'react';
import Form from 'react-bootstrap/Form';


function Formulario(props) {
    const validacionPassword = (e) => {
        props.setPasswordvalida(e.target.value === props.password)
    }
  return (
    <Form className='flex-container'>
        <div className='formulario'>
            <h1> {props.titulo} </h1>  
            <Form.Group className='nombre-estilo'>
                <p>{props.descripcion}</p>
                <input onChange={props.actualizarNombre} value = {props.nombre} type="text" placeholder="ingresa un texto" />
            </Form.Group>
            <br></br>
            <Form.Group className='password-estilo'> 
                <p>Password</p>
                <input onChange={validacionPassword} type="password" placeholder="ingrese contraseña" />
            </Form.Group>
        </div>
    </Form>
  );
}

export default Formulario;