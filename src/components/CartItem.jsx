import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrice,
} from '../CartSlice';
import './CartItem.css';

function CartItem({ navigateTo }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const [checkoutMsg, setCheckoutMsg] = useState(false);

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleCheckout = () => {
    setCheckoutMsg(true);
  };

  return (
    <div className="cart-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigateTo('home')}>
          🌿 Paradise Nursery
        </div>
        <div className="navbar-links">
          <button onClick={() => navigateTo('home')}>Inicio</button>
          <button onClick={() => navigateTo('products')}>Plantas</button>
          <button className="cart-btn-active">
            🛒 Carrito
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>
        </div>
      </nav>

      <div className="cart-content">
        <h1 className="cart-title">🛒 Tu Carrito de Compras</h1>

        {checkoutMsg && (
          <div className="checkout-banner">
            🎉 ¡Próximamente! La función de pago estará disponible muy pronto.
            <button onClick={() => setCheckoutMsg(false)}>✕</button>
          </div>
        )}

        {items.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-icon">🌱</p>
            <h2>Tu carrito está vacío</h2>
            <p>¡Agrega algunas plantas para comenzar!</p>
            <button
              className="continue-btn"
              onClick={() => navigateTo('products')}
            >
              Ver Plantas
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* LISTA DE ARTÍCULOS */}
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
                      Precio unitario: <strong>S/. {item.price.toFixed(2)}</strong>
                    </p>
                    <p className="cart-item-subtotal">
                      Subtotal:{' '}
                      <strong>S/. {(item.price * item.quantity).toFixed(2)}</strong>
                    </p>
                  </div>

                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => handleDecrease(item)}
                        title="Disminuir"
                      >
                        −
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => handleIncrease(item)}
                        title="Aumentar"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.name)}
                      title="Eliminar artículo"
                    >
                      🗑 Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RESUMEN */}
            <div className="cart-summary">
              <h2>Resumen del Pedido</h2>
              <div className="summary-row">
                <span>Artículos ({totalItems})</span>
                <span>S/. {totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span className="free">Gratis 🎁</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-total">
                <span>Total</span>
                <span>S/. {totalPrice.toFixed(2)}</span>
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                💳 Pagar — Próximamente
              </button>

              <button
                className="continue-shopping-btn"
                onClick={() => navigateTo('products')}
              >
                ← Continuar Comprando
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;