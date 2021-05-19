import React from 'react';

const Header=({countCartItems})=>{
return (
    <div className="navbar">
      <div>
        <a href="#">
          <img src="m-tech.png" style={{height:"50px",width:"130px"}} />
        </a>
      </div>
     
          {countCartItems ? <a id="cart" style={{cursor:"pointer"}}><i className="fas fa-shopping-cart"></i><sup className="badge">{countCartItems}</sup></a> : <a id="cart" style={{cursor:"pointer"}}><i className="fas fa-shopping-cart"></i><sup className="badge">0</sup></a>
        }
    

    </div>
)
}
export default Header;