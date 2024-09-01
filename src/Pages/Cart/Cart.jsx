
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, product_about, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate= useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_about.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>&#8377;{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>&#8377;{item.price * cartItems[item._id]}</p>
                  <MdDelete
                    onClick={() => removeFromCart(item._id)}
                    className="delete-icon"
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#8377;{getTotalCartAmount()===0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>&#8377;{getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+50}</b>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode enter it here.</p>
            <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code"/>
            <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
