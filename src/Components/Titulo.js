import React, { Component } from 'react';
//Si escribo rcc se instala el class component 

class Titulo extends Component {
    render() {
        return (
            <h1 className="text-center my-5 display-3">Lista de Tareas</h1>
        );
    }
}

export default Titulo;