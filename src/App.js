
import './App.css';
import Subtitulo from './Components/Subtitulo';
import Titulo from './Components/Titulo';
import "bootstrap/dist/css/bootstrap.min.css"
import Formtareas from './Components/Formtareas';

function App() {
  return (
    <div>
     <Titulo/>
     <Subtitulo comision='17i' estado={true}/>
     <Formtareas></Formtareas>
    </div>
  );
}


export default App;
