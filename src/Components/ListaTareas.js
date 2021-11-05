import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = () => {
    return (
        <ListGroup className="my-5">
        <ItemTarea></ItemTarea>
      </ListGroup>
    );
};

export default ListaTareas;