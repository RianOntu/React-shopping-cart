import React,{useState} from 'react';
import {getProducts} from './api/apiProducts';
import Main from './components/Main';


import './App.css';



function App() {
  const [products,setProducts]=useState([]);

getProducts().then(res=>setProducts(res.data));
 


  return (
    <div className="App">
    
     <div className="row">
      <Main products={products} />       

     </div>
   
      
    </div>
  );
}

export default App;
