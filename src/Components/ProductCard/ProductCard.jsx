// import React from "react";
// import "./ProductCard.css";
// import { assets } from "../../assets/assets";
// function ProductCard(props) {
//   return (
//     <div className="product-item">
//       <div className="product-item-img-container">
//         <img className="product-item-image" src={props.image} alt="" width={150}/>
//       </div>
//       <div className="product-item-info">
//         <div className="product-item-name-rating">
//           <p>{props.name}</p>
//           <img src={assets.rating_starts} alt="" width={80}/>
//         </div>
//         <p className="product-item-desc">{props.description}</p>
//         <p className="product-item-price">Rs. {props.price}</p>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function ProductCard({ id, name, description, image, price }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    if (description.length <= 60) {
      return description;
    }

    return isExpanded
      ? description
      : `${description.slice(0, 60)}...`;
  };

  return (
    <div className="product-item">
      <div className="product-item-img-container">
        <img
          className="product-item-image"
          src={image}
          alt=""
          width={150}
        />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.shopping_cart}
            onClick={() => addToCart(id)}
            alt=""
          />
        ) : (
          <div className="product-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_white} alt=""/>
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.insert_icon_white} alt=""/>
          </div>
        )}
      </div>
      <hr/>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" width={80} />
        </div>
        <p className="product-item-desc">
          {renderDescription()}
          {description.length > 60 && (
            <span onClick={toggleDescription} className="read-more-less">
              {isExpanded ? "Read less" : "Read more"}
            </span>
          )}
        </p>
        <p className="product-item-price">Rs. {price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
