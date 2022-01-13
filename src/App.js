import logo from './logo.svg';
import './App.css';
import MiModulo from "./MiModulo.js";
import NavBar from "./compopnent/NavBar";
import CardProduct from './compopnent/cardProduct';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
      
      <CardProduct name="Crema Ultra Hidratante" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit laborum debitis ipsum deserunt? Dolor, totam." />

      <CardProduct name="Crema Lifting" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit laborum debitis ipsum deserunt? Dolor, totam." />

      <CardProduct name="Crema Lifting y Rellenador" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit laborum debitis ipsum deserunt? Dolor, totam." />
        
        <p>
          La Primera modificacion en React JS
        </p>
    
      </header>

      <MiModulo/>

    </div>
  );
}

export default App;
