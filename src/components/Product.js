import React from 'react';

const Product=({product,onAdd})=>{
    return (
       
            
            <div className="card" style={{alignItems:"center",height:"350px"}}>
  <img src={product.image} alt="Avatar" style={{width:"100px",height:"92px",marginLeft:"30%"}}/>
  <div style={{justifyContent:"center"}}>
    <h4 style={{textAlign:"center"}}><b>{product.title}</b></h4> 
    <p style={{textAlign:"center"}}>BDT {product.price}</p> 
  </div>
  <button style={{marginLeft:"30%"}} onClick={() => onAdd(product)}>Add To Cart</button>
</div>
        
    )

}
export default Product;