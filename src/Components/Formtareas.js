import React,{useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const Formtareas = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem('ListaTareas')) || [] //getItem traer los datos del localstorage y entreparentesis la key creada
  //crear los state 
  //siempre que tengamos form por cada input se crea un state
  //*recomendacion de react , poner la palabra set y el nombre (setTareaIndividual)

  const [tareaIndividual,setTareaIndiviual] = useState('');
  const [tareas,setTareas]=useState(tareasLocalStorage);//usestate es al momento que se inicializo el arreglo tareas esta guardado como vacio

  /*const altaTarea=(e)=>{
    //para acceder al input(seria e.target.value)
  
  //como guardamos dentro del state
  setTareaIndiviual(e.target.value)
    

 // }*/
 //usar el ciclo de vida de un componente
 useEffect(
   //esta logica se ejecuta en montaje y actualizacion (de este componente)
   ()=>{
     console.log('desde useEffect') //tareas es el state donde se da de alta las tareas, y para guardar usamos localstorage
     localStorage.setItem('ListaTareas',JSON.stringify(tareas))
  },[tareas] //con la ,[](es para ejecutar el useeffect solo en fase de montaje), para que solo se ejecute en el state que indicamos se pone el nombre de dicho state en los corchetes
   )

 const handleSubmit=(e)=>{
   e.preventDefault();
   //guardar una tarea en el arreglo de tareas
   setTareas([...tareas,tareaIndividual])
   //limpiar el imput
   setTareaIndiviual('')

 }
 const borrarTareas=(nombre)=>{
   let arregloModificado= tareas.filter((item)=> item !==nombre)
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
