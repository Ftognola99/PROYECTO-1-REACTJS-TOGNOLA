import './App.css';
import Body from './components/body';
import Navbar from './components/navbar';
import Contador from './components/contador';
import { products } from './components/data/productos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Contador/>
    </div>
  );
}

export default App;



/* ----------------------------MAP PROMISES-------------------------------- */
/* 
function App() {
  
  const task = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve(products);
    }, 3000)
  })

  task.then((result)=>{
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err)=>{
    console.log(err)
  })

  
  return (
    <div className="App">
      {products.map((product, index) =>(
        <Item product={product} key={product.id}/>
      )
      )}
    </div>
  );
} */


