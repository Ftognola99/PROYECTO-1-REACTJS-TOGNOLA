import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import Navbar from './components/navbar';
import Hello from './components/hello';
import Contador from './components/contador';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Card/>
      <Hello/>
      
       
    </div>
  );
}

export default App;
