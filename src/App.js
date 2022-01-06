
import './App.css';
import { Welcome } from './components/Welcome'
import Greet from "./components/Greet";
import Hello  from './components/Hello';

function App() {
  return (
    <div className="App">
         <Hello name='ahmed'><button>click me</button></Hello>
        <Greet name="aicha"> <h3>welcome</h3> </Greet>
        {/* <Welcome/> */}
    </div>
  );
}

export default App;
