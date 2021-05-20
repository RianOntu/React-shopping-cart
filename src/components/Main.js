import React from 'react';
import Product from './Product';

export default function Main({products,onAdd,btnMode,onRemove}){
    return (
        <div className="block col-3">
         <h2 style={{textAlign:"center",marginTop:"2%",marginBottom:"2%"}}>Products</h2>
         <div className="row" style={{}}>
          {products && products.map(product=>(
              <Product key={product.id} product={product} onAdd={onAdd} btnMode={btnMode} onRemove={onRemove}  />
          ))}
         </div>
        </div>
    )
}