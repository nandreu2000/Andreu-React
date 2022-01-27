import './App.css';
import MiModulo from "./MiModulo.js";
import NavBar from "./compopnent/NavBar";
import CardProduct from './compopnent/cardProduct';



function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
      
      <CardProduct />

        
        <p>
          La Primera modificacion en React JS
        </p>
    
      </header>

      <MiModulo/>


    </div>
  );
}

export default App;
