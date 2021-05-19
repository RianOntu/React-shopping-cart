import React from 'react';

const Sidenav=({cartItems,onClear})=>{
  
    
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
    return (
        <div className="sidenav" id="mySidenav">
           <a href="#" className="closebtn" onClick="closeNav()">&times;</a>
           <div>
               <h2>Your Cart</h2>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
              <div className="col-2"><img src={item.image} style={{height:"50px",width:"50px",marginTop:"4px"}}/></div>
            <div className="col-2">{item.title}</div>
            

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
          
          
        <br/><br/>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${itemsPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="paymentBtn"onClick={() => {
                  alert('Payment Completed!');
                 onClear();
              }}>
              Payment
              </button>
            </div>
          </>
        )}
      </div>
        </div>
    )

}
export default Sidenav;