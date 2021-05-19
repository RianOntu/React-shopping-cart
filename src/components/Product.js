import React from 'react';

const Product=({product})=>{
    return (
       
            
            <div className="card" style={{alignItems:"center",height:"350px"}}>
  <img src={product.image} alt="Avatar" style={{width:"100px",height:"92px"}}/>
  <div style={{justifyContent:"center"}}>
    <h4><b>{product.title}</b></h4> 
    <p>BDT {product.price}</p> 
  </div>
</div>
        
    )

}
export default Product;