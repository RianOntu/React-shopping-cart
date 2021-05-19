import React from 'react';
import Product from './Product';

export default function Main({products}){
    return (
        <div className="block col-3">
         <h2>Products</h2>
         <div className="row" style={{}}>
          {products && products.map(product=>(
              <Product key={product.id} product={product} />
          ))}
         </div>
        </div>
    )
}