import React,{useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import {Provider} from 'react-redux';
import myStore from './redux/store';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Main from './Main';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [btnMode,setbtnMode]=useState(false);
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
    setbtnMode(true)
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


  return (
    <div className="App">
     <Provider store={myStore}>
     <BrowserRouter>
     <Main />
    </BrowserRouter>
     </Provider>
 
     
   
      
    </div>
  );
}

export default App;
