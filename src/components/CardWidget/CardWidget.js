

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import cart from "./assets/cart.jpg"; 

const CardWidget = () => {
  return (
     
    <div className="card text-center" style={{ width: "10rem" }}>
      <img src={cart} className="card-img-top" alt="Card Widget" />
      <div className="card-body">
        <h5 className="card-title">Carrito</h5>
        <p className="card-text">0 items</p>
      </div>
    </div>
  );
}

export default CardWidget;
