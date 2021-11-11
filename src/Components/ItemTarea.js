import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ItemTarea = (props) => {
    return (
        <ListGroup.Item>{props.tarea}</ListGroup.Item>
    );
};

export default ItemTarea;