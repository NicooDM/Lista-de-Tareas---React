import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const Formtareas = () => {
  //crear los state 
  //siempre que tengamos form por cada input se crea un state
  //*recomendacion de react , poner la palabra set y el nombre (setTareaIndividual)

  const [tareaIndividual,setTareaIndiviual] = useState('');
  const [tareas,setTareas]=useState([]);

  /*const altaTarea=(e)=>{
    //para acceder al input(seria e.target.value)
  
  //como guardamos dentro del state
  setTareaIndiviual(e.target.value)
    

 // }*/

 const handleSubmit=(e)=>{
   e.preventDefault();
   //guardar una tarea en el arreglo de tareas
   setTareas([...tareas,tareaIndividual])
   //limpiar el imput
   setTareaIndiviual('')

 }
 const borrarTareas=(nombre)=>{
   let arregloModificado= tareas.filter((item)=> item !=nombre)
   setTareas(arregloModificado)

 }

  return (
    <>
      <Form className="container my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una Tarea" onChange={(e)=>{setTareaIndiviual(e.target.value)}} value={tareaIndividual}/>
          <Button variant="secondary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
          <ListaTareas tareas={tareas} borrarTareas={borrarTareas}/>
      </section>
    </>
  );
};

export default Formtareas;
