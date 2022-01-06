
import './App.css';
import Hello from './components/Hello';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
         <Greet FName='Fname1' LName='Lname1' > ssalam</Greet>
         <Hello FName='Fname2' LName='Lname2'> salam</Hello>
    </div>
  );
}

export default App;


