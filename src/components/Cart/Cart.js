import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  return (
    <div className="cart">
      <h1>this is cart component</h1>
      <h3>This is cart</h3>
      <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
