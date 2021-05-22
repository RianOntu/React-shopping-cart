import React from 'react';


const Sidenav=({cartItems,onClear,onWholeItemRemove})=>{
  

    
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
 
  
    return (
        <div className="sidenav" id="mySidenav">
           <a href="#" className="closebtn" onClick="closeNav()">&times;</a>
           <div>
               <h2 style={{textAlign:"center"}}>Your Cart</h2>
        {cartItems.length === 0 && <div><p style={{textAlign:"center",marginTop:"50%"}}>Cart is empty</p></div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row1">
              <div className="col-2"><img src={item.image} style={{height:"50px",width:"50px",marginTop:"4px",marginLeft:"22px"}}/></div>
            <div className="col-3 itemTitle">{item.title}</div>
            

            <div className="col-2 text-right">
              {item.qty} x BDT {item.price.toFixed(2)}
            </div>
            <div className="col-1 text-right">
              <a style={{color:"red"}} href="#" onClick={()=>onWholeItemRemove(item)}><i class="fas fa-trash-alt"></i></a>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
          
          
        <br/><br/>

            <div className="row1">
              <div className="col-3">
                <strong style={{marginLeft:"21px"}}>Total Price</strong>
              </div>
              <div className="col-2 text-right">
                <strong style={{marginRight:"10px"}}>BDT {itemsPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row1">
              <button className="clearCart" onClick={() => {
              
                 onClear();
              }}>
            Clear Cart
              </button>
            </div>
            <div className="row1">
              <button className="paymentBtn" onClick={() => {
                  alert('Your order placed!');
                 onClear();
              }}>
            Order Now
              </button>
            </div>
          </>
        )}
      </div>
        </div>
    )

}
export default Sidenav;