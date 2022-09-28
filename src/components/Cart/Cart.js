import React from "react";
import "./Cart.css";
import { getStoredCart } from "../../utilities/fakedb";

const Cart = (props) => {
  // const Cart = ({ cart }) => {
  const { cart } = props;
  // console.log(cart);
  // const cart = props.cart;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + Number(tax);

  // const storedCart = getStoredCart();
  // if (storedCart) {
  //   console.log(storedCart);
  // }

  // for (const key in storedCart) {
  //   console.log(key);
  // }

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
