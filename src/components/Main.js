import React from 'react';
import Product from './Product';

export default function Main({products,onAdd}){
    return (
        <div className="block col-3">
         <h2 style={{textAlign:"center"}}>Products</h2>
         <div className="row" style={{}}>
          {products && products.map(product=>(
              <Product key={product.id} product={product} onAdd={onAdd} />
          ))}
         </div>
        </div>
    )
}