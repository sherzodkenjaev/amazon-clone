import React from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://blog.optimizely.com/wp-content/uploads/2014/01/Original-Sony-banner.jpg"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket, You can go and find product
              needed and press "Add to busket" to push them here.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkoutTitle">Your Shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkoutRight">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
