import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <ListGroup className="my-5">
          {
            props.tareas.map((item,posicion)=> <ItemTarea key={posicion} tarea={item}></ItemTarea>)
          }
       
      </ListGroup>
    );
};

export default ListaTareas;