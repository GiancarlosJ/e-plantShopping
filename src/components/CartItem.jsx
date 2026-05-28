import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrice,
} from "../CartSlice";
import "./CartItem.css";

function CartItem({ navigateTo }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  const handleRemove = (name) => dispatch(removeItem(name));

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 }),
      );
    }
  };

  const handleContinueShopping = () => navigateTo("products");

  const handleCheckout = () => setCheckoutMsg(true);

  return (
    <div className="cart-container">
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigateTo("home")}>
          🌿 Paradise Nursery
        </div>
        <div className="navbar-links">
          <button onClick={() => navigateTo("home")}>Home</button>
          <button onClick={() => navigateTo("products")}>Plants</button>
          <button className="cart-btn-active">
            🛒 Cart
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </nav>

      <div className="cart-content">
        <h1 className="cart-title">🛒 Shopping Cart</h1>

        {checkoutMsg && (
          <div className="checkout-banner">
            🎉 Coming Soon! The checkout feature will be available very soon.
            <button onClick={() => setCheckoutMsg(false)}>✕</button>
          </div>
        )}

        {items.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-icon">🌱</p>
            <h2>Your cart is empty</h2>
            <p>Add some plants to get started!</p>
            <button className="continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-list">
              {items.map((item) => (
                <div key={item.name} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/100x100/e8f5e9/2e7d32?text=${item.name}`;
                    }}
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-unit">
                      Unit Price: <strong>${item.price.toFixed(2)}</strong>
                    </p>
                    <p className="cart-item-subtotal">
                      Total Cost:{" "}
                      <strong>
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </p>
                  </div>

                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => handleDecrement(item)}
                      >
                        −
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.name)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Plants ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free">Free 🎁</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-total">
                <span>Total Amount</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                💳 Checkout — Coming Soon
              </button>

              <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                ← Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
