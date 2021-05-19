import React,{useEffect, useState} from 'react';
import {getProducts} from './api/apiProducts';
import Main from './components/Main';
import Header from './components/Header';
import Sidenav from './components/Sidenav';

import './App.css';



function App() {
  const [products,setProducts]=useState([]);
  const [cartItems, setCartItems] = useState([]);

useEffect(()=>{
  getProducts().then(res=>setProducts(res.data));
},[])
const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};
const onClear=()=>{
  setCartItems([])
}


  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
    
     <div>
      <Main products={products} onAdd={onAdd} onRemove={onRemove}/>  
      <Sidenav cartItems={cartItems} onClear={onClear} />  

     </div>
   
      
    </div>
  );
}

export default App;
