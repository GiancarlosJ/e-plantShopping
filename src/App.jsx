import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => setCurrentPage(page);

  return (
    <>
      {currentPage === 'home' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>🌿 Paradise Nursery</h1>
            <p className="subtitle">Tu tienda de plantas de interior favorita</p>
            <p className="tagline">"Donde cada planta encuentra su hogar"</p>
            <button className="start-btn" onClick={() => navigateTo('products')}>
              Comenzar
            </button>
            <br />
            <button className="about-link" onClick={() => navigateTo('about')}>
              Acerca de Nosotros
            </button>
          </div>
        </div>
      )}

      {currentPage === 'products' && (
        <ProductList navigateTo={navigateTo} />
      )}

      {currentPage === 'cart' && (
        <CartItem navigateTo={navigateTo} />
      )}

      {currentPage === 'about' && (
        <AboutUs navigateTo={navigateTo} />
      )}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;