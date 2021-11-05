import React from 'react';
//rsc para crear un componente funcional
const Subtitulo = (props) => {
    //aqui va la logica
    return (
        //aqui va el maquetado y un poco de logica
        
            <h2 className="text-center">Tareas de la comision {props.comision} </h2>
            
        
    );
};

export default Subtitulo;