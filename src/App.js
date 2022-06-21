import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import Navbar from './components/navbar';
import Card from './components/card';
import Hello from './components/hello';

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
