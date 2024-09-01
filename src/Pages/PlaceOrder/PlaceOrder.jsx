import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Deliver Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Pin code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
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
              <button>PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
