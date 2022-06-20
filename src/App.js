import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Card/>
    </div>
  );
}

export default App;
