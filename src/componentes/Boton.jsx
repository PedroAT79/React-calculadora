import React from 'react';
import '../hojas de estilo/Boton.css'

function Boton(props){
    
    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.' && (valor !== '=')); //si no es un valor un punto o un igual es true (es un operador, si no es asi seria false y quiere decir que seria un numero)

           }
    
    return(
        <button
         className= {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
         onClick={() => props.manejarClic(props.children)}>
         {props.children}   
        </button>
    )
}

export default Boton;