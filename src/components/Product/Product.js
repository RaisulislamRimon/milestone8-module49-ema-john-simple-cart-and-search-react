import React from "react";
import "./Product.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

const Product = (props) => {
  const { id, name, img, seller, price, ratings } = props.product;
  // const handleAddToCart = props.handleAddToCart;

  // for broken image error handling - 404 error
  //in your component
  // const  addDefaultSrc => (e) =>{
  //   e.target.src = "some default image url";
  // }
  // const handleImageError = (e) => {
  //   //write your logic here.
  //   console.log(e.target.src);
  // };

  return (
    <div className="product">
      {/* <img
        // onError={this.addDefaultSrc}
        onError={() =>
          this.handleImageError("https://i.ibb.co/7QpKsCX/image.png")
        }
        src={img}
        // src={img ? img : "404-image not found"}
        alt=""
      /> */}

      <img
        src={img}
        alt=""
        onError={(e) => {
          // e.currentTarget.src = "your_image_not_found_defalt_picture_here";
          e.currentTarget.src =
            // "https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            "https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        }}
      />

      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p>Add to cart</p>
        {/* <FontAwesomeIcon icon={icon({ name: "coffee", style: "solid" })} /> */}
      </button>
    </div>
  );
};

export default Product;
