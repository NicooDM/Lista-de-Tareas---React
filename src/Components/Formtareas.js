import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const Formtareas = () => {
  return (
    <>
      <Form className="container my-5">
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una Tarea" />
          <Button variant="secondary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
          <ListaTareas/>
      </section>
    </>
  );
};

export default Formtareas;
