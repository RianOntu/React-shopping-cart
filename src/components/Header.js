import React from 'react';

const Header=()=>{
return (
    <div className="navbar">
      <div>
        <a href="#">
          <img src="m-tech.png" style={{height:"40px",width:"100px"}} />
        </a>
      </div>
     
          <a id="cart" style={{cursor:"pointer"}}><i className="fas fa-shopping-cart"></i></a>
    

    </div>
)
}
export default Header;