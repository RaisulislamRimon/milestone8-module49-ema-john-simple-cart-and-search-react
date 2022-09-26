import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // const Cart = ({ cart }) => {
  const cart = props.cart;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $</p>
      <p>Total Shipping: $</p>
      <p>Tax: $</p>
      <p>Grand Total: $</p>
    </div>
  );
};

export default Cart;
